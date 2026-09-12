import { LoremPicsumEntityBase } from '../LoremPicsumEntityBase';
import type { LoremPicsumSDK } from '../LoremPicsumSDK';
import type { Control } from '../types';
import type { Height, HeightLoadMatch } from '../LoremPicsumTypes';
declare class HeightEntity extends LoremPicsumEntityBase<Height> {
    constructor(client: LoremPicsumSDK, entopts: any);
    make(this: HeightEntity): HeightEntity;
    load(this: any, reqmatch?: HeightLoadMatch, ctrl?: Control): Promise<HeightEntity>;
}
export { HeightEntity };
