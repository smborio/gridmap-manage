import { Component } from '@angular/core';
import { TopLeftComponent } from '../top-left/top-left.component';

@Component({
  selector: 'app-top-section',
  standalone: true,
  imports: [TopLeftComponent],
  templateUrl: './top-section.component.html',
  styleUrl: './top-section.component.scss'
})
export class TopSectionComponent {

}
