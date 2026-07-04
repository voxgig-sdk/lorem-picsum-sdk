package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/lorem-picsum-sdk/go"
	"github.com/voxgig-sdk/lorem-picsum-sdk/go/core"

	vs "github.com/voxgig-sdk/lorem-picsum-sdk/go/utility/struct"
)

func TestHeightwebpEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Heightwebp(nil)
		if ent == nil {
			t.Fatal("expected non-nil HeightwebpEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := heightwebpBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "heightwebp." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set LOREMPICSUM_TEST_HEIGHTWEBP_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		heightwebpRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.heightwebp", setup.data)))
		var heightwebpRef01Data map[string]any
		if len(heightwebpRef01DataRaw) > 0 {
			heightwebpRef01Data = core.ToMapAny(heightwebpRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = heightwebpRef01Data

		// LOAD
		heightwebpRef01Ent := client.Heightwebp(nil)
		heightwebpRef01MatchDt0 := map[string]any{}
		heightwebpRef01DataDt0Loaded, err := heightwebpRef01Ent.Load(heightwebpRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if heightwebpRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func heightwebpBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "heightwebp", "HeightwebpTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read heightwebp test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse heightwebp test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"heightwebp01", "heightwebp02", "heightwebp03", "height01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("LOREMPICSUM_TEST_HEIGHTWEBP_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LOREMPICSUM_TEST_HEIGHTWEBP_ENTID": idmap,
		"LOREMPICSUM_TEST_LIVE":      "FALSE",
		"LOREMPICSUM_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["LOREMPICSUM_TEST_HEIGHTWEBP_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["LOREMPICSUM_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewLoremPicsumSDK(core.ToMapAny(mergedOpts))
	}

	live := env["LOREMPICSUM_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["LOREMPICSUM_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
