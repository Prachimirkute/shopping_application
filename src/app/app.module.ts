import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { FooterComponent } from './footer/footer.component';
import { BetterHighlightDirective } from './Directive/better-highlight';
import { DropdownDirective } from './Directive/dropdown';
import { FormsModule } from '@angular/forms';
import { NewRecipesComponent } from './recipes/new-recipes/new-recipes.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { shoppinglistservice } from './shopping-list/shopping-list.service';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
const socketConfig: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    FooterComponent,
    BetterHighlightDirective,
    DropdownDirective,
    NewRecipesComponent,
    ChatRoomComponent,
    LoginComponent,
    SignUpComponent,
    RecipesStartComponent,
    RecipesEditComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(socketConfig)
  ],
  providers: [shoppinglistservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
