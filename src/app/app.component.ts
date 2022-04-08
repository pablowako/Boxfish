import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Boxfish';
  
  mousePosition : string = ""
  
  constructor(private dataService : DataService){
  }

  ip: string = ""

  ngOnInit(): void {
  this.getIP()
  this.getOS()
  setInterval(()=>this.logPos(), 1000)
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
    this.mousePosition = `La posición del ratón es x=${e.clientX}, y=${e.clientY}`
  }
  logPos():void{
    console.log(this.mousePosition)
    
  }
}
