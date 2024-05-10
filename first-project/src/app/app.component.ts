import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent, TemplateBindingComponent],
  styles: [`
  h1 {
    color:red;
  }
  `],
  template: `
  <app-new-component />
  <app-template-binding />
  <h1>Curso de Angular</h1>
<!-- <router-outlet /> -->
  `,
})
export class AppComponent { }
