"use client";

import { createContext, useContext, useState } from "react";

type User = {
  id?: string;
  name?: string;
  email?: string;
};

type AuthState = {
  isLoggedIn: boolean;
  user: User | null;
};

type AuthContextType = AuthState & {
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>(() => {
    if (typeof window === "undefined") {
      return {
        isLoggedIn: false,
        user: null,
      };
    }

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      return {
        isLoggedIn: true,
        user: JSON.parse(storedUser) as User,
      };
    }

    return {
      isLoggedIn: false,
      user: null,
    };
  });

  const login = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));

    setAuthState({
      isLoggedIn: true,
      user,
    });
  };

  const logout = () => {
    localStorage.removeItem("user");

    setAuthState({
      isLoggedIn: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: authState.isLoggedIn,
        user: authState.user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
