import { Home, About, Experience, Education } from "@page";


export interface RouteType {
    path: string;
    component: React.ReactNode;
    label: string;
}

export const routes: RouteType[] = [
    { path: '/', component: <Home />, label: 'Inicio' },
    { path: '/about', component: <About />, label: 'Sobre mí' },
    { path: '/Experience', component: <Experience />, label: 'Experiencia' },
    { path: '/Education', component: <Education />, label: 'Educación' },
];
