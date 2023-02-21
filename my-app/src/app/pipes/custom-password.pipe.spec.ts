import { CustomPasswordPipe } from './custom-password.pipe';

describe('CustomPasswordPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPasswordPipe();
    expect(pipe).toBeTruthy();
  });
});
