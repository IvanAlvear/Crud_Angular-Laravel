import { Component, OnInit } from '@angular/core';
import { usuarios } from '../interfaces/usuarios';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  usuarios: usuarios = {
    name: '',
    email: '',
    phone: ''
  };
  id: any;
  editing: boolean = false;
  usuarios2: usuarios[] = []
  constructor(private usuariosService: UsuarioService,private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id){
      this.editing = true;
       this.usuariosService.get().subscribe((data: usuarios[]) => {
        this.usuarios2 = data;
        let usuario = this.usuarios2.find((m) => {return m.id == this.id});
        if(usuario){
          this.usuarios = usuario;
          console.log(this.usuarios)
        } else {
          alert('No se encontró un usuario con el ID especificado.');
        }
       }, (Error)=> {
         console.log(Error);       
       });
    }else{
      this.editing = false;
    }
  }
  

  ngOnInit(): void {
  }

  saveUsuarios() {
    if (this.editing){
      this.usuariosService.put(this.usuarios).subscribe((data) => {
        alert('Usuario actualizado')
        console.log(data);
      }, (Error) => {
        console.log(Error);
        alert('Ocurrio un error');
      });
  
    }else{
      this.usuariosService.save(this.usuarios).subscribe((data) => {
        alert('Usuario guardado')
        console.log(data);
      }, (Error) => {
        console.log(Error);
        alert('Ocurrio un error');
      });
  
    }
      }
}
