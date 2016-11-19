describe('Sample test', function () {
  it('should pass', function () {
    expect(42).to.equal(42);
  });
});

describe('Sample test with promise', function () {
  it('should pass', function () {
    return expect(Promise.resolve(42)).to.eventually.equal(42);
  });
});
