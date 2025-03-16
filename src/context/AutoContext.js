import { createContext, useContext } from 'react';
import useLoginState from '../hooks/useLoginState';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => (
    <AuthContext.Provider value={useLoginState()}>
        {children}
    </AuthContext.Provider>
);
export const useAuth = () => useContext(AuthContext);