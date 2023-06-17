import { Injectable } from '@angular/core';
import { LogLevel } from './jms-logger.model';

@Injectable({
  providedIn: 'root'
})
export class JmsLoggerService {
  loglevel: LogLevel = new LogLevel();
  currdte = new Date();


  info(msg:string):void{
    this.logWith(this.loglevel.Info, msg);
  }

  warn(msg:string):void{
    this.logWith(this.loglevel.Warn, msg);
  }

  error(msg:string):void{
    this.logWith(this.loglevel.Error, msg);
  }

  private logWith(level: any, msg:string):void{
    if (level <= this.loglevel.Error){
      switch (level){
        case this.loglevel.None:
          return console.log(this.currdte + msg);
        case this.loglevel.Info:
          return console.info(this.currdte + '%c' + msg);
        case this.loglevel.Warn:
          return console.warn(this.currdte + '%c' + msg);
        case this.loglevel.Error:
          return console.error(this.currdte + '%c' + msg);
        default:
          console.debug(msg);
      }
    }
  }
}

