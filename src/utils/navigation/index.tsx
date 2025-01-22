import { CustomIcon } from "@atoms"

export interface IMiniNav {
    label: string;
    icon: JSX.Element;
    path: string;
}
export interface INavigation {
    label: string;
    path: string;
}

export const miniNavigation: IMiniNav[] = [
    { label: "Home", icon: <CustomIcon type={"Home"} sx={{ mx: 1, width: 20, height: 20, }} />, path: "/" },
    { label: "Experiencia", icon: <CustomIcon type={"Experience"} sx={{ mx: 1, width: 20, height: 20, }} />, path: "/experience" },
    { label: "Educación", icon: <CustomIcon type={"Education"} fontSize="small" sx={{ mx: 1, width: 20, height: 20, }} />, path: "/education" },
    { label: "Sobre mí", icon: <CustomIcon type={"About"} sx={{ mx: 1, width: 20, height: 20, }} />, path: "/about" },
    { label: "Descarga de CV", icon: <CustomIcon type={"Download"} sx={{ mx: 1, width: 20, height: 20, }} />, path: "/cv" },
    // { label: "Blog", icon: <CustomIcon type={"PersonAdd"} sx={{ mx: 1, width: 20, height: 20, }} />, path: "/blog" },
];


export const navigation = [
    { label: "Home", path: "/" },
    { label: "Experiencia", path: "/Experience" },
    { label: "Educación", path: "/Education" },
    { label: "Sobre mí", path: "/about" },
];