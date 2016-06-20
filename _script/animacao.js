/* 
 * Esse scritp conterá o loop de animaçao
 */

function Animacao(context) {
    this.context = context;
    this.sprites = [];
    this.ligado = false;
}

Animacao.prototype = {
    novoSprite: function (sprite) {
        this.sprites.push(sprite);
    },
    ligar: function () {
        this.ligado = true;
        this.proximoFrame(); //será o coracao da classe Animacao
    },
    desligar: function () {
        this.ligado = false;
    },
    proximoFrame: function () {
        //posso continuar?
        if (!this.ligado)
            return;

        // A cada ciclo, limpamos a tela ou desenhamos um fundo
        this.limparTela();
        
        // Atualizamos o estado dos sprites
        for(var i in this.sprites)
            this.sprites[i].atualizar();
        
        // Desenhamos os sprites
        for(var i in this.sprites)
            this.sprites[i].desenhar();
        
        //Chamamos o proximo frame
        var animacao = this;
        requestAnimationFrame(function(){
            animacao.proximoFrame();
        });    
    }, 
    
    limparTela: function(){
        var ctx = this.context; // Só para facilitar a escrita ;)
        ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
    }
}
