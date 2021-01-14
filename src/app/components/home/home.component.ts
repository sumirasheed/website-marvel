import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  slides = [
    {
      'image': "../../../assets/images/image6.png",
      'title': "Lorem Ipsum Dolor sit Amet",
      'desc': "At iam decimum annum in spelunca iacet. Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Duarum enim vitarum nobis erunt instituta capienda. Fortasse id optimum, sed ubi illud: Plus semper voluptatis"
    },
    {
      'image': "../../../assets/images/image7.jpg",
      'title': "Lorem Ipsum Dolor sit Amet",
      'desc': "At iam decimum annum in spelunca iacet. Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Duarum enim vitarum nobis erunt instituta capienda. Fortasse id optimum, sed ubi illud: Plus semper voluptatis"
    },
    {
      'image': "../../../assets/images/image8.jpg",
      'title': "Lorem Ipsum Dolor sit Amet",
      'desc': "At iam decimum annum in spelunca iacet. Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Duarum enim vitarum nobis erunt instituta capienda. Fortasse id optimum, sed ubi illud: Plus semper voluptatis"
    }
  ];

  images = [
    {
      'image': "../../../assets/images/image9.png"
    },
    {
      'image': "../../../assets/images/image10.png"
    },
    {
      'image': "../../../assets/images/image11.png"
    },
    {
      'image': "../../../assets/images/image12.png"
    }
  ];

  slideConfig = {
    "slidesToShow" : 1,
    "slidesToScroll" : 1,
    "dots" : false,
    "infinite" : false,
    // "autoRotate" : true,
    // "autoRotateAfter" : 5000,
    "autoplay" : false,
    nextArrow: '.right-arrow',
    prevArrow: '.left-arrow'
  };
  ngOnInit() {
    // $(document).ready(function(){

    // });
  }

}
