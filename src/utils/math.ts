import {Holding, Portfolio} from '@src/screens/holdings/useHoldings';

function calculatePortfolio(holdings: Holding[]) {
  let data: Portfolio = {
    stocks: [],
    summary: {
      current_value: 0,
      total_investment: 0,
      todays_pl: 0,
      profit_loss: 0,
    },
  };
  holdings.forEach(stock => {
    let current_value = stock.ltp * stock.quantity;
    let total_investment_value = stock.avgPrice * stock.quantity;

    data.summary.current_value += current_value;
    data.summary.total_investment += total_investment_value;
    data.summary.todays_pl += (stock.close - stock.ltp) * stock.quantity;

    data.stocks.push({
      ...stock,
      profit_loss: current_value - total_investment_value,
    });
  });
  data.summary.profit_loss =
    data.summary.current_value - data.summary.total_investment;

  return data;
}

export {calculatePortfolio};
