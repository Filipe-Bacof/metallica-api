"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNumericString = validateNumericString;
exports.validateTextString = validateTextString;
function validateNumericString(input) {
    const numericRegex = /^\d+$/;
    return numericRegex.test(input);
}
function validateTextString(input) {
    const textRegex = /^[a-zA-Z0-9]{3,}$/;
    return textRegex.test(input);
}
//# sourceMappingURL=stringFunctions.js.map