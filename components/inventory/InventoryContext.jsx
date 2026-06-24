'use client';
import React, { createContext, useContext, useMemo } from 'react';
import { useInventory } from './useInventory';

const InventoryContext = createContext(null);

export function InventoryProvider({ initialItems, children }) {
  const itemsKey = JSON.stringify(initialItems || []);
  const stableItems = useMemo(() => initialItems || [], [itemsKey]);

  const inventory = useInventory(stableItems);

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