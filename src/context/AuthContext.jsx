
import { createContext, useContext, useEffect, useState } from "react";
import { whoami, logout } from "../api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [errorUser, setErrorUser] = useState("");
    const [loading, setLoading] = useState(true);

    async function refreshUser() {
        setLoading(true);

        const data = await whoami();

        if (!data?.error) {
            setUser(data);
            setErrorUser("");
            setLoading(false);
            console.log(data);
            
            return data;
        }

        // setUser(null);

        if (data.error !== "Nincs cookie!") {
            setErrorUser(data.error);
        } else {
            setErrorUser("");
        }

        setLoading(false);
        return null;
    }

    useEffect(() => {
        refreshUser();
    }, []);

    async function onLogout() {
        const data = await logout();

        if (data?.error) {
            setErrorUser(data.error);
            return;
        }

        setUser(null);
        setErrorUser("");
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                errorUser,
                loading,
                onLogout,
                refreshUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
