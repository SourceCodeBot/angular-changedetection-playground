import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements DoCheck {
  public title = 'Angular Change-Detection Playground';

  constructor(private cdr: ChangeDetectorRef, private logger: LogService) {}

  public ngDoCheck(): void {
      this.logger.log('check', 'app');
  }

  public triggerChanges(): void {
    this.logger.log('detectChanges', 'App', 'click App');
    this.cdr.detectChanges();
  }

  public markCheck(): void {
    this.logger.log('markForCheck', 'App', 'click App');
    this.cdr.markForCheck();
  }
}
