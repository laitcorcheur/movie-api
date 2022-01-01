import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'my-prefix-details',
  template: `
    <ng-template cdkConnectedOverlay [cdkConnectedOverlayOrigin]="triggerOrigin" [cdkConnectedOverlayHasBackdrop]="true"
                (backdropClick)="isOpen=false" [cdkConnectedOverlayOpen]="isOpen">
        <div class="card">
            <div class="card-body">Hello</div>
            <button class="btn btn-standard" (click)="isOpen=false">Close</button>
        </div>
    </ng-template>
    <p>TEST</p>
  `,
  styles: [
  ]
})

export class DetailsComponent implements OnInit {
  isOpen = false;
  triggerOrigin: any;

  constructor() {}

  toggle(trigger: any) {
    this.triggerOrigin = trigger;
    this.isOpen = !this.isOpen
  }
  ngOnInit(): void {
  }

}
