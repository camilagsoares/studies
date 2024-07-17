import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() textButton!: string 

  constructor(){
    console.log("componente construido")
  }

  ngOnInit() {
    console.log("componente inicializado")

  }

  ngOnDestroy(){
    console.log("componente destruido")
  }


  
}
