import { ChangeDetectionStrategy, Component, EffectRef, computed, effect, input, signal } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-ang-new-features',
  templateUrl: './ang-new-features.component.html',
  styleUrls: ['./ang-new-features.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngNewFeaturesComponent {

    someNum = input<number>();

    counter = this.counterService.counter;

    derivedCounter = computed(() => {
        const counter = this.counter();
        return counter * 10;
    });
    constructor(public counterService: CounterService) {
    }

    increment() {
        this.counterService.increment();
    }
}
