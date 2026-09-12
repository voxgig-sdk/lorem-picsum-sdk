import { LoremPicsumEntityBase } from '../LoremPicsumEntityBase';
import type { LoremPicsumSDK } from '../LoremPicsumSDK';
import type { Control } from '../types';
import type { SeedInfo, SeedInfoLoadMatch } from '../LoremPicsumTypes';
declare class SeedInfoEntity extends LoremPicsumEntityBase<SeedInfo> {
    constructor(client: LoremPicsumSDK, entopts: any);
    make(this: SeedInfoEntity): SeedInfoEntity;
    load(this: any, reqmatch?: SeedInfoLoadMatch, ctrl?: Control): Promise<SeedInfoEntity>;
}
export { SeedInfoEntity };
