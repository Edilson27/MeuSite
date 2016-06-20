/* 
 * Esse script conterá o sprite
 */

function Bola(context){
    this.context = context;
    this.x = 0;
    this.y = 0;
    this.velocidadeX = 0;
    this.velocidadeY = 0
    
    // Atributos de desenho padrao
    this.cor = 'black';
    this.raio = 10;
}

Bola.prototype = {
    atualizar: function(){
        
    }, 
    
    desenhar: function(){
        
    }
}
