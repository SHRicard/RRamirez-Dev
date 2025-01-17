import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { toggleTheme } from '../../store/themeSlice';
import { lightTheme, darkTheme } from '../../theme';

export const useThemeMode = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.theme.mode);

    const currentTheme = mode === 'light' ? lightTheme : darkTheme;

    const toggleThemeMode = () => {
        dispatch(toggleTheme());
    };

    return { mode, currentTheme, toggleThemeMode };
};
