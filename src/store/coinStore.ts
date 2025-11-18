import { create } from "zustand";
import { CoinStore } from ".";

export const useStoreState = create<CoinStore>((set, get) => ({
    coin: 0,
    price: 0,
    setCart: (coin, price) => {
        set({ coin, price });
    },
    reset: () => {
        set({ coin: 0, price: 0, step: 1, bank: '', country: '' });
    },
    getCart: () => get(),
    paymentType: '',
    setPaymentType: (type) => set({ paymentType: type }), 
    step: 1,
    setStep: (step) => set({ step: step }), 
    bank: '',
    setBank: (bank) => set({ bank: bank }),
    country: '',
    setCountry: (country) => set({ country: country }), 
}));
