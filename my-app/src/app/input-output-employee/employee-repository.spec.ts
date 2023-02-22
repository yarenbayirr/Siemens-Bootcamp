import { EmployeeRepository } from './employee-repository';

describe('EmployeeRepository', () => {
  it('should create an instance', () => {
    expect(new EmployeeRepository()).toBeTruthy();
  });
});
