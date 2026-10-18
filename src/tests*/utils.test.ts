describe('Platform utils', () => {
  it('formats course title', () => {
    const format = (s: string) => s.trim().toUpperCase();
    expect(format('  math  ')).toBe('MATH');
  });
  it('calculates progress', () => {
    const progress = (done: number, total: number) => Math.round((done/total)*100);
    expect(progress(3, 10)).toBe(30);
  });
});
