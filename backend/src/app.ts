import express from 'express';
import { Application } from 'express';
import router from './routes/index';

export class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.configureMiddleware();
    this.configureRoutes();
  }

  private configureMiddleware(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private configureRoutes(): void {
    this.app.use('/', router);
  }

  public start(port: string | number): void {
    this.app.listen(port, () => {
      console.log(`Servidor iniciado na porta ${port}`);
    });
  }
}
