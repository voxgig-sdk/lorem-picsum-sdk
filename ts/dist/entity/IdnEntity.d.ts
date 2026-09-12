import { LoremPicsumEntityBase } from '../LoremPicsumEntityBase';
import type { LoremPicsumSDK } from '../LoremPicsumSDK';
import type { Control } from '../types';
import type { Idn, IdnLoadMatch } from '../LoremPicsumTypes';
declare class IdnEntity extends LoremPicsumEntityBase<Idn> {
    constructor(client: LoremPicsumSDK, entopts: any);
    make(this: IdnEntity): IdnEntity;
    load(this: any, reqmatch?: IdnLoadMatch, ctrl?: Control): Promise<IdnEntity>;
}
export { IdnEntity };
