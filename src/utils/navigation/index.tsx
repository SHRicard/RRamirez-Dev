import { CustomIcon } from "@atoms"

export interface IMiniNav {
    label: string;
    icon: JSX.Element;
}

export const miniNavigation: IMiniNav[] = [
    { label: "Home", icon: <CustomIcon type={"PersonAdd"} sx={{ mx: 1, width: 20, height: 20, }} /> },
    { label: "Educación y Certificaciones", icon: <CustomIcon type={"PersonAdd"} fontSize="small" sx={{ mx: 1, width: 20, height: 20, }} /> },
    { label: "Experiencia", icon: <CustomIcon type={"PersonAdd"} sx={{ mx: 1, width: 20, height: 20, }} /> },
    { label: "Sobre mí", icon: <CustomIcon type={"PersonAdd"} sx={{ mx: 1, width: 20, height: 20, }} /> },
    { label: "Blog", icon: <CustomIcon type={"PersonAdd"} sx={{ mx: 1, width: 20, height: 20, }} /> },
    { label: "Descarga de CV", icon: <CustomIcon type={"PersonAdd"} sx={{ mx: 1, width: 20, height: 20, }} /> },
];
export const navigation = ["Home", "Sobre mí", "Experiencia"]