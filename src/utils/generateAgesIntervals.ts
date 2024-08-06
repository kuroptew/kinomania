export function generateAgesIntervals(arr: (string | number)[]): string[] {
  const intervals: string[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    intervals.push(`${arr[i]}-${arr[i + 1]}`);
  }

  return intervals;
}


