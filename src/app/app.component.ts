import { Component } from '@angular/core';
import { Sqlite3Service } from "./services/sqlite3.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sqlitetest';
  constructor(private db:Sqlite3Service){
    this.db.createTable();
    this.db.insertData();
    this.db.selectData();
  }
}
