import { Component, OnInit} from '@angular/core';
import  { UsuarioService} from '../services/usuario.service';
import { usuarios } from '../interfaces/usuarios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
  export class HomeComponent implements OnInit {

    usuarios: usuarios[] = [];
    constructor(private usuarioService: UsuarioService) { 
      this.usuarioService.get().subscribe((data: usuarios[]) =>{
        this.usuarios = data; 
      }, (error) => {
        console.log(error);
        alert('Ocurrio un eror')
      });
    }
  ngOnInit (){

  }
  delete(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.usuarioService.delete(id).subscribe(() => {
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
        alert('El usuario ha sido eliminado');
      }, error => {
        console.error(error);
        alert('Ocurrió un error al eliminar el usuario');
      });
    }
  }  
}



