import { create } from 'zustand';

interface CountState {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    incrementByAmount: (amount: number) => void;
}

export const useCountStore = create<CountState>((set)=>({
    count: 0,
    increment: () => {
        set((state)=>({ count: state.count + 1}));
    },
    decrement: () => {
        set((state)=>({ count: state.count - 1}));
    },
    incrementByAmount: (amount: number) => {
        set((state)=>({ count: state.count + amount}));
    },
    reset: () => {
        set((state)=>({ count: 0 }));
    }
}));