import { Injectable } from '@angular/core';
import {Cliente} from '../interfaces/Clientes';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes'; //URL da API
  clientes: Cliente[] = []

  constructor(private http:HttpClient) {

   }

list() : Observable<Cliente[]>{
  return this.http.get<Cliente[]>(this.apiUrl) as Observable<Cliente[]>
}

  //método para remover um cliente
  remove(id:string){
    const cliente = this.clientes.find(
      c => c.id == id
    ) //buscar o cliente na lista

    if(cliente){//Se encontrar o cliente
      //busca o index
      const index = this.clientes.indexOf(cliente)
      //remove da lista
      this.clientes.splice(index,1)
    }
  }

  //método adicionar um cliente
  add(cliente:Cliente){
    //O push adiciona um item (objeto) dentro
    //de uma array (lista)
    this.clientes.push(cliente)
    console.log(this.clientes)
  }

  update(id:string, cliente:Cliente){
    const index = this.clientes.findIndex(
      c => c.id ==id
    )

    if(index !== -1){
      this.clientes[index] =
      {
        ...this.clientes[index],
        ...cliente
      }
    }
  }
}
