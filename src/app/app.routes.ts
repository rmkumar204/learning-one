import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ClassesComponent } from './components/classes/classes.component';
import { PageNotFoudComponent } from './page-not-foud/page-not-foud.component';
import { GroceryitemsComponent } from './components/groceryitems/groceryitems.component';
import { GroceryComponent } from './grocery/grocery.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
    },
    {
        path:'dashboard',
        title:'dashboard',
        component:DashboardComponent,
        children:[{
            path:'grocery',
            component:GroceryitemsComponent
        },{
            path:'grocery/:id',
            component:GroceryComponent
        }]
    },{
        path:'profile',
        title:'profile',
        component:ProfileComponent
    },{
        path:'classes',
        title:'classes',
        component:ClassesComponent
    },
    {
        path:'**',
        title:'page not found',
        component:PageNotFoudComponent
    }
];
