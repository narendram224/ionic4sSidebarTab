import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {path:'tab',
    
    component:TabsPage,

    children:[
        {path:'home',
        loadChildren:'../tabs/home/home.module#HomePageModule'
        },
        {
            path:'about',
            loadChildren:'../tabs/about/about.module#AboutPageModule'
        },
        {
            path:'contact',
            loadChildren:'../tabs/contact/contact.module#ContactPageModule'
        },
        {
            path:'cart',
            loadChildren:'../cart/cart.module#CartPageModule'
        },
        {
            path:'offer',
            loadChildren:'../offer/offer.module#OfferPageModule'
        }


    ]
    
    },{path:'',
    redirectTo:'tab/about',
    pathMatch:'full'},
    
   
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
