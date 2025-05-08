import { ClienteComponent } from './components/cliente/cliente.component';
import { Routes } from '@angular/router';
import { RotasComponent } from './components/rotas/rotas.component';
import { ClienteDetailComponent } from './componets/cliente-detail/cliente-detail.component';
import { HomeComponent } from './home/home.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProdutoDetalheComponent } from './components/produto-detalhe/produto-detalhe.component';
import { CategoriaComponent } from './components/categoria/CategoriaComponent';

export const routes: Routes = [
    {path : '', component: HomeComponent},
    {path: 'cliente', component:ClienteComponent},
    {path: 'control-flow', component:ControlFlowComponent},
    {path: 'produto/:id', component:ProdutoDetalheComponent},
    {path:'categoria', component:CategoriaComponent},
    {path:'**', component:NotfoundComponent},
];
