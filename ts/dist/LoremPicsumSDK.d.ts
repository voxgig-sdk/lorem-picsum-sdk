import { GetRandomImageEntity } from './entity/GetRandomImageEntity';
import { GetRandomSquareImageEntity } from './entity/GetRandomSquareImageEntity';
import { HeightEntity } from './entity/HeightEntity';
import { HeightwebpEntity } from './entity/HeightwebpEntity';
import { IdInfoEntity } from './entity/IdInfoEntity';
import { IdnEntity } from './entity/IdnEntity';
import { ListEntity } from './entity/ListEntity';
import { SeedEntity } from './entity/SeedEntity';
import { SeedInfoEntity } from './entity/SeedInfoEntity';
export type * from './LoremPicsumTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { LoremPicsumEntityBase } from './LoremPicsumEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class LoremPicsumSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    GetRandomImage(entopts?: Record<string, any>): GetRandomImageEntity;
    GetRandomSquareImage(entopts?: Record<string, any>): GetRandomSquareImageEntity;
    Height(entopts?: Record<string, any>): HeightEntity;
    Heightwebp(entopts?: Record<string, any>): HeightwebpEntity;
    IdInfo(entopts?: Record<string, any>): IdInfoEntity;
    Idn(entopts?: Record<string, any>): IdnEntity;
    List(entopts?: Record<string, any>): ListEntity;
    Seed(entopts?: Record<string, any>): SeedEntity;
    SeedInfo(entopts?: Record<string, any>): SeedInfoEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): LoremPicsumSDK;
    tester(testopts?: any, sdkopts?: any): LoremPicsumSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof LoremPicsumSDK;
export { stdutil, config, BaseFeature, LoremPicsumEntityBase, LoremPicsumSDK, SDK, };
