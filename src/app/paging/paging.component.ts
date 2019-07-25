import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "paging-item",
  templateUrl: "./paging.component.html",
  styleUrls: ["./paging.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagingComponent {
  @Input() count: number;
  @Input() pag: number;
  @Output() switch: EventEmitter<number> = new EventEmitter<number>();
  counter() {
    return new Array(this.count);
  }

  ngOnChanges() {
    this.ngOnInit();
  }

  pg = 1;
  page;

  ngOnInit() {
    this.page = this.pag - 1;
  }

  onClick(text) {
    this.pg = +text;
    this.switch.emit(this.pg);
    this.page = this.pg - 1;
  }
  prev() {
    this.pg -= 1;
    this.switch.emit(this.pg);
    this.page = this.pg - 1;
  }
  next() {
    this.pg += 1;
    this.switch.emit(this.pg);
    this.page = this.pg - 1;
  }
}
