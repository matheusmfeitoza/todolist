


//Pegando os elementos do HTML

const pegarInput  = document.querySelector('[data-list-input]');
const pegarBtnAdd = document.querySelector('[data-list-btnAdd]');
const pegarBtnRmv = document.querySelector('[data-list-btnRmv]');
const addItemList = document.querySelector('[data-list'); 
const pegarForm   = document.querySelector('[data-list-form]');
function addCoisasNaLista(){
    pegarBtnAdd.addEventListener('click',function(e){
        const valorInput = pegarInput.value;
        if(valorInput == null || valorInput == ""){
            return;
        }
        pegarInput.value = "";

        addItemList.innerHTML += `<li>${valorInput}</li>`
    })
}

function removeItensLista(){
    pegarBtnRmv.addEventListener('click',() =>{
        const valorInput = pegarInput.value;
        const valorDoItemList = document.querySelector('[data-list').children
            for(let i = 0; i < valorDoItemList.length; i++){
                if(valorDoItemList[i].textContent === valorInput){
                    valorDoItemList[i].remove();
                    break
                }              
            }
            if(valorDoItemList !== null){
                const teste = valorDoItemList.length - 1;
                valorDoItemList[(valorDoItemList.length - 1)].remove()
            pegarInput.value = "";
        }
    })
}
function pausaOform(){
    pegarForm.addEventListener('submit',function(e){
        e.preventDefault();
    })
}
pausaOform();
addCoisasNaLista();
removeItensLista();