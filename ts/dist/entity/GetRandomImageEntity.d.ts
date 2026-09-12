import { LoremPicsumEntityBase } from '../LoremPicsumEntityBase';
import type { LoremPicsumSDK } from '../LoremPicsumSDK';
import type { Control } from '../types';
import type { GetRandomImage, GetRandomImageLoadMatch } from '../LoremPicsumTypes';
declare class GetRandomImageEntity extends LoremPicsumEntityBase<GetRandomImage> {
    constructor(client: LoremPicsumSDK, entopts: any);
    make(this: GetRandomImageEntity): GetRandomImageEntity;
    load(this: any, reqmatch?: GetRandomImageLoadMatch, ctrl?: Control): Promise<GetRandomImageEntity>;
}
export { GetRandomImageEntity };
