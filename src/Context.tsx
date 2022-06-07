import { createContext, ReactElement, useContext } from 'react';

type Theme = 'light' | 'dark';

const context = createContext<Theme>('light');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <context.Provider value={props.theme}>
            {props.children}
        </context.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(context);
}
