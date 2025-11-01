export interface Stock {
  symbol: string;
  companyName: string;
  shares: number;
  imageUrl: string;
}

export const STOCKS: Stock[] = [
  {
    symbol: 'AAPL',
    companyName: 'Apple Inc.',
    shares: 48,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
  },
  {
    symbol: 'MSFT',
    companyName: 'Microsoft Corporation',
    shares: 32,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
  },
  {
    symbol: 'GOOGL',
    companyName: 'Alphabet Inc. (Google)',
    shares: 15,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
  },
  {
    symbol: 'AMZN',
    companyName: 'Amazon.com, Inc.',
    shares: 6,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
  },
  {
    symbol: 'TSLA',
    companyName: 'Tesla, Inc.',
    shares: 12,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg'
  }
];