import { Component } from '@angular/core';
import { ServicePerfilService } from '../../services/service-perfil.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  usuario:string[];

  constructor(private usuarioService: ServicePerfilService){
    this.usuario = this.usuarioService.getUser();
  }

}
