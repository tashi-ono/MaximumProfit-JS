class MaximumProfit {
  find(input) {
    let maxProfit = -1;
    let buyPrice = input[0];
    let sellPrice = 0;
    for (let i = 1; i < input.length - 1; i++) {
      if (input[i] < buyPrice) {
        buyPrice = input[i];
        sellPrice = input[input.indexOf(buyPrice) + 1];
      }
      if (
        input[i] > sellPrice &&
        input.indexOf(input[i]) > input.indexOf(buyPrice)
      ) {
        sellPrice = input[i];
        maxProfit = sellPrice - buyPrice;
      }
    }
    return maxProfit;
  }
}

module.exports = MaximumProfit;
