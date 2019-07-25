import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "log-item",
  templateUrl: "./log.component.html",
  styleUrls: ["./log.component.css"]
})
export class LogComponent implements OnInit {
  @Input() description: string;
  @Input() duration: string;
  @Input() added: string;

  ngOnInit() {
    this.setDay();
  }
  adder: string;

  private setDay() {
    let day = new Date(this.added);
    this.adder =
      day.getDate() < 10
        ? "0" + day.getDate()
        : day.getDate() +
          "/" +
          (day.getMonth() < 10 ? "0" + day.getMonth() : day.getMonth()) +
          "/" +
          day.getFullYear() +
          "  " +
          (day.getHours() < 10 ? "0" + day.getHours() : day.getHours()) +
          ":" +
          (day.getMinutes() < 10 ? "0" + day.getMinutes() : day.getMinutes());
  }
}
