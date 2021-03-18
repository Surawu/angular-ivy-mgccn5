import { Component, VERSION, AfterViewInit, ViewChild } from "@angular/core";
import { TestcomponentComponent } from "./components/testcomponent/testcomponent.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  name = "Angular " + VERSION.major;
  constructor(private testcomponent: TestcomponentComponent) {}

  ngAfterViewInit() {
    this.testcomponent.hello();
  }
}
