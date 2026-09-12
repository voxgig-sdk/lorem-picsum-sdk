import { LoremPicsumEntityBase } from '../LoremPicsumEntityBase';
import type { LoremPicsumSDK } from '../LoremPicsumSDK';
import type { Control } from '../types';
import type { GetRandomSquareImage, GetRandomSquareImageLoadMatch } from '../LoremPicsumTypes';
declare class GetRandomSquareImageEntity extends LoremPicsumEntityBase<GetRandomSquareImage> {
    constructor(client: LoremPicsumSDK, entopts: any);
    make(this: GetRandomSquareImageEntity): GetRandomSquareImageEntity;
    load(this: any, reqmatch?: GetRandomSquareImageLoadMatch, ctrl?: Control): Promise<GetRandomSquareImageEntity>;
}
export { GetRandomSquareImageEntity };
