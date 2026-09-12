import { LoremPicsumEntityBase } from '../LoremPicsumEntityBase';
import type { LoremPicsumSDK } from '../LoremPicsumSDK';
import type { Control } from '../types';
import type { IdInfo, IdInfoLoadMatch } from '../LoremPicsumTypes';
declare class IdInfoEntity extends LoremPicsumEntityBase<IdInfo> {
    constructor(client: LoremPicsumSDK, entopts: any);
    make(this: IdInfoEntity): IdInfoEntity;
    load(this: any, reqmatch?: IdInfoLoadMatch, ctrl?: Control): Promise<IdInfoEntity>;
}
export { IdInfoEntity };
