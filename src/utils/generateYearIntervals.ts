export function generateYearIntervals(startYear: number, currentYear: number): string[] {
  const intervals: string[] = [];

  for (let year = startYear; year < currentYear; year += 10) {
    const endYear = year + 10;
    // Проверяем, не выходит ли конец промежутка за текущий год
    if (endYear <= currentYear) {
      intervals.push(`${year}-${endYear}`);
    }
  }

  // Добавляем последний промежуток
  if (intervals.length > 0) {
    const lastStartYear = parseInt(intervals[intervals.length - 1].split("-")[1]);
    intervals.push(`${lastStartYear}-${currentYear}`);
  } else {
    // Если нет промежутков, добавляем от startYear до currentYear
    intervals.push(`${startYear}-${currentYear}`);
  }
  return intervals;
}
