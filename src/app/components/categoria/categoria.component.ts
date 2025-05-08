import { CategoriaService } from './../../services/categoria.service';
import { Categorias } from './../../interfaces/categorias';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  categoriaForm: FormGroup = new FormGroup({});
  categorias: Categorias[] = [];
  categoriaIdEdicao: string | null = null;

  constructor(
    private CategoriaService: CategoriaService,
    private formBuilder: FormBuilder
  ) {
    this.categoriaForm = formBuilder.group({
      nome: ['', Validators.required],
      telefone: [''],
    });
  }

  list(): void {
    this.CategoriaService.list().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  save(): void {
    if (this.categoriaForm.valid) {
      const formData = this.categoriaForm.value;

      if (this.categoriaIdEdicao) {
        const categoriaUpdate = { ...formData, id: this.categoriaIdEdicao };
        this.CategoriaService.update(this.categoriaIdEdicao, categoriaUpdate).subscribe(() => {
            this.categoriaIdEdicao = null;
            alert('Alterado com sucesso!');
            this.list();
          });
      } else {
        const categoriaAdd: Categorias = {
          id: this.generateRandomString(6),
          nome: formData.nome,
          descricao: formData.descricao,
          ativo: formData.ativo,
        };
        this.CategoriaService.add(categoriaAdd).subscribe(() => {
          alert('Inserido com sucesso!');
          this.list();
        });
      }
      this.categoriaForm.reset();
    } else {
      alert('Favor preencher os campos obrigatórios!');
    }
  }

  remover(id: string): void {
    this.CategoriaService.remove(id).subscribe(() => {
      alert('Removido com sucesso!');
      this.list();
    });
  }

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
}

