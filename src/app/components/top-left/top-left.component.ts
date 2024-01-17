import { Component, OnInit, OnDestroy } from '@angular/core';
import { DmModeService } from '../../services/dm-mode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-left',
  standalone: true,
  imports: [],
  templateUrl: './top-left.component.html',
  styleUrl: './top-left.component.scss'
})
export class TopLeftComponent implements OnInit, OnDestroy {
  dmMode!: boolean;
  subscription!: Subscription;

  constructor(private dmModeService: DmModeService) { }

  ngOnInit() {
    this.subscription = this.dmModeService.getDmMode().subscribe(value => {
      this.dmMode = value;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleDmMode() {
    if (!this.dmMode) {
      const pin = window.prompt('Enter pin');
      if (pin === '1234') {
        this.dmModeService.setDmMode(!this.dmMode);
        console.log(`DM Mode is ${this.dmMode ? 'ON' : 'OFF'}`);
      } else {
        alert('Incorrect pin');
      }
    } else {
      this.dmModeService.setDmMode(!this.dmMode);
      console.log(`DM Mode is ${this.dmMode ? 'ON' : 'OFF'}`);
    }
  }
}
