import { LoremPicsumEntityBase } from '../LoremPicsumEntityBase';
import type { LoremPicsumSDK } from '../LoremPicsumSDK';
import type { Control } from '../types';
import type { List, ListListMatch } from '../LoremPicsumTypes';
declare class ListEntity extends LoremPicsumEntityBase<List> {
    constructor(client: LoremPicsumSDK, entopts: any);
    make(this: ListEntity): ListEntity;
    list(this: any, reqmatch?: ListListMatch, ctrl?: Control): Promise<ListEntity[]>;
}
export { ListEntity };
