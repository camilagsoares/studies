import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { ButtonComponent } from '../../components/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent,ButtonComponent,MatIconModule,MatProgressSpinnerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
