// config. Toast
const ativadorToast = document.getElementById('btn-checar-avisos')
        const mensagem = document.getElementById('mensagens-alerta')

        if(ativadorToast){
            ativadorToast.addEventListener('click', function(){
                const toast = new bootstrap.Toast(mensagem)
                toast.show()
            })
        }