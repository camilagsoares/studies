import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss',
})
export class TemplateDrivenFormsComponent {
  public listComidas = signal<Array<{ comida: string; preco: string }>>([
    {
      comida: 'X-salada',
      preco: 'R$10',
    },
    {
      comida: 'X-bacon',
      preco: 'R$13',
    },
    {
      comida: 'Coxinha',
      preco: 'R$7',
    },
  ]);
}
