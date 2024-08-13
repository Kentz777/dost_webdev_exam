import React, { createContext, useState, useContext } from 'react';

interface UsernameContextProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const UsernameContext = createContext<UsernameContextProps | undefined>(undefined);

export const UsernameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState<string>('');

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContext.Provider>
  );
};

export const useUsername = () => {
  const context = useContext(UsernameContext);
  if (!context) {
    throw new Error('useUsername must be used within a UsernameProvider');
  }
  return context;
};
