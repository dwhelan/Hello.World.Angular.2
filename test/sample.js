describe('Sample test', function () {
  it('should pass', function () {
    expect(42).to.equal(42);
  });
});

describe('Sample test with promise', function () {
  it('should pass', function () {
    expect(Promise.resolve(40 + 2)).to.eventually.equal(42);
  });
});
