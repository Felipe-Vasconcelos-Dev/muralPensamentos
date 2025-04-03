

const api = {
    async buscarPensamentos(){
        try{
            const response = await fetch('http://localhost:3000/pensamentos');
            return await response.json()
        }
        catch{
            alert(`Erro ao buscar pensamentos 2`)
            throw error
        }
    },
    async buscarPensamentoPorId(id){
        try{
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`);
            return await response.json()
        }
        catch{
            alert(`Erro ao buscar pensamento`)
            throw error
        }
    },

    async SalvarPensamentos(pensamento){
        try{
            const response = await fetch('http://localhost:3000/pensamentos',{
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
            const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`,{
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
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`,{
                method: "DELETE"          
            });
            window.location.reload(true);
        
        }
        catch{
            alert(`Erro ao Excluir um pensamento`)
            throw error
        }
    }










}


export default api;