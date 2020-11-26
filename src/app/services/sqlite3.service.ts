import { Injectable } from '@angular/core';
declare var require: any;
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
@Injectable({
  providedIn: 'root'
})
export class Sqlite3Service {
  constructor() { }
  createTable(){
    db.serialize(function () {
      db.run("CREATE TABLE lorem (info TEXT)");
    })
  }
  insertData(){
    var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
    }
    stmt.finalize();
  }
  selectData(){
    db.each("SELECT rowid AS id, info FROM lorem", function (err:any, row:any) {
      console.log(row.id + ": " + row.info);
    });
  }
}
