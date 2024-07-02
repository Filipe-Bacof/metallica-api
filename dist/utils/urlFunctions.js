"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUrlPrevAndNext = generateUrlPrevAndNext;
exports.isPageParamNumberValid = isPageParamNumberValid;
exports.calculateTotalPages = calculateTotalPages;
function generateUrlPrevAndNext(route, actualPage, maxPages) {
    return {
        prev: actualPage > 1 && actualPage < maxPages + 1
            ? `${process.env.DEPLOYURL}/${route}?page=${actualPage - 1}`
            : null,
        next: actualPage >= maxPages
            ? null
            : `${process.env.DEPLOYURL}/${route}&page=${actualPage + 1}`,
    };
}
function isPageParamNumberValid(pageNumber, maxPages) {
    return pageNumber > 0 && pageNumber < maxPages + 1;
}
function calculateTotalPages(totalValues, valuesPerPage) {
    return Math.ceil(totalValues / valuesPerPage);
}
//# sourceMappingURL=urlFunctions.js.map