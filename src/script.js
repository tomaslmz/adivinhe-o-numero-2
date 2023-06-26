var vidas = 5;
var limite = 10;
var numerosecreto = parseInt(Math.random() * (limite - 0) + 0);

const adivinhar = (numero) => {
    if(numero >= 0 && numero <= limite) {
        document.getElementById("adivinhar").value = '';
        if(numero == numerosecreto) {
            vidas = 5;
            document.getElementById("mensagem").innerHTML = "Você acertou!";
            document.getElementById("vidas").innerHTML = '';
            for(let i = 0; i<vidas; i++) {
                document.getElementById("vidas").innerHTML += '<img src="public/images/red-heart.png" alt="">';
            }

            document.getElementById("numero").innerHTML = numerosecreto;
            
            setTimeout(() => {
                limite+=10;
                document.getElementById("fases").innerHTML = "Fase " + limite/10 + " (0 - " + limite + ")";
                document.getElementById("numero").innerHTML = '?';
                document.getElementById("mensagem").innerHTML = "";
                numerosecreto = parseInt(Math.random() * (limite - 0) + 0);
            }, 5000);
            
        } else {
            if(vidas > 1) {
                vidas--;
                document.getElementById("vidas").innerHTML = ''
                for(let i = 0; i<5-vidas; i++) {
                    document.getElementById("vidas").innerHTML += '<img src="public/images/gray-heart.png" alt="">';
                }
                for(let i = 0; i<vidas; i++) {
                    document.getElementById("vidas").innerHTML += '<img src="public/images/red-heart.png" alt="">';
                }
                document.getElementById("mensagem").innerHTML = "Você errou!"
            }  else {
                document.getElementById("vidas").innerHTML = ''
                vidas--;
                for(let i = 0; i<5-vidas; i++) {
                    document.getElementById("vidas").innerHTML += '<img src="public/images/gray-heart.png" alt="">';
                }
                document.getElementById("mensagem").innerHTML = "Você perdeu!";
                document.getElementById("adivinhar").disabled = true;
            }
        }
    } else {
        document.getElementById('mensagem').innerHTML = "Insira um valor dentro do limite!";
    }
}
