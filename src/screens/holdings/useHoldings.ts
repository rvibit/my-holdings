import {fetchHoldings} from '@src/api/fetch-holdings';
import {calculatePortfolio} from '@src/utils/math';
import {useState, useEffect} from 'react';
export type Holding = {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
};
export type Stock = {
  symbol: string;
  quantity: number;
  ltp: number;
  profit_loss: number;
  avgPrice: number;
};
export type Summary = {
  current_value: number;
  total_investment: number;
  todays_pl: number;
  profit_loss: number;
};
export type Portfolio = {
  stocks: Stock[];
  summary: Summary;
};

type Response = {
  error: string;
  isLoading: boolean;
  stocks: Stock[];
  summary: Summary;
};
const initValues: Response = {
  error: '',
  isLoading: true,
  stocks: [],
  summary: {
    current_value: 0,
    total_investment: 0,
    todays_pl: 0,
    profit_loss: 0,
  },
};
function useHoldings() {
  const [data, setData] = useState<Response>(initValues);

  useEffect(() => {
    (async () => {
      try {
        const holdings = await fetchHoldings();

        const stocksData = calculatePortfolio(holdings.userHolding);
        setData(prevState => ({
          ...prevState,
          stocks: stocksData.stocks,
          summary: stocksData.summary,
          isLoading: false,
        }));
      } catch (err) {
        setData(prevState => ({
          ...prevState,
          isLoading: false,
          error: typeof err === 'string' ? err : 'Something went wrong.',
        }));
      }
    })();
  }, []);

  return data;
}

export {useHoldings};
