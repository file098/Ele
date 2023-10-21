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

  private sketch(p: any, ) {
    let bees: Bee[] = [];

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.background(0); // Set background with alpha channel for transparency
      p.noFill(); // Set outline without a fill color
      p.noStroke(); // Disable stroke (outline) for shapes
      for (let i = 0; i < 20; i++) {
        bees.push(new Bee(p));
      }
    };

    p.draw = () => {

      p.background(126, 46, 126); 
      p.noFill(); // Set outline without a fill color
      p.noStroke(); // Disable stroke (outline) for shapes
    
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
      radius: number = 30;
      isStopped: boolean;
      rotation: number;
      beeIcon: any;

      constructor(p: any) {
        this.x = p.random(p.width);
        this.y = p.random(p.height);
        this.speedX = p.random(-2, 2); // Vary speed and direction more
        this.speedY = p.random(-2, 2); // Vary speed and direction more
        this.isStopped = p.random(1) < 0.02;
        this.rotation = 0;
        this.beeIcon = p.loadImage('assets/bee.png');
      }

      update() {
        if (!this.isStopped) {
          this.x += this.speedX + p.random(-1, 1); // Introduce random lateral movement
          this.y += this.speedY + p.random(-1, 1); // Introduce random lateral movement
          this.rotation = Math.atan2(this.speedY, this.speedX); // Update rotation based on movement direction

          // Add more randomness to speed and direction
          this.speedX += p.random(-0.2, 0.2);
          this.speedY += p.random(-0.2, 0.2);

          // Constrain speed to limit extreme values
          this.speedX = p.constrain(this.speedX, -2, 2);
          this.speedY = p.constrain(this.speedY, -2, 2);

          if (this.x > p.width || this.x < 0) {
            this.speedX *= -1;
          }
          if (this.y > p.height || this.y < 0) {
            this.speedY *= -1;
          }
        }

        if (p.random(1) < 0.01) {
          this.isStopped = !this.isStopped;
        }
      }

      display() {
        p.push();
        p.translate(this.x, this.y);
        p.rotate(this.rotation);

        p.image(
          this.beeIcon,
          -this.radius / 2,
          -this.radius / 2,
          this.radius,
          this.radius
        );

        p.pop();
      }
    }
  }
}
