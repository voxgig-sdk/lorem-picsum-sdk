import { LoremPicsumEntityBase } from '../LoremPicsumEntityBase';
import type { LoremPicsumSDK } from '../LoremPicsumSDK';
import type { Control } from '../types';
import type { Heightwebp, HeightwebpLoadMatch } from '../LoremPicsumTypes';
declare class HeightwebpEntity extends LoremPicsumEntityBase<Heightwebp> {
    constructor(client: LoremPicsumSDK, entopts: any);
    make(this: HeightwebpEntity): HeightwebpEntity;
    load(this: any, reqmatch?: HeightwebpLoadMatch, ctrl?: Control): Promise<HeightwebpEntity>;
}
export { HeightwebpEntity };
