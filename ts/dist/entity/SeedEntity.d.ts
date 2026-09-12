import { LoremPicsumEntityBase } from '../LoremPicsumEntityBase';
import type { LoremPicsumSDK } from '../LoremPicsumSDK';
import type { Control } from '../types';
import type { Seed, SeedLoadMatch } from '../LoremPicsumTypes';
declare class SeedEntity extends LoremPicsumEntityBase<Seed> {
    constructor(client: LoremPicsumSDK, entopts: any);
    make(this: SeedEntity): SeedEntity;
    load(this: any, reqmatch?: SeedLoadMatch, ctrl?: Control): Promise<SeedEntity>;
}
export { SeedEntity };
