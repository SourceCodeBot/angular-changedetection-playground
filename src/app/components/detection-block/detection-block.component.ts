import { Component, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck, Input, AfterContentInit, AfterViewInit } from '@angular/core';
import { LogService } from 'src/app/log.service';

let id = 1;

@Component({
  selector: 'app-detection-block',
  templateUrl: './detection-block.component.html',
  styleUrls: ['./detection-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectionBlockComponent implements DoCheck, AfterViewInit {

  @Input()
  public counter = 0;

  public id = `${id++}`;

  constructor(private cdr: ChangeDetectorRef, private logger: LogService) {}

  public ngDoCheck(): void {
      this.logger.log('check', this.id);
  }

  public triggerChanges(): void {
    this.logger.log('detectChanges', this.id, `click ${this.id}`);
    this.cdr.detectChanges();
  }

  public markCheck(): void {
    this.logger.log('markForCheck', this.id, `click ${this.id}`);
    this.cdr.markForCheck();
  }

  public ngAfterViewInit(): void {
    this.cdr.detach();
  }

}
