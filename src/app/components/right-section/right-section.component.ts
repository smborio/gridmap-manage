import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-right-section',
  standalone: true,
  imports: [],
  templateUrl: './right-section.component.html',
  styleUrl: './right-section.component.scss'
})

export class RightSectionComponent {
  @ViewChild('svg') svg!: ElementRef;
  cx = 100;
  cy = 100;
  dragging = false;

  onMousedown(event: MouseEvent) {
    this.dragging = true;
  }

  onMousemove(event: MouseEvent) {
    if (this.dragging) {
      const point = this.svg.nativeElement.createSVGPoint();
      point.x = event.clientX;
      point.y = event.clientY;
      const svgPoint = point.matrixTransform(this.svg.nativeElement.getScreenCTM().inverse());
      this.cx = svgPoint.x;
      this.cy = svgPoint.y;
    }
  }

  onMouseup() {
    this.dragging = false;
  }

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'];

}
