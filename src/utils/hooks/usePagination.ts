import { useMemo } from "react";
import { rangeArr } from "../rangeArr";

export interface PaginationProps {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
}

export const DOTS = "...";

export const usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }: PaginationProps) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Количество страниц определяется как siblingCount + firstPage + LastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
      Case 1:
      Если количество страниц меньше номеров страниц, которые мы хотим показать в нашем
      paginationComponent, мы возвращаем диапазон [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return rangeArr(1, totalPageCount);
    }

    /*
    	Вычисляем левый и правый одноуровневый индекс и убедитесь, что они находятся в пределах диапазона 1 и totalPageCount.
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    /*
      Мы не показываем точки только тогда, когда между крайними значениями родственного элемента и пределами страницы нужно вставить только один номер страницы, т. е. 1 и totalPageCount. Следовательно, мы используем leftSiblingIndex > 2 и rightSiblingIndex < totalPageCount - 2.
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    /*
    	Case 2: Нет левых точек для отображения, но должны отображаться правые точки
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = rangeArr(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    /*
    	Case 3: Нет правых точек для отображения, но должны отображаться левые точки
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = rangeArr(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    /*
    	Case 4: Отображаются как левая, так и правая точки.
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = rangeArr(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
