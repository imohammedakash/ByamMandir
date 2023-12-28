"use client"
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Store } from './Store';

interface ProviderProps {
  children: ReactNode;
}

const MyReduxProvider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <Provider store={Store}>
      {children}
    </Provider>
  );
};

export default MyReduxProvider;
