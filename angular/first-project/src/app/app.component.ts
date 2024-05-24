import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent, TemplateBindingComponent, TemplateVariablesComponent, TemplateControlFlowComponent],
  styles: [`
  h1 {
    color:red;
  }
  `],
  template: `
  
  <!-- <app-new-component />
  <app-template-binding />
  <app-template-variables /> -->
  <h1>Curso de Angular</h1>
<!-- <router-outlet /> -->
<app-template-control-flow />
  `,
})
export class AppComponent { }
