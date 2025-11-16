// /context/MenuContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type MenuItem = {
  id: string;
  dishName: string;
  description?: string;
  course: 'Starter' | 'Main' | 'Dessert';
  price: string; // store as string to match input; parse when calculating
};

type MenuContextType = {
  menu: MenuItem[];
  addItem: (item: Omit<MenuItem, 'id'>) => void;
  removeItem: (id: string) => void;
  clearAll: () => void;
  averageByCourse: (course: MenuItem['course']) => string;
  totalPrice: () => number;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error('useMenu must be used within MenuProvider');
  return ctx;
};

const generateId = () => Math.random().toString(36).slice(2, 9);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  const addItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem: MenuItem = { ...item, id: generateId() };
    setMenu(prev => [...prev, newItem]);
  };

  const removeItem = (id: string) => {
    setMenu(prev => prev.filter(i => i.id !== id));
  };

  const clearAll = () => setMenu([]);

  const averageByCourse = (course: MenuItem['course']) => {
    const items = menu.filter(i => i.course === course);
    if (items.length === 0) return '0.00';
    const sum = items.reduce((s, it) => s + parseFloat(it.price || '0'), 0);
    return (sum / items.length).toFixed(2);
  };

  const totalPrice = () =>
    menu.reduce((s, it) => s + parseFloat(it.price || '0'), 0);

  return (
    <MenuContext.Provider value={{ menu, addItem, removeItem, clearAll, averageByCourse, totalPrice }}>
      {children}
    </MenuContext.Provider>
  );
};
