import { createTool } from '@modelcontextprotocol/sdk';
import { getQuote } from './mt4';

export const quoteTool = createTool({
  name: 'get-quote',
  description: 'Fetches the current price for a given symbol from MT4.',
  parameters: {
    symbol: {
      type: 'string',
      description: 'Trading symbol (e.g., EURUSD)',
    },
  },
  run: async ({ symbol }) => {
    const quote = await getQuote(symbol);
    return {
      ask: quote.ASK,
      bid: quote.BID,
      time: quote.TIME,
    };
  },
});
