import { create } from "zustand";

export type RewardStore = {
  amount: string;
  country: string;
  bank: string;
  holderName: string;
  accountNo: string;
  setReward: (data: Partial<RewardStore>) => void;
  resetReward: () => void;
};

export const useRewardStore = create<RewardStore>((set) => ({
    amount: "",
    country: "",
    bank: "",
    holderName: "",
    accountNo: "",
    setReward: (data) => set((state) => ({ ...state, ...data })),
    resetReward: () =>
        set({
            amount: "",
            country: "",
            bank: "",
            holderName: "",
            accountNo: "",
        }),
}));
