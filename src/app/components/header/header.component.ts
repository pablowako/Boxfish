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
  isMenuOpen  : boolean = false
  windowSize  : number  = 0
  isDark      : boolean  = false
  localDark   : string | null = "false"

  constructor() {}

  ngOnInit(): void {
    if(localStorage.getItem('darkMode')){
      this.localDark = localStorage.getItem('darkMode')
      this.localDark === "true" ? this.isDark = true : this.isDark = false
      this.changeDark()
    }else{
      localStorage.setItem('darkMode', "false")
    }
  }


  toggleMenu() :void {
    this.isMenuOpen = !this.isMenuOpen
  }

  toggleDark() :void {
    this.isDark = !this.isDark
    this.changeDark()
    this.isDark ? localStorage.setItem('darkMode', "true") : localStorage.setItem('darkMode', "false")
  }
  changeDark() :void {
    this.isDark ? document.documentElement.style.setProperty('--c-fondo', '#333') : document.documentElement.style.setProperty('--c-fondo', '#fff')
    this.isDark ? document.documentElement.style.setProperty('--c-texto', '#fff') : document.documentElement.style.setProperty('--c-texto', '#333')
    this.isDark ? document.documentElement.style.setProperty('--c-subtexto', '#e5e5e5') : document.documentElement.style.setProperty('--c-subtexto', '#999')
    
  }

}
