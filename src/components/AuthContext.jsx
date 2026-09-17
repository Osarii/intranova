import { createContext, useContext, useMemo, useState } from 'react';
import db from '../data/db.json';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // La práctica solo requiere mantener el estado mientras la app está abierta.
  // Evitamos localStorage para que la app funcione también en previews o
  // navegadores que bloquean el almacenamiento local.
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const foundUser = db.users.find(
      (currentUser) =>
        currentUser.email.toLowerCase() === email.trim().toLowerCase() &&
        currentUser.password === password,
    );

    if (!foundUser) {
      return false;
    }

    const { password: _password, ...safeUser } = foundUser;
    setUser(safeUser);
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = useMemo(
    () => ({ isAuthenticated, user, login, logout }),
    [isAuthenticated, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth debe utilizarse dentro de AuthProvider.');
  }

  return context;
}
