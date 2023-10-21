import { Injectable } from '@angular/core';
import * as p5 from 'p5';

@Injectable({
  providedIn: 'root',
})
export class P5Service {
  p5: any;

  constructor() {}

  createCanvas() {
    this.p5 = new p5(this.sketch);
  }

  private sketch(p: any) {
    let bees : Bee[]= [];

    p.setup = () => {
      p.createCanvas(800, 600);
      for (let i = 0; i < 20; i++) {
        bees.push(new Bee(p));
      }
    };

    p.draw = () => {
      p.background(220);
      for (let bee of bees) {
        bee.update();
        bee.display();
      }
    };

    class Bee {
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      radius: number;
      isStopped: boolean;
      beeIcon: any;

      constructor(p: any) {
        this.x = p.random(p.width);
        this.y = p.random(p.height);
        this.speedX = p.random(1, 2);
        this.speedY = p.random(1, 2);
        this.radius = 10;
        this.isStopped = p.random(1) < 0.02; // 2% chance of stopping
        this.beeIcon = p.loadImage('/src/assets/bee.png');
      }

      update() {
        if (!this.isStopped) {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x > p.width || this.x < 0) {
            this.speedX *= -1;
          }
          if (this.y > p.height || this.y < 0) {
            this.speedY *= -1;
          }
        }

        // Occasionally stop or resume
        if (p.random(1) < 0.005) {
          this.isStopped = !this.isStopped;
        }
      }

      display() {
        p.fill(255, 255, 0);
        p.ellipse(this.x, this.y, this.radius);
      }
    }
  }
}
