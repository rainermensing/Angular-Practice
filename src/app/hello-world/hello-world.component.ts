import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit, OnDestroy {
  title: string = "Hello World"
  intervalSub: any;

  constructor() { }

  ngOnInit(): void {
    this.intervalSub = setInterval(() => {
      console.log("Hello from OnInit");
    },1000 );
  }
  ngOnDestroy(): void {
    if(this.intervalSub){
      clearInterval(this.intervalSub);
    }
  }

}
