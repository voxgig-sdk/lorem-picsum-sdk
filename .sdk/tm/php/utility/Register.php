<?php
declare(strict_types=1);

// LoremPicsum SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

LoremPicsumUtility::setRegistrar(function (LoremPicsumUtility $u): void {
    $u->clean = [LoremPicsumClean::class, 'call'];
    $u->done = [LoremPicsumDone::class, 'call'];
    $u->make_error = [LoremPicsumMakeError::class, 'call'];
    $u->feature_add = [LoremPicsumFeatureAdd::class, 'call'];
    $u->feature_hook = [LoremPicsumFeatureHook::class, 'call'];
    $u->feature_init = [LoremPicsumFeatureInit::class, 'call'];
    $u->fetcher = [LoremPicsumFetcher::class, 'call'];
    $u->make_fetch_def = [LoremPicsumMakeFetchDef::class, 'call'];
    $u->make_context = [LoremPicsumMakeContext::class, 'call'];
    $u->make_options = [LoremPicsumMakeOptions::class, 'call'];
    $u->make_request = [LoremPicsumMakeRequest::class, 'call'];
    $u->make_response = [LoremPicsumMakeResponse::class, 'call'];
    $u->make_result = [LoremPicsumMakeResult::class, 'call'];
    $u->make_point = [LoremPicsumMakePoint::class, 'call'];
    $u->make_spec = [LoremPicsumMakeSpec::class, 'call'];
    $u->make_url = [LoremPicsumMakeUrl::class, 'call'];
    $u->param = [LoremPicsumParam::class, 'call'];
    $u->prepare_auth = [LoremPicsumPrepareAuth::class, 'call'];
    $u->prepare_body = [LoremPicsumPrepareBody::class, 'call'];
    $u->prepare_headers = [LoremPicsumPrepareHeaders::class, 'call'];
    $u->prepare_method = [LoremPicsumPrepareMethod::class, 'call'];
    $u->prepare_params = [LoremPicsumPrepareParams::class, 'call'];
    $u->prepare_path = [LoremPicsumPreparePath::class, 'call'];
    $u->prepare_query = [LoremPicsumPrepareQuery::class, 'call'];
    $u->result_basic = [LoremPicsumResultBasic::class, 'call'];
    $u->result_body = [LoremPicsumResultBody::class, 'call'];
    $u->result_headers = [LoremPicsumResultHeaders::class, 'call'];
    $u->transform_request = [LoremPicsumTransformRequest::class, 'call'];
    $u->transform_response = [LoremPicsumTransformResponse::class, 'call'];
});
