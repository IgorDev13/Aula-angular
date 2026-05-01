import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header.components";
import { FormsModule } from '@angular/forms';
/*
para utilizar o two-way, preciso imports: [FormsModule]

em app component, abaixo do outlet

uma lista com itens e um {{descricao1}} que vira do typeScript entao iremos em app.component.ts e iremos na nossa cçasse criar uma descricao = 'descricao tal";


criar um label previo do input
ainda em app component.html posso tbm add um input utilizando two-way model indo em app.component.ts(?) e importanto o FormsModule

muito utilizado em formularios, onde podemos acrescentar na class appcomponent um valor: (
	contendo descricao, nome e id
) = (descricao: '')*/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FirstProject';
  descricao1 = 'Descricao item 2';

  valor: {
    
    descricao: string,
    nome: string,
    idade: number
  } = {
    descricao: '',
    nome: '',
    idade: 0 
  }
    
}
