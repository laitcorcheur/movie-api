import { Component } from '@angular/core';


@Component({
  selector: 'my-prefix-root',
  template: `
  <!-- <my-prefix-movies></my-prefix-movies> -->
  <my-prefix-overlay></my-prefix-overlay>
  <mat-drawer-container class="nav">
      <mat-drawer mode="side" opened class="left">
        <my-prefix-nav></my-prefix-nav>
      </mat-drawer>
      <mat-drawer-content>
        <my-prefix-services></my-prefix-services>
      </mat-drawer-content>
  </mat-drawer-container>

  <router-outlet></router-outlet>
  `,
  styles: [`
    .left{
      background: linear-gradient(#03224c, #abaec0);
    }
    .nav{
      background: linear-gradient(#03224c, #d4d6df);
    }
  `]
})
export class AppComponent {
  title = 'iworknotalone';
}
