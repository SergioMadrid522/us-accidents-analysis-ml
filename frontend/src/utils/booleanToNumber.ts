export function booleanToNumber(data: string): number {
  const convert: Record<string, number> = {
    true: 1,
    false: 0,
  };

  return convert[data] ?? 0;
}
