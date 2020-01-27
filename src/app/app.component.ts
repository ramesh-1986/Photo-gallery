import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'photo-gallery';
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/product.png',
        medium: 'assets/images/product.png',
        big: 'assets/images/product.png'
      },
      {
        small: 'assets/images/product.png',
        medium: 'assets/images/product.png',
        big: 'assets/images/product.png'
      },
      {
        small: 'assets/images/product.png',
        medium: 'assets/images/product.png',
        big: 'assets/images/product.png'
      }, {
        small: 'assets/images/product.png',
        medium: 'assets/images/product.png',
        big: 'assets/images/product.png'
      },
      {
        small: 'assets/images/product.png',
        medium: 'assets/images/product.png',
        big: 'assets/images/product.png'
      }
    ];
  }
}
