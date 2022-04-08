import { Component, HostListener, OnInit } from '@angular/core';
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
  this.getOS()
  }

  getIP() :void{
    this.dataService.getIP().subscribe((ans:any)=>{
      this.ip = ans.ip
      console.log('Tu dirección IP es: ' + this.ip)
    })
  }
  getOS() : void{
    console.log(navigator.userAgent)
    this.dataService.getOS()
  }
  mousePos(e : MouseEvent):void{
    console.log(e.clientX, e.clientY)
  }
}
