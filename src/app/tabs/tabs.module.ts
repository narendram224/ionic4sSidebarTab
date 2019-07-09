import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { TabsRoutingModule } from './tabs-routing.module';
import {HomePageModule} from '../tabs/home/home.module';
import { AboutPageModule } from '../tabs/about/about.module';
import { ContactPageModule } from '../tabs/contact/contact.module';
import{ListPageModule} from '../tabs/list/list.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsRoutingModule,HomePageModule,ContactPageModule,AboutPageModule,ListPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
