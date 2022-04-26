import { Component } from '@angular/core';

@Component({
    selector: 'app-hello-world',
    template: '<h1>{{title}}</h1>',
    styles: [`h1 {
        color: green;
    }`]
})

export class HelloWorldComponent {
    title = 'Hello World!';
}