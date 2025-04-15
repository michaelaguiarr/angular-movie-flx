import { Routes } from '@angular/router';
import { HomeComponent } from './pages/logged/home/home.component';
import { LoginComponent } from './pages/not-logged/home/login.component';
import { RegistrationComponent } from './pages/not-logged/registration/registration.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cadastre-se',
        component: RegistrationComponent
    }
];
