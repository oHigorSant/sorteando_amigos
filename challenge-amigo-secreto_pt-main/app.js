//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
/*
Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".

Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.

Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.

Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.


*/

const nomes = []

function adicionarAmigo(){
    const input = document.getElementById('amigo');
    const valor = input.value.trim()

    if(valor === ''){
        alert('Digite um nome')
    }

   nomes.push(valor)
    
   const li = document.createElement('li');
   li.textContent = valor

   document.getElementById('listaAmigos').appendChild(li)
   input.value = ''
   

}

function sortearAmigo(){

 const indiceSorteado = Math.floor(Math.random() * nomes.length);
 const sorteado = document.createElement('li')
 sorteado.textContent = `O sorteado foi: ${nomes[indiceSorteado]}`
 document.getElementById('resultado').appendChild(sorteado)
 ul.style.display = 'none'
 
 
 
}
