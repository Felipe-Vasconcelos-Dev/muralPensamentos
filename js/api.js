const api_base = "http://localhost:3000/pensamentos/";

const api = {
    async buscarPensamentos(){
        try{
    const response = await fetch(`${api_base}`);
            return await response.json()
        }
        catch{
            alert(`Erro ao buscar pensamentos 2`)
            throw error
        }
    },
    async buscarPensamentoPorId(id){
        try{
            const response = await fetch(`${api_base}${id}`);
            return await response.json()
        }
        catch{
            alert(`Erro ao buscar pensamento`)
            throw error
        }
    },

    async SalvarPensamentos(pensamento){
        try{
            const response = await fetch(`${api_base}`,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)                

            });
            return await response.json()
        }
        catch{
            alert(`Erro ao buscar pensamentos 2`)
            throw error
        }
    },
    async editarPensamentos(pensamento){
        try{
            const response = await fetch(`${api_base}${pensamento.id}`,{
                method: "PUT",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)                

            });
            return await response.json()
        }
        catch{
            alert(`Erro ao Salvar pensamento`)
            throw error
        }
    },
    async excluirPensamentos(id){
        try{
            const response = await fetch(`${api_base}${id}`,{
                method: "DELETE"          
            });
            location.reload();
        
        }
        catch{
            alert(`Erro ao Excluir um pensamento`)
            throw error
        }
    }










}


export default api;