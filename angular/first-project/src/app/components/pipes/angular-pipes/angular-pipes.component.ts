import { DatePipe, JsonPipe, LowerCasePipe , AsyncPipe} from '@angular/common';
import { Component, signal } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [DatePipe,LowerCasePipe , JsonPipe,AsyncPipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss'
})
export class AngularPipesComponent {
  public date = signal(new Date())

  public json = signal([{
    name: 'Camila Soares'
  }])

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3'
  ]).pipe(delay(3000))
}
