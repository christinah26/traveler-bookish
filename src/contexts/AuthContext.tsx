import React, { createContext, useContext } from "react";

export interface AuthContextType {
    token: string | null;
    id: number | null;
    setId: React.Dispatch<React.SetStateAction<number | null>> | null;
    setToken: (token: string | null) => void;
    refreshToken: () => Promise<string | null>;
}

export const AuthContext = createContext<AuthContextType>({
    id: null,
    token: null,
    setId: null,
    setToken: () => {},
    refreshToken: async () => null,
});

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");

    return context;
}
