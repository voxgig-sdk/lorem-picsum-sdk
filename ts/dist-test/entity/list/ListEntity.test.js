"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOREM_PICSUM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOREM_PICSUM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoremPicsumSDK.test();
        const ent = testsdk.List();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOREM_PICSUM_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "author": { "a": true, "h": "Author", "n": "author", "r": true, "sh": "Name of the image author", "t": "`$STRING`", "key$": "author", "index$": 0 }, "download_url": { "a": true, "fo": "uri", "h": "Download Url", "n": "download_url", "r": true, "sh": "URL to download the image from Picsum", "t": "`$STRING`", "key$": "download_url", "index$": 1 }, "height": { "a": true, "h": "Height", "n": "height", "r": true, "sh": "Original height of the image in pixels", "t": "`$INTEGER`", "key$": "height", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the image", "t": "`$STRING`", "key$": "id", "index$": 3 }, "url": { "a": true, "fo": "uri", "h": "Url", "n": "url", "r": true, "sh": "URL to the original image on Unsplash", "t": "`$STRING`", "key$": "url", "index$": 4 }, "width": { "a": true, "h": "Width", "n": "width", "r": true, "sh": "Original width of the image in pixels", "t": "`$INTEGER`", "key$": "width", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "list", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/list", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 30, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v2/list", "q": { "exist": ["limit", "page"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "list" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "list", "name__orig": "list", "Name": "List", "name_": "list", "name-": "list", "NAME": "LIST", "index$": 6 }, { "active": true, "entity": "list", "key$": "BasicListFlow", "kind": "basic", "name": "BasicListFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "list_ref01" } }], "index$": 0 }] }, 'List', { "GET /v2/list": { "protocol": "http", "operationId": "listImages", "responses": { "200": { "description": "List of images retrieved successfully", "headers": { "Link": { "description": "Pagination links for next/previous pages", "schema": { "type": "string" } } }, "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "id": { "description": "Unique identifier for the image", "key$": "id", "type": "string" }, "author": { "description": "Name of the image author", "key$": "author", "type": "string" }, "width": { "description": "Original width of the image in pixels", "key$": "width", "type": "integer" }, "height": { "description": "Original height of the image in pixels", "key$": "height", "type": "integer" }, "url": { "description": "URL to the original image on Unsplash", "format": "uri", "key$": "url", "type": "string" }, "download_url": { "description": "URL to download the image from Picsum", "format": "uri", "key$": "download_url", "type": "string" } }, "required": ["id", "author", "width", "height", "url", "download_url"], "x-ref": "#/components/schemas/ImageMetadata", "index$": 0 } } } } } }, "parameters": [{ "name": "page", "in": "query", "required": false, "description": "Page number for pagination", "schema": { "type": "integer", "minimum": 1, "default": 1 }, "index$": 0 }, { "name": "limit", "in": "query", "required": false, "description": "Number of items per page", "schema": { "type": "integer", "minimum": 1, "maximum": 100, "default": 30 }, "index$": 1 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let list_ref01_data = Object.values(setup.data.existing.list)[0];
        // LIST
        const list_ref01_ent = client.List();
        const list_ref01_match = {};
        const list_ref01_list = (await list_ref01_ent.list(list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/list/ListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoremPicsumSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['list01', 'list02', 'list03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOREM_PICSUM_TEST_LIST_ENTID': idmap,
        'LOREM_PICSUM_TEST_LIVE': 'FALSE',
        'LOREM_PICSUM_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['LOREM_PICSUM_TEST_LIST_ENTID'];
    const live = 'TRUE' === env.LOREM_PICSUM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOREM_PICSUM_TEST_LIST_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.LoremPicsumSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.LOREM_PICSUM_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ListEntity.test.js.map