import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './produto-detalhe.component.html',
  styleUrl: './produto-detalhe.component.css',
})
export class ProdutoDetalheComponent {
  id: number = 0;
  constructor(private route: ActivatedRoute) {
    this.getProdutoById();
  }

  getProdutoById(): void {
    const idParamentro = this.route.snapshot.paramMap.get('id');
    console.log();
    this.id = idParamentro ? parseInt(idParamentro, 10) : 0;
  }
}
// id: number = 0;

//   getClientById(): void {
//     const idParam = this.route.snapshot.paramMap.get('id');
//     this.id = idParam ? parseInt(idParam, 10) : 0;
//     console.log(this.id);
//   }
