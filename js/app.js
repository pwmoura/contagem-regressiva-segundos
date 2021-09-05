const criaCronometro = function(vi,elemento){

    /**
        # Função construtora de contagens Regressivas
        ----------------------------------------------
        Para criar o objeto é só informar:
        vi --> Valor inicial da contagem, diferente de zero.
        elemento --> o elemento html que vai receber o texto da contagem.

        Ex.:
            const contRegressiva = criaCronometro(300,'cr')
            contRegressiva.iniciar()
    */

    let valorInicial = vi
    let valorAtual = valorInicial
    const pulo =  1
    const c = document.getElementById(elemento)
    
    const subtrair = () => {
        valorAtual = valorAtual - pulo
        c.innerText = valorAtual
    }

    const iniciar = () => {
        const animar = setInterval(function(){
            if(valorAtual === 0){
                clearInterval(animar)
            }else{
                subtrair()
            }
        },1000)
    }

    return{
        iniciar
    }
}

const contRegressiva = criaCronometro(300,'cr')
contRegressiva.iniciar()