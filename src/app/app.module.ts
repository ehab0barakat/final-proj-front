import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { PostsComponent } from './Components/posts/posts/posts.component';
import { SinglePostComponent } from './Components/posts/single-post/single-post.component';
import { ProfileComponent } from './Components/Profile/profile/profile.component';

import { GamesComponent } from './Components/Games/games/games.component';
import { SingleGameComponent } from './Components/Games/single-game/single-game.component';
import { EventsArchiveComponent } from './Components/Events/events-archive/events-archive.component';
import { EventsSingleComponent } from './Components/Events/events-single/events-single.component';
import { HomeComponent } from './Components/home/home.component';
import { CrudGameComponent } from './Components/Games/crud-game/crud-game.component';
import { CrudEventComponent } from './Components/Events/crud-event/crud-event.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ProductComponent } from './Components/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent,
    PostsComponent,
    SinglePostComponent,
    ProfileComponent,
    GamesComponent,
    SingleGameComponent,
    EventsArchiveComponent,
    EventsSingleComponent,
    HomeComponent,
    CrudGameComponent,
    CrudEventComponent,
    ShopComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
