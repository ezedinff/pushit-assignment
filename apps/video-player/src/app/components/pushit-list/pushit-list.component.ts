import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ClipResponseDto } from '@pushit-assignment/common';

@Component({
  selector: 'pushit-list',
  templateUrl: './pushit-list.component.html',
  styleUrls: ['./pushit-list.component.scss'],
})
export class PushitListComponent {
  @Input() clips!: ClipResponseDto[] | null;
  @Output() onClipSelected: EventEmitter<ClipResponseDto> = new EventEmitter();
  @Output() onScrollDown: EventEmitter<void> = new EventEmitter();
  selectClip(clip: ClipResponseDto) {
    this.onClipSelected.emit(clip);
  }
  scrollDown() {
    console.log('scroll down');
    this.onScrollDown.emit();
  }
}
