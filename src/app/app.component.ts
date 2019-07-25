import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedLogs = [];
  page = 1;
  headings = [];
  pageCount;
  isFetching = true;
  sideBarIsOpened = false;

  constructor(private http: HttpClient) {}

  toggleSideBar(shouldOpen: boolean) {
    this.sideBarIsOpened = !this.sideBarIsOpened;
  }

  ngOnInit() {
    this.fetchLogs();
  }

  private fetchLogs() {
    this.http
      .get("https://logger-project-bfd45.firebaseio.com/logs.json")
      .pipe(
        map(responseData => {
          const logsArray = [];
          var tempdat = new Date();
          var index = 0;
          var allels = [];
          var revels = [];
          for (const key in responseData) {
            allels.push(responseData[key]);
          }
          revels = allels.reverse();
          var arr = [];
          for (var e in revels) {
            index++;
            if (index <= this.page * 6 && index > (this.page - 1) * 6) {
              var s = revels[e].added;
              let dat = new Date(s);
              if (
                tempdat.getDate() == dat.getDate() &&
                tempdat.getMonth() == dat.getMonth() &&
                tempdat.getFullYear() == dat.getFullYear()
              ) {
                arr.push(revels[e]);
              } else {
                logsArray.push(arr);
                arr = [];
                arr.push(revels[e]);
                tempdat = dat;
              }
            }
          }
          this.pageCount = index % 6 == 0 ? index / 6 : Math.ceil(index / 6);
          logsArray.push(arr);
          if (logsArray[0].length == 0) {
            logsArray.shift();
          }
          return logsArray;
        })
      )
      .subscribe(logs => {
        this.isFetching = false;
        this.loadedLogs = logs;
      });
  }

  pageChange(pg: number) {
    this.page = pg;
    this.ngOnInit();
  }

  title = "my logger app";
}
