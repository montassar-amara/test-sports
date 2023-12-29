import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { LeagueComponent } from '../league/league.component';
import {ImageModule} from 'primeng/image';

@NgModule({
  declarations: [
    MainComponent,
    LeagueComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ToolbarModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    AutoCompleteModule,
    ScrollPanelModule,
    ImageModule
  ]
})
export class MainModule { }
