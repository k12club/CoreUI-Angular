import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'register',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register'
    }
  }
  ,
  {
    path: 'dashboard',
    component: LoginComponent,
    data: {
      title: 'Dashboard'
    }
  },
  // {
  //   path: '',
  //   component: FullLayoutComponent,
  //   data: {
  //     title: 'Home'
  //   },
  //   children: [
  //     {
  //       path: 'base',
  //       loadChildren: './views/base/base.module#BaseModule'
  //     },
  //     {
  //       path: 'buttons',
  //       loadChildren: './views/buttons/buttons.module#ButtonsModule'
  //     },
  //     {
  //       path: 'charts',
  //       loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
  //     },
  //     {
  //       path: 'dashboard',
  //       loadChildren: './views/dashboard/dashboard.module#DashboardModule'
  //     },
  //     {
  //       path: 'icons',
  //       loadChildren: './views/icons/icons.module#IconsModule'
  //     },
  //     {
  //       path: 'notifications',
  //       loadChildren: './views/notifications/notifications.module#NotificationsModule'
  //     },
  //     {
  //       path: 'theme',
  //       loadChildren: './views/theme/theme.module#ThemeModule'
  //     },
  //     {
  //       path: 'widgets',
  //       loadChildren: './views/widgets/widgets.module#WidgetsModule'
  //     }
  //   ]
  // },
  // {
  //   path: 'pages',
  //   component: SimpleLayoutComponent,
  //   data: {
  //     title: 'Pages'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './views/pages/pages.module#PagesModule',
  //     }
  //   ]
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
