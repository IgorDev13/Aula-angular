import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header.components";
import { FormsModule } from '@angular/forms';


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

  isPremium = false;
  
  item= "";
  quantidade = 0;
  mensagem = '';
   limparMensagem(){
      this.mensagem = '';
    }

  valor: {item: string, quantidade: number}[] =   []

    adicionar(){
      if(!this.item || this.quantidade <= 0){
        this.mensagem = 'Preencha o item e uma quantidade valida!';
        return;
      }
      
      this.valor.push({
        item: this.item, 
        quantidade: this.quantidade
    });

    //limpar campos
    this.item='';
    this.quantidade = 0;

   
  }
  
}
