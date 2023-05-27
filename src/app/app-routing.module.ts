import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { signUpComponent } from './sign_up/sign_up';
import { LoginComponent } from './login/login.component';
import { NewRecipesComponent } from './recipes/new-recipes/new-recipes.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: signUpComponent },
  { path: 'newrecipes', component: NewRecipesComponent },
  { path: 'chatboard', component: ChatRoomComponent },
  // { path: '', redirectTo: 'recipes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
