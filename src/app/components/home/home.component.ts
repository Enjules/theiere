import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Injectable } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class HomeComponent implements OnInit {
  applicationService: ApplicationService;
  logo_blanc_soeurs_theieres = '/assets/img/logo/Illustration.png';

  promo = [
    {
      url: '/assets/img/home/promo/soleil des tropiques bio.png',
      title: 'Soleil des tropiques BIO'
    },
    {
      url: '/assets/img/home/promo/flash intense.png',
      title: 'Théière Flash intense'
    },
    {
      url: '/assets/img/home/promo/le comte bleu bio.png',
      title: 'Le comte bleu BIO'
    },
    {
      url: '/assets/img/home/promo/la romantique marron.png',
      title: 'Mug la Romantique'
    },
    {
      url: '/assets/img/home/promo/grand boum bio.png',
      title: 'Grand boum BIO'
    }
  ];

  soleilImg = '/assets/img/home/promo/soleil des tropiques bio2.png';
  vertImg = '/assets/img/home/promo/vert le the.png';

  constructor(private service: ApplicationService) { 
    this.applicationService = service;
  }

  ngOnInit() {
  }

}
