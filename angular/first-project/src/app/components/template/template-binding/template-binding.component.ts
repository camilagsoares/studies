import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule,CommonModule],
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
