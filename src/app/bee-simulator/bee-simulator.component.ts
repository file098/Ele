import { Component } from '@angular/core';
import { P5Service } from '../p5.service';

@Component({
  selector: 'app-bee-simulator',
  templateUrl: './bee-simulator.component.html',
  styleUrls: ['./bee-simulator.component.scss'],
})
export class BeeSimulatorComponent {
  constructor(private p5Service: P5Service) {}

  ngOnInit() {
    this.p5Service.createCanvas();
  }
}
