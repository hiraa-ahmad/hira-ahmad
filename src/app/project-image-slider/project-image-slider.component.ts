import { Component } from '@angular/core';

@Component({
  selector: 'app-project-image-slider',
  templateUrl: './project-image-slider.component.html',
  styleUrls: ['./project-image-slider.component.scss']
})
export class ProjectImageSliderComponent {
  // images = [
  //   'https://picsum.photos/id/1018/1000/600',
  //   'https://picsum.photos/id/1015/1000/600',
  //   'https://picsum.photos/id/1019/1000/600'
  // ];

  images = [
    'assets/p1.png',
    'assets/p2.png',
    'assets/p3.png',
    'assets/p4.png'
  ];

  currentIndex = 0;
  interval: any;

  constructor() {
    this.startAutoSlide();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000); // 3 sec
  }

  stopAutoSlide() {
    clearInterval(this.interval);
  }
}
