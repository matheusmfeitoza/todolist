// // Exercicio FizzBuzz
// let resultado = fizzBuzz(22);
// console.log(resultado)
// function fizzBuzz(entrada){
//    if(typeof(entrada)!== "number"){
//        return "Não é um número";
//    }else{
//        if((entrada % 3 === 0) && (entrada % 5 === 0)){
//            return "FizzBuzz";
//        }else{
//            if(entrada % 3 === 0){
//                return "Fizz";
//            } else{
//                if(entrada % 5 === 0){
//                    return "Buzz"
//                }else{
//                    return entrada
//                }
//            }
//        }
//    }
// }

// // Exercicio invertendo strings
// let str = '';
// function revertString(valor){
//     for(let i = valor.length - 1; i >= 0; i--){
//         str += valor[i];
//     }
//     console.log(str);
// }
// let resultado = revertString("Matheus")

// Celsius to Fah;

// function convertCelsiusToFah(value){
//     return value * 1.8 + 32;
// }

// let resultado = convertCelsiusToFah(32)
// console.log(resultado)


// // Todo List
// //Pegar elemento Input;
// const pushInput = document.getElementById("input");
// const pushButton = document.getElementById("add");
// console.log(pushButton)

// var idade;
// function verificaMaiorIdade(){  
//     if(idade >= 18){
//         return "é maior de idade";
//     }else{
//         return "é menor de idade";
//     }
// };
// function verificaIdade(nomePessoa,anoNascimento){
//     idade = 2021 - anoNascimento;
//     let retornoIdade = verificaMaiorIdade();
//     console.log(`${nomePessoa}, ${retornoIdade}`);
// }
// verificaIdade("Matheus",1995);


// function main(){
//     const listContainer = document.querySelector('[data-list]');
//     const newListForm   = document.querySelector('[data-list-form]');
//     const newListInput  = document.querySelector('[data-list-input]');

//     newListForm.addEventListener('submit',function(e){
//         e.preventDefault();
//         const listValue = newListInput.value;
//         if (listValue === null || listValue === '') return;
//         newListInput.value = null;
//         listContainer.innerHTML += `
//             <li>${listValue}</li>
//         `;
//     });
// }
// main();



// const listContainer = document.querySelector('[data-list]');
// const newListForm   = document.querySelector('[data-list-form]');
// const newListInput  = document.querySelector('[data-list-input]');

// function addListItens(){
//     newListForm.addEventListener('submit',function(e){
//         e.preventDefault();
//         const getListInput = newListInput.value; 
//         if(getListInput === null || getListInput === ""){
//         return console.log("Estou aqui")
//     }
//         newListInput.value = "";
//         listContainer.innerHTML += `<li>${getListInput}</li>`;
//     })
// }
// addListItens();