import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './user';
import { userCardComponent } from './components/userCard';
import { orderRowComponent } from './components/orderRow';
import { orderIconComponent } from './components/orderIcon';
import { HomeButtonModule } from '../../components/home-buttom/homeButton.module';

@NgModule({
  declarations: [
    UserPage,
    userCardComponent,
    orderRowComponent,
    orderIconComponent    
  ],
  imports: [
    IonicPageModule.forChild(UserPage),
    HomeButtonModule
  ],
})
export class UserPageModule {}
