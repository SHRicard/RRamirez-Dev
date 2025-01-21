import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export interface IMiniNav {
    label: string;
    icon: JSX.Element;
}

export const miniNavigation: IMiniNav[] = [
    { label: "Home", icon: <PersonAdd fontSize="small" sx={{ mx: 1 }} /> },
    { label: "Educación y Certificaciones", icon: <Settings fontSize="small" sx={{ mx: 1 }} /> },
    { label: "Experiencia", icon: <Logout fontSize="small" sx={{ mx: 1 }} /> },
    { label: "Sobre mí", icon: <Logout fontSize="small" sx={{ mx: 1 }} /> },
    { label: "Blog", icon: <Logout fontSize="small" sx={{ mx: 1 }} /> },
    { label: "Descarga de CV", icon: <Logout fontSize="small" sx={{ mx: 1 }} /> },
];
export const navigation = ["Home", "Sobre mí", "Experiencia"]