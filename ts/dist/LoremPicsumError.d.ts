import { Context } from './Context';
declare class LoremPicsumError extends Error {
    isLoremPicsumError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { LoremPicsumError };
