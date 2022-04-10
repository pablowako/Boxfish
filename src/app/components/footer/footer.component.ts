import { Component, OnInit } from '@angular/core';
import { Footer } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  footerItems: Footer[] = [
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com',
      path: 'assets/svgs/linkedinLogo.svg',
    },
    {
      title: 'Vans',
      url: 'https://www.vans.es/',
      path: 'assets/svgs/vansLogo.svg',
    },
    { title: 'YK', url: '#', path: 'assets/svgs/YK.svg' },
    {
      title: 'Fazua',
      url: 'https://fazua.com/en/',
      path: 'assets/svgs/fazuaLogo.svg',
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/',
      path: 'assets/svgs/twitterLogo.svg',
    },
    {
      title: 'Apple',
      url: 'https://www.apple.com/',
      path: 'assets/svgs/appleLogo.svg',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    
  }
}
