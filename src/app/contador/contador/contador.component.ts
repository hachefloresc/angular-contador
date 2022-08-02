import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
  
    template: ` <h1>Welcome {{ titulo }} to Angular</h1>

                <h3>La base del incremento es: {{ base }}</h3>
                
                <button (click)="incremento(base)">+</button>
                
                <span> Contador: {{ numero }}</span>
                
                <button (click)="incremento(-base)">-</button>`
    
})



export class ContadorComponent {

    titulo: string = 'Hache';

    numero: number = 0;
    base  : number = 5;
  
  /*   sumar(){
      this.numero += 1;
    }
  
    restar(){
      this.numero -= 1;
    } */
  
    incremento(base: number){
      this.numero += base;
    }


}