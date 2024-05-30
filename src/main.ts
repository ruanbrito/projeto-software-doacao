import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PerfilComponent } from './app/componentes/perfil/perfil.component';

bootstrapApplication(PerfilComponent, appConfig)
  .catch((err) => console.error(err));
