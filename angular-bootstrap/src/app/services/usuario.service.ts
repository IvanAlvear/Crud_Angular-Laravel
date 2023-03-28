
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usuarios } from '../interfaces/usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  
  constructor(private httpClient: HttpClient) { }

  get(): Observable<usuarios[]> {
    return this.httpClient.get<usuarios[]>(this.API_ENDPOINT + '/usuarios');
  }

  save(usuarios: usuarios): Observable<usuarios> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<usuarios>(this.API_ENDPOINT+ '/usuarios', usuarios, { headers: headers });
  }
  put(usuarios: usuarios):  Observable<usuarios> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put<usuarios>(this.API_ENDPOINT+ '/usuarios/' + usuarios.id, usuarios, { headers: headers });
  }
  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.API_ENDPOINT}/usuarios/${id}`);
  }
  

}

