import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';
import { PlayerComponent } from '../player/player.component';
import { ImageModule } from 'primeng/image';


@NgModule({
  declarations: [
    TeamComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    ToolbarModule,
    ButtonModule,
    ScrollPanelModule,
    CardModule,
    ImageModule
  ]
})
export class TeamModule { }
