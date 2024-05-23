import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Lorem Ipsum is simply dummy',
        p: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      text: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also.',
    },

    {
      summary: {
        strong: 'Lorem Ipsum is simply dummy',
        p: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      text: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also.',
    },
    {
      summary: {
        strong: 'Lorem Ipsum is simply dummy',
        p: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      text: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also.',
    },
  ]);
}
