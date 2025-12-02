import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: "", loadComponent: () => import("./layouts/layouts").then(c => c.Layouts),
    children: [
        {
            path: 'repaso-css', loadComponent:() => import("./repaso-css/repaso-css").then(c => c.RepasoCSS)
        }
    ]}
];
