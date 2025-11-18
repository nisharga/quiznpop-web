export type CoinStore = {
  coin: number;
  price: number; 
  setCart: (coin: number, price: number) => void;
  reset: () => void;
  getCart: () => { coin: number; price: number };
  paymentType: string;
  setPaymentType: (type: string) => void;
  step: number;
  setStep: (step: number) => void;
  bank: string;
  setBank: (bank: string) => void;
  country: string;
  setCountry: (country: string) => void;
};