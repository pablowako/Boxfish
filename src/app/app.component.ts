import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Boxfish';
  
  mousePosition : string = "Aún no has movido el ratón en la ventana"
  startTime : Date = new Date
  currTime : Date = new Date
  timeDiff : number = 0
  
  constructor(private dataService : DataService){
  }

  ip: string = ""

  ngOnInit(): void {
  this.getIP()
  this.getOS()
  setInterval(()=>this.logPos(), 1000)
  setInterval(()=>this.logTime(), 1000)
  
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
  logTime():void{
    this.currTime = new Date
    this.timeDiff = Math.floor((this.currTime.getTime()-this.startTime.getTime())/1000)
    this.timeDiff<60 ? console.log(`La ventana lleva ${this.timeDiff} segundos abierta`) : console.log(`La ventana lleva ${Math.floor(this.timeDiff/60)} minutos y ${this.timeDiff%60} segundos abierta`)
  }
}
