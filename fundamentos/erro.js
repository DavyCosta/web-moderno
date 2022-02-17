function tratarErroELancar(erro) {
    //throw new Error('exibindo erro')
    //throw 10 
    //throw true
    //throw 'exibindo erro'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomGrifado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomGrifado(obj)