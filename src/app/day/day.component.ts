import { Component, Input } from "@angular/core";
import { getLocaleDateTimeFormat, DatePipe } from "@angular/common";

@Component({
  selector: "day-item",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent {
  @Input() endLogs: [];
  day;
  header: string;

  ngOnInit() {
    this.day = this.endLogs;
    let time = new Date(this.day[0].added);
    let today = new Date();
    if (
      time.getDate() == today.getDate() &&
      time.getMonth() == today.getMonth() + 1 &&
      time.getFullYear() == today.getFullYear()
    ) {
      this.header = "Today";
    } else {
      // var d = new DatePipe("az-Latn").transform(time);
      // //      d.transform(time);
      // console.log(d.toLocaleLowerCase());
      this.header =
        (time.getDate() < 10 ? "0" + time.getDate() : time.getDate()) +
        "/" +
        (time.getMonth() < 10 ? "0" + time.getMonth() : time.getMonth()) +
        "/" +
        time.getFullYear();
    }
  }
}
