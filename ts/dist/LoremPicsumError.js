"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoremPicsumError = void 0;
class LoremPicsumError extends Error {
    isLoremPicsumError = true;
    sdk = 'LoremPicsum';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.LoremPicsumError = LoremPicsumError;
//# sourceMappingURL=LoremPicsumError.js.map