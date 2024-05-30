import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicePerfilService {
  usuarios = ["Fulano teste", "01/10/1999", "O+"];
  
  constructor() { }

  getUser(): string[]{
    return this.usuarios;
  }
}
