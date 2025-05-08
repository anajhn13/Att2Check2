import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-detail',
  standalone: true,
  imports: [],
  templateUrl: './cliente-detail.component.html',
  styleUrl: './cliente-detail.component.css'
})
export class ClienteDetailComponent {
  constructor(private clienteService: ClienteService, private route: ActivatedRoute) {
    this.getClientById(); 
  }
  
  id: number = 0;
  
  getClientById(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? parseInt(idParam, 10) : 0;
    console.log(this.id);
  }
}
