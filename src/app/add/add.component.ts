import { Component, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";

@Component({
  selector: "add-item",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent {
  @Output() switch: EventEmitter<number> = new EventEmitter<number>();

  constructor(private http: HttpClient) {}

  onCreateLog(postData: { description: string; duration: string }, f: NgForm) {
    var today = new Date();
    today.setMonth(today.getMonth() + 1);
    var obj = {
      description: postData.description,
      duration: postData.duration,
      added: today
    };
    this.http
      .post("https://logger-project-bfd45.firebaseio.com/logs.json", obj)
      .subscribe(() => {
        this.switch.emit(1);
        f.resetForm();
      });
  }
}
