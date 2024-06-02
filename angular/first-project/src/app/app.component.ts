import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';
import { TemplateDrivenFormsComponent } from './components/forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewComponent,
    TemplateBindingComponent,
    TemplateVariablesComponent,
    TemplateControlFlowComponent,
    PaiOuMaeComponent,
    AngularPipesComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent
  ],
  styles: [
    `
      /*       h1 {
        color: red;
      } */
    `,
  ],
  template: `
    <!-- <app-new-component />
    <app-template-binding />
    <app-template-variables />
    <router-outlet />
    <app-template-control-flow />
    <app-pai-ou-mae />
    <h1>Curso de Angular</h1>
     <app-angular-pipes />

     
    <app-template-driven-forms />
     -->
     
    <app-reactive-forms  />
  `,
})
export class AppComponent {}
