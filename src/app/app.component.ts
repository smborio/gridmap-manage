import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopSectionComponent } from './components/top-section/top-section.component';
import { LeftSectionComponent } from './components/left-section/left-section.component';
import { RightSectionComponent } from './components/right-section/right-section.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    DragDropModule,
    RouterOutlet, 
    TopSectionComponent, 
    LeftSectionComponent, 
    RightSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
  constructor(private cdRef: ChangeDetectorRef) {}
}
