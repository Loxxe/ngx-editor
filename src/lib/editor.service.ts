import { Injectable, Optional } from '@angular/core';

import { NgxEditorConfig} from './types';
import Locals from './Locals';

@Injectable({
  providedIn: 'root'
})
export class NgxEditorServiceConfig {
  public locals = {};
}

@Injectable({
  providedIn: 'root'
})
export class NgxEditorService {
  config: NgxEditorServiceConfig;

  constructor(@Optional() config?: NgxEditorServiceConfig) {
    this.config = config;
  }

  get locals(): Locals {
    return new Locals(this.config.locals);
  }
}

export const provideMyServiceOptions = (config?: NgxEditorConfig): NgxEditorServiceConfig => {
  return {
    locals: config.locals ?? {}
  };
};
