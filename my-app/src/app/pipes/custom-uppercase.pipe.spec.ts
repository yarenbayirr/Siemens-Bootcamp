import { CustomUppercasePipe } from './custom-uppercase.pipe';

describe('CustomUppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomUppercasePipe();
    expect(pipe).toBeTruthy();
  });
});
