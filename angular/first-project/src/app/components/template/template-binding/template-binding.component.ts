import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Camila'
  public age = 23

  public sum() {
    this.age++
  }

  public sub() {
    this.age--
  }

  public onMouseMove(event: MouseEvent){
    console.log(event)
  }

  public isDisabled = true

}
