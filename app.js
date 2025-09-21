//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
var NomesParaSorteio = [];



function adicionarAmigo(){
    
    document.getElementById('resultado').innerHTML = '';
    
        if (document.querySelector('input').value === ''){
        alert('Por favor, insira um nome antes de adicionar.');
        return;
        }else{
            if (NomesParaSorteio.includes(nome = document.querySelector('input').value)){
                alert('Esse nome ja foi adicionado, por favor insira outro nome');
                document.querySelector('input').value = '';
                return;
            } else{

                let nome = document.querySelector('input').value;
                NomesParaSorteio.push(nome);

                document.querySelector('input').value = '';
                ExibirLista();
        
            }

        }
}



function ExibirLista(){
    let paragrafo = document.getElementById('listaAmigos');
    paragrafo.innerHTML = 'Particpantes do amigo secreto: ';

    NomesParaSorteio.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        paragrafo.appendChild(li);
    }
    )
}
function sortearAmigo(){
    const nomeSorteado = Math.floor(Math.random() * NomesParaSorteio.length);
    const resultado = NomesParaSorteio[nomeSorteado];
    
    let paragrafoResultado = document.getElementById('resultado');
    paragrafoResultado.innerHTML = 'O amigo secreto sorteado foi:   ' + resultado;
    limparLista();
}

function limparLista(){
    NomesParaSorteio = [];
    document.getElementById('listaAmigos').innerHTML = '';
    
}   


