import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent],
  styles: [`
  h1 {
    color:red;
  }
  `],
  template: `
  <app-new-component />
  <h1>Curso de Angular</h1>
<!-- <router-outlet /> -->
  `,
})
export class AppComponent { }
