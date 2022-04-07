import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Boxfish';
  
  constructor(private dataService : DataService){
  }

  ip: string = ""

  ngOnInit(): void {
  this.getIP()
  console.log()
  this.test()
  }

  test():void{
    fetch("http://api.ipify.org/?format=json").then(rep => rep.json()).then(string =>{
      console.log(string)
    }).catch((err)=>{console.log(err)})
  }
  getIP() :void{
    this.dataService.getIP().subscribe((ans:any)=>{
      this.ip = ans.ip
    })
  }
}
