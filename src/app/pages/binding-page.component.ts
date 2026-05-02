import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-binding-page',
    standalone: true,
    imports: [CommonModule],
    template: `<h1>Binding Page</h1><img [src]="imagem" alt="Imagem">
    <div class="alert" [class]="{success: sucesso}">Alerta</div>
    <button (click)="enviarDados()">Enviar Dados</button>
    `,
    styles: `
        .alert{
            width: 100px;
            height: 30px;
            border: 2px solid red;
            
        }
        .success{
            border: 2px solid green;
        }
    `
})

export class BindingPageComponent {
    imagem = "https://labetno.ufpa.br/images/galeria_em_artigos/image03_grd.png"

    sucesso = true;

    enviarDados(){
        this.sucesso = !this.sucesso;   
    }
}