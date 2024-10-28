import { createContext, useContext, useState, ReactNode } from 'react';

interface LoginContextType {
  login: string;
  setLogin: (login: string) => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [login, setLogin] = useState<string>('');

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLogin deve ser usado dentro de um LoginProvider');
  }
  return context;
};
