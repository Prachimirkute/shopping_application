import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NewRecipesComponent } from './recipes/new-recipes/new-recipes.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'recipes', component: RecipesComponent, children:[
      {path: '', component: RecipesStartComponent},
      {path: 'new', component: RecipesEditComponent},
      {path: ':id', component: RecipeDetailsComponent},
      {path: ':id/edit', component: RecipesEditComponent}
  ]},
  { path: 'shopping-list', component: ShoppingListComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  // { path: 'newrecipes', component: NewRecipesComponent },
  // { path: 'chatboard', component: ChatRoomComponent },
  { path: 'chatbot', component: ChatbotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
