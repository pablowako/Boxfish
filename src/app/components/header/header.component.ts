import { Component, HostListener, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  menu : Menu[] = [
    {title: "Services", url: "services"},
    {title: "About us", url: "about-us"},
    {title: "Career",   url: "career"},
    {title: "Work",     url: "work"},
  ]

  isMenuShown : boolean = false
  isMenuOpen : boolean = false
  windowSize : number = 0
  
  constructor() { 
    this.onResize();
    
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event?:any) {
    this.windowSize = window.innerWidth;
  }

  ngOnInit(): void {
  }


  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen
  }

}
