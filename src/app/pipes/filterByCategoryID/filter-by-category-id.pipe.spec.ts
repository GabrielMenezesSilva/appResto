import { filterByCategoryIdPipe } from './filter-by-category-id.pipe';

describe('filterByCategoryIdPipe', () => {
  it('create an instance', () => {
    const pipe = new filterByCategoryIdPipe();
    expect(pipe).toBeTruthy();
  });
});
