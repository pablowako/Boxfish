import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title         : string  = 'Boxfish';
  
  mousePosition : string  = "Aún no has movido el ratón en la ventana"

  startTime     : Date    = new Date
  currTime      : Date    = new Date
  timeDiff      : number  = 0
  secsName      : string  = ""
  minsName      : string  = ""
  secs          : number  = 0
  mins          : number  = 0

  ip            : string  = ""

  constructor(private dataService : DataService){
  }

  

  ngOnInit(): void {
    this.getIP()
    this.getOS()
    this.getLoc()
    setInterval(()=>this.logPos(), 1000)
    setInterval(()=>this.logTime(), 1000)
  }

  getLoc() :void {
    this.dataService.getLocation()
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

  mousePos(e : MouseEvent) :void{
    this.mousePosition = `La posición del ratón es x=${e.clientX}, y=${e.clientY}`
  }
  
  logPos() :void{
    console.log(this.mousePosition)
  }

  logTime() :void{
    this.currTime = new Date
    this.timeDiff = Math.floor((this.currTime.getTime()-this.startTime.getTime())/1000)
    this.secs     = this.timeDiff%60
    this.mins     = Math.floor(this.timeDiff/60)

    this.secs === 1
      ? this.secsName = "segundo"
      : this.secsName = "segundos"

    this.mins === 1
      ? this.minsName = "minuto"
      : this.minsName = "minutos"
    
    this.timeDiff<60
      ? console.log(`La ventana lleva ${this.secs} ${this.secsName} abierta`)
      : console.log(`La ventana lleva ${this.mins} ${this.minsName} y ${this.secs} ${this.secsName} abierta`)

      
    // Previous approach to the "segundo vs segundos" issue:

    // this.timeDiff%60 === 1 
    // //Correct plural use of "segundo"
    //   ? this.timeDiff<60 
    //     ? console.log(`La ventana lleva ${this.timeDiff} segundo abierta`) 
    //     : console.log(`La ventana lleva ${Math.floor(this.timeDiff/60)} minutos y ${this.timeDiff%60} segundo abierta`)
    //   :this.timeDiff<60 
    //     ? console.log(`La ventana lleva ${this.timeDiff} segundos abierta`) 
    //     : console.log(`La ventana lleva ${Math.floor(this.timeDiff/60)} minutos y ${this.timeDiff%60} segundos abierta`)

    // I stopped midway through it because I was seeing that I would have to account for too many exceptions and would make my code a bit unreadable. 
    // The newer method works and is easier to read, and is easier to expand upon if in the future I need to add an hour counter(this.mins%60===1).
    // Also, this method avoids nested ternaries and nested ifs.
  }
}
