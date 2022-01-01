import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'my-prefix-nav',
  template: `
      <ul>
        <li><a href="#">Welcome</a></li>
        <li class="active"><a href="#">Popular</a></li>
        <li><a href="#">Top rated</a></li>
        <li><a href="#">Now playing</a></li>
        <li><a href="#">Upcoming</a></li>
      </ul>
  `,
  styles: [`
  ul{
    margin-right: 2em;
  }
  li {
    position: relative;
    margin: 3.2em 0;
    &,a {
      line-height: 5em;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.4em;
      color: rgba(#FFF, 0.35);
      display: block;
      transition: all ease-out 300ms;
    }
    
    &.active a {
      color: white;
    }
    
    &:not(.active)::after {
      opacity: 0.2;
    }
    
    &:not(.active):hover a {
      color: rgba(#FFF, 0.75);
    }
    
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.2em;
      background: black;
      left: 0;
      bottom: 0;
      background-image: linear-gradient(to right, #5e42a6, #b74e91)
    }
  }


.twitter {
  position: relative;
  width: 75%;
  float: right;
  height: 100vh;
  
  & .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  
  a {
    position: relative;
    
    &,img {
      width: 48px;
      height: 48px;
    }
  }
  
  p {
    text-transform: uppercase;
    font-size: 1em;
    letter-spacing: 0.1em;
    color: #FFF;
    font-weight: bold;
    margin-top: 20px;
  }
}
  `]
})
export class NavComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }

}
