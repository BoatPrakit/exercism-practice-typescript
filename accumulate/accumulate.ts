export function accumulate(list: any[], accumulator: any): number[] {
  if (list.length === 0) {
    return [];
  }

  return list.map(accumulator);
}
