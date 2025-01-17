import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@store';
import { toggleTheme, setTheme } from '@themeSlice';
import { lightTheme, darkTheme } from '@theme';

export const useThemeMode = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.theme.mode);

    useEffect(() => {
        const savedTheme = localStorage.getItem('useTheme');
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
            dispatch(setTheme(savedTheme));
        }
    }, [dispatch]);

    const currentTheme = mode === 'light' ? lightTheme : darkTheme;

    const toggleThemeMode = () => {
        const newTheme = mode === 'light' ? 'dark' : 'light';
        localStorage.setItem('useTheme', newTheme);
        dispatch(toggleTheme());
    };

    return { mode, currentTheme, toggleThemeMode };
};
