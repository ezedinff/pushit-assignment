import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PushitListComponent } from './pushit-list.component';
import { InfiniteScrollModule } from '../infinite-scroll/infinite-scroll.module';

@NgModule({
  declarations: [PushitListComponent],
  imports: [CommonModule, InfiniteScrollModule],
  exports: [PushitListComponent],
})
export class PushitListModule {}
