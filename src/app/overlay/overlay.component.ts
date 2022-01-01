import { Component, OnInit } from '@angular/core';
import { ISourceOptions } from 'tsparticles';

@Component({
  selector: 'my-prefix-overlay',
  template: `
  <ng-particles class="overlay" [id]="id" [options]="particlesOptions"></ng-particles>
  `,
  styles: [`
    .overlay{
        pointer-events: none;
        position : absolute;
        width: 100%;
        height: 100%;
        z-index: 100;
    }
  `]
})
export class OverlayComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  id = "tsparticles";
    particlesOptions : ISourceOptions = {
        fpsLimit: 60,
        particles: {
            color: {
                value: "#ffffff"
            },
            move: {
                direction: "bottom",
                enable: true,
                random: true,
                speed: {min: 2, max: 5},
                straight: false,
                out_mode: "out",
                bounce: false,
                // attract: {
                //     enable: true,
                //     rotateX: 300,
                //     rotateY: 1200
                // },
            },
            number: {
                density: {
                    enable: true,
                    value_area: 800
                },
                value: 100
            },
            opacity: {
                value: 0.7,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
            },
            shadow: {
                blur: 5,
                color: {
                  value: "#000000"
                },
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 3,
                    color: "#fff"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            size: {
                value: { min: 1, max: 5 },
                random: true
            }
        },
        detectRetina: true
    };
}
