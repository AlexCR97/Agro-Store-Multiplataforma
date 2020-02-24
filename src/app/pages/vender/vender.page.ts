import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.page.html',
  styleUrls: ['./vender.page.scss'],
})
export class VenderPage implements OnInit {

  private segmentIds = [
    'segment-1',
    'segment-2',
    'segment-3',
  ];

  private currentSegment = 1;
  private segmentCount = this.segmentIds.length;

  constructor(
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.moveSegment(-1);
  }

  clamp(value: number, min: number, max: number) {
    if (value < min) {
      return min;
    }
    else if (value > max) {
      return max;
    }
    return value;
  }

  confirmSegmentNext(segment: number): boolean {

    if (this.currentSegment == this.segmentCount) {
      this.showAlert();
    }
    
    return true;
  }

  moveSegment(direction: number) {
    if (direction > 0 && this.confirmSegmentNext(this.currentSegment) == false) {
      return;
    }

    this.currentSegment = this.clamp(this.currentSegment + direction, 1, this.segmentCount);

    var segmentId = 'segment-' + this.currentSegment;

    // set segment visibility
    for (let id of this.segmentIds) {
      const segment = document.getElementById(id);

      if (id == segmentId) {
        segment.style.display = 'block';
      } else {
        segment.style.display = 'none';
      }
    }
  }

  async showAlert() {
    const alert = await this.alertController.create({
        header: 'Publicar producto',
        message: '¿Quiere publicar este producto?',
        buttons: ['No', 'Si'],
    });

    await alert.present();
  }

}
