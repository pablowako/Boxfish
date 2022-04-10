import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clientStrings } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  headers : any = new HttpHeaders()

  clientStrings : clientStrings[] = [
    {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
    {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
    {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
    {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
    {s:'Windows Vista', r:/Windows NT 6.0/},
    {s:'Windows Server 2003', r:/Windows NT 5.2/},
    {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
    {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
    {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
    {s:'Windows 98', r:/(Windows 98|Win98)/},
    {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
    {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
    {s:'Windows CE', r:/Windows CE/},
    {s:'Windows 3.11', r:/Win16/},
    {s:'Android', r:/Android/},
    {s:'Open BSD', r:/OpenBSD/},
    {s:'Sun OS', r:/SunOS/},
    {s:'Chrome OS', r:/CrOS/},
    {s:'Linux', r:/(Linux|X11(?!.*CrOS))/},
    {s:'iOS', r:/(iPhone|iPad|iPod)/},
    {s:'Mac OS X', r:/Mac OS X/},
    {s:'Mac OS', r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
    {s:'QNX', r:/QNX/},
    {s:'UNIX', r:/UNIX/},
    {s:'BeOS', r:/BeOS/},
    {s:'OS/2', r:/OS\/2/},
    {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
  ];

  //Operating system vars
  os      : string = navigator.userAgent
  cs!     : clientStrings

  //Geolocation vars
  lat     : number = 0
  long    : number = 0
  city    : string = "Not yet known"
  country : string = "Not yet known"
  APIkey  : string = "0909a3a36a4c2098a60c8631a9fb3707"

  constructor(private httpClient : HttpClient) {}
  
  public getIP() : any{
    this.headers = this.headers.set('Content-Type' , 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.httpClient.get("http://api.ipify.org/?format=json",{headers: this.headers});
  }

  public getOS():void{
    for (let id in this.clientStrings) {
      this.cs = this.clientStrings[id];
      if (this.cs.r.test(navigator.userAgent)) {
        console.log("El sistema operativo es " + this.cs.s);
        break;
    }
    }
  }

  errorPos(err : GeolocationPositionError){
    console.log("Error de geolocalización: " + err.message)
  }

  reverseGeo() : Observable<object>{    
    this.headers = this.headers.set('Content-Type' , 'application/x-www-form-urlencoded; charset=UTF-8')
    return this.httpClient.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${this.lat}&lon=${this.long}&limit=1&appid=${this.APIkey}`,{headers: this.headers})
  }

  getLocation() : void {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos) => { 
        
        //Anon function inside callback to avoid scope issues
        this.lat = pos.coords.latitude
        this.long = pos.coords.longitude;
        console.log(`Latitud: ${this.lat}`)
        console.log(`Longitud: ${this.long}`)
        
        //Reverse geocoding
        this.reverseGeo().subscribe((ans : any )=>{
          this.city = ans[0].local_names.es
          this.country = ans[0].country
          console.log(`Estás en ${this.city}, ${this.country}`)
        })
      }, this.errorPos, {timeout : 5000}) 
    }else{
      console.log("Error: No geolocation available")
    }
  }
  
  


}


