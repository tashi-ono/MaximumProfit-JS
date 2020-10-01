const MaximumProfit = require('./MaximumProfit');

test("Case 01", () => {
    let maxProfit = new MaximumProfit();
    let input = [45, 24, 35, 31, 40, 38, 11] ;
    let expected = 16;
    let actual =  maxProfit.find(input);
    expect(expected).toBe(actual);
})
