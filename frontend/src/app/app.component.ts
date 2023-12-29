import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StoreService } from './store/store.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[MessageService]
})
export class AppComponent implements OnInit,OnDestroy {
  destroy$ = new Subject();

  constructor ( private store:StoreService,private messageService: MessageService){}

  ngOnDestroy(): void {
    this.destroy$.next(true)
  }
  ngOnInit(): void {
    this.store.error$.pipe(takeUntil(this.destroy$)).subscribe((detail:string)=>{
      if(detail){
        this.messageService.add({severity:'error',summary:'Error',detail})
      }
    })
  }
}
