type PrevAndNext = {
  prev: string | null;
  next: string | null;
};

function generateUrlPrevAndNext(
  route: string,
  actualPage: number,
  maxPages: number
): PrevAndNext {
  return {
    prev:
      actualPage > 1 && actualPage < maxPages + 1
        ? `${process.env.DEPLOYURL}/${route}?page=${actualPage - 1}`
        : null,
    next:
      actualPage >= maxPages
        ? null
        : `${process.env.DEPLOYURL}/${route}&page=${actualPage + 1}`,
  };
}

function isPageParamNumberValid(pageNumber: number, maxPages: number): boolean {
  return pageNumber > 0 && pageNumber < maxPages + 1;
}

function calculateTotalPages(
  totalValues: number,
  valuesPerPage: number
): number {
  return Math.ceil(totalValues / valuesPerPage);
}

export { generateUrlPrevAndNext, isPageParamNumberValid, calculateTotalPages };
