import React, { createContext, useContext, useState, type ReactNode } from 'react';
import Loading from './Loading';

interface LoadingContextType {
    loading: boolean;
    showLoading: () => void;
    hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
    children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
    const [loading, setLoading] = useState<boolean>(false);

    const showLoading = () => {
        setLoading(true);
    };
    const hideLoading = () => {
        setLoading(false);
    };

    return (
        <LoadingContext.Provider value={{ loading, showLoading, hideLoading }}>
            {children}
            <Loading loading={loading} />
        </LoadingContext.Provider>
    );
};

export const useLoading = (): LoadingContextType => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};
