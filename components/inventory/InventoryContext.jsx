'use client';
import React, { createContext, useContext } from 'react';
import { useInventory } from './useInventory';

const InventoryContext = createContext(null);

export function InventoryProvider({ initialItems, shouldInitialize = false, children }) {
  const inventory = useInventory(initialItems, shouldInitialize);
  return (
    <InventoryContext.Provider value={inventory}>
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventoryContext() {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error('useInventoryContext must be used within InventoryProvider');
  }
  return context;
}
