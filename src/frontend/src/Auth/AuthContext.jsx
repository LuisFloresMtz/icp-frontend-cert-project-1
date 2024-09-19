import React, { createContext, useEffect, useState } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { AnonymousIdentity } from "@dfinity/agent";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [identity, setIdentity] = useState(new AnonymousIdentity());

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const authClient = await AuthClient.create();
    const identity = authClient.getIdentity();

    setIdentity(identity);

    const principal = identity.getPrincipal();

    if (!principal.isAnonymous()) {
      setIsAuthenticated(true);
    }
  }
  const login = async () => {
    const authClient = await AuthClient.create();
    authClient.login({
      identityProvider: import.meta.env.VITE_INTERNET_COMPUTER_PROVIDER,
      onSuccess: async () => {
        const identity = authClient.getIdentity();
        setIsAuthenticated(true);
        setIdentity(identity);
      },
      onError: (err) => {
        console.error(err);
      },
    });
  };
  const logout = async () => {
    const authClient = await AuthClient.create();
    authClient.logout();
    setIsAuthenticated(false);
    setIdentity(new AnonymousIdentity());
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, identity, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
