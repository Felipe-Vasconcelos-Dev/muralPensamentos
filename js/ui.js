import api from "./api.js";
const pensamentoconteudo = document.getElementById("pensamento-conteudo").value = ""
const cancelar = document.getElementById("botao-cancelar")
cancelar.addEventListener("click",()=>{
    ui.reset()
})
const ui = {

    async preecherFormulario(pensamentoId){
        const pensamento = await api.buscarPensamentoPorId(pensamentoId)
        document.getElementById("pensamento-id").value =  pensamento.id
        document.getElementById("pensamento-conteudo").value =  pensamento.conteudo
        document.getElementById("pensamento-autoria").value =  pensamento.autoria
    },
    
    

    reset(){
        const reset = document.getElementById('pensamento-form')
        reset.reset()
    },
    async renderizarPensamentos(){
        const listaPensamentos = document.getElementById("lista-pensamentos")
        try{
            const pensamentos = await api.buscarPensamentos()
            pensamentos.forEach(ui.adicionarPensamentoNaLista);
        }
        catch{
            alert('Erro ao Renderizar 1')

        }

    },

    adicionarPensamentoNaLista(pensamento){
        const listaPensamentos = document.getElementById("lista-pensamentos")
        const li = document.createElement("li");
        li.setAttribute("data-id", pensamento.id)
        li.classList.add("li-pensamento")

        const iconeAspas = document.createElement("img")
        iconeAspas.src = "assets/imagens/aspas-azuis.png"
        iconeAspas.alt - "Aspas azuis";
        iconeAspas.classList.add("icone-aspas")

        const pensamentoConteudo = document.createElement("div")
        pensamentoConteudo.textContent = pensamento.conteudo
        pensamentoConteudo.classList.add("pensamento-conteudo")

        const pensamentoAudtoria = document.createElement("div")
        pensamentoAudtoria.textContent = pensamento.autoria
        pensamentoAudtoria.classList.add("pensamento-autoria")

        const botaoEditar = document.createElement("button")
        botaoEditar.classList.add("botao-editar")
        botaoEditar.onclick = async ()=>{ 
            try{

                await ui.preecherFormulario(pensamento.id)
                
            }catch{
                alert("Alerta Erro ao excluir pensament")
            }
        }

        const iconeEditar = document.createElement("img")
        iconeEditar.src = "assets/imagens/icone-editar.png"
        iconeEditar.alt = "Editar"

        botaoEditar.appendChild(iconeEditar)

        const botaoExcluir = document.createElement("button")
        botaoExcluir.classList.add("botao-excluir")

        botaoExcluir.onclick = ()=> api.excluirPensamentos(pensamento.id)

        const iconeExcluir = document.createElement("img")
        iconeExcluir.src = "assets/imagens/icone-excluir.png"
        botaoExcluir.appendChild(iconeExcluir)
        const icones = document.createElement("div")
        icones.classList.add("icones")
        icones.appendChild(botaoEditar)
        icones.appendChild(botaoExcluir)

        li.appendChild(iconeAspas)
        li.appendChild(pensamentoConteudo)
        li.appendChild(pensamentoAudtoria)
        li.appendChild(icones)
        listaPensamentos.appendChild(li)

    }
}

export default ui;