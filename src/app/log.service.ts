import { ApplicationRef, Injectable } from "@angular/core";

export interface LogItem {
  component: string;
  msg: string;
  event?: string;
}


const header = '| Component | Msg | Event |';
const subHeader = '|---|---|---|';


@Injectable({
  providedIn: 'root'
})
export class LogService {

  private stack: LogItem[] = [];

  constructor(private appRef: ApplicationRef) {
    this.appRef.isStable.subscribe((stable) => {
      if (stable) {
        this.flush();
      }
    })
  }

  private currentEvent = 'initial';

  public log(msg: string, component: string, event?: string): void {
    if (event) {
      this.currentEvent = event;
    }
    this.stack.push({component, msg, event: this.currentEvent});
  }

  private flush(): void {
    const logsFromStack = [...this.stack];
    this.stack = [];


    const logs = logsFromStack.map(({component, msg, event}) => `| ${component} | ${msg} | ${event} |`).join('\n');
    console.log(
      `${header}\n${subHeader}\n${logs}`
    );
  }

}
