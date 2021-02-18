import { Server } from '@overnightjs/core';
import './util/module-alias.ts';

export default class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
  }

  private setupExpress(): void {}
}
