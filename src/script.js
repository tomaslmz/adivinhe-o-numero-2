var vidas = 5;
var limite = 10;
var numerosecreto = parseInt(Math.random() * (limite - 0) + 0);

document.addEventListener("keypress", (e) => {
    if(e.key === 'Enter') {
        if(document.getElementById("adivinhar").disabled == false) {
            adivinhar(document.getElementById("adivinhar").value);
        }
    }
})  

if(localStorage.getItem("theme") == "dark") {
    document.getElementById("body").style.backgroundColor = "rgb(20, 20, 29)";
    document.getElementById("dica").style.backgroundColor = "rgb(32, 32, 46)";
    document.getElementById("dica").style.color = "white";
    document.querySelector(".adivinhar").style.backgroundColor = "rgb(32, 32, 46)";
    document.querySelector(".info").style.backgroundColor = "rgb(32, 32, 46)";
    document.querySelector("main").style.backgroundColor = "rgb(20, 20, 29)";
    document.querySelector(".info").style.color = "white";
    document.getElementById("numero").style.backgroundColor = "rgb(32, 32, 46)";
    document.getElementById("numero").style.color = "white";
    document.getElementById("body").style.backgroundImage = "linear-gradient(to top, #0e1e31, #000000)";
    document.getElementById("btn-tema").innerHTML = "Modo claro";
    
} else {
    document.getElementById("body").style.backgroundColor = "white";
    document.querySelector("main").style.backgroundColor = "white"
    document.getElementById("numero").style.backgroundColor = "white";
    document.getElementById("btn-tema").innerHTML = "Modo escuro";
}

const adivinhar = (numero) => {
    if(numero >= 0 && numero <= limite) {
        document.getElementById("adivinhar").value = '';
        if(numero == numerosecreto) {
            document.getElementById("dica").innerHTML = '';
            if(vidas >= 5) {
                vidas++;
            } else {
                vidas = 5;
            }
            document.getElementById("mensagem").style.color = "green";
            document.getElementById("mensagem").innerHTML = "Você acertou!";
            document.getElementById("vidas").innerHTML = '';
            for(let i = 0; i<vidas; i++) {
                if(i >= 5) {
                    document.getElementById("vidas").innerHTML += '<img src="public/images/yellow-heart.png" alt="">';
                } else {
                    document.getElementById("vidas").innerHTML += '<img src="public/images/red-heart.png" alt="">';
                }
            }

            document.getElementById("numero").innerHTML = numerosecreto;
            
            setTimeout(() => {
                limite+=10;
                document.getElementById("fases").innerHTML = "Fase " + limite/10 + " (0 - " + limite + ")";
                document.getElementById("numero").innerHTML = '?';
                document.getElementById("mensagem").innerHTML = "";
                numerosecreto = parseInt(Math.random() * (limite - 0) + 0);
                document.getElementById('btn-adivinhar').disabled = false;
            }, 5000);

            document.getElementById('btn-adivinhar').disabled = true;
            
        } else {
            if(vidas > 1) {
                vidas--;
                document.getElementById("vidas").innerHTML = '';
                
                for(let i = 0; i<vidas; i++) {
                    document.getElementById("vidas").innerHTML += '<img src="public/images/red-heart.png" alt="">';
                }

                for(let i = 0; i<5-vidas; i++) {
                    if(vidas < 5) {
                        document.getElementById("vidas").innerHTML += '<img src="public/images/gray-heart.png" alt="">';
                    }
                }

                if(numero > numerosecreto) {
                    document.getElementById("dica").innerHTML += '<p class="msg-dica">' + numero + ' > ?</p>';
                } else {
                    document.getElementById("dica").innerHTML += '<p class="msg-dica">' + numero + ' < ?</p>';
                }
                
                document.getElementById("mensagem").style.color = "red";
                document.getElementById("mensagem").innerHTML = "Você errou!"
            }  else {
                document.getElementById('btn-reiniciar').style.display = "block";
                document.getElementById("vidas").innerHTML = ''
                vidas--;
                for(let i = 0; i<5-vidas; i++) {
                    document.getElementById("vidas").innerHTML += '<img src="public/images/gray-heart.png" alt="">';
                }
                document.getElementById("mensagem").style.color = "red";
                document.getElementById("mensagem").innerHTML = "Você perdeu!";
                document.getElementById("numero").innerHTML = numerosecreto;
                document.getElementById("adivinhar").disabled = true;
                document.getElementById("btn-adivinhar").disabled = true;
            }
        }
    } else {
        document.getElementById('mensagem').innerHTML = "Insira um valor dentro do limite!";
    }
}

const reiniciar = () => {
    document.getElementById('btn-reiniciar').style.display = "none";
    vidas = 5;
    limite = 10;
    numerosecreto = parseInt(Math.random() * (limite - 0) + 0);

    document.getElementById("dica").innerHTML = '';
    document.getElementById("fases").innerHTML = "Fase " + limite/10 + " (0 - " + limite + ")";
    document.getElementById("numero").innerHTML = '?';
    document.getElementById("mensagem").innerHTML = "";
    document.getElementById("adivinhar").disabled = false;
    document.getElementById("btn-adivinhar").disabled = false;
    document.getElementById("vidas").innerHTML = '';
    for(let i = 0; i<vidas; i++) {
        if(i >= 5) {
            document.getElementById("vidas").innerHTML += '<img src="public/images/yellow-heart.png" alt="">';
        } else {
            document.getElementById("vidas").innerHTML += '<img src="public/images/red-heart.png" alt="">';
        }
    }
}

const mudarTema = () => {
    if(document.querySelector("main").style.backgroundColor == "white" || document.querySelector("main").style.backgroundColor == "") {
        document.getElementById("body").style.backgroundImage = "linear-gradient(to top, #0e1e31, #000000)";
        document.getElementById("dica").style.backgroundColor = "rgb(32, 32, 46)";
        document.querySelector("main").style.backgroundColor = "rgb(20, 20, 29)"
        document.getElementById("dica").style.color = "white";
        document.querySelector(".adivinhar").style.backgroundColor = "rgb(32, 32, 46)";
        document.querySelector(".info").style.backgroundColor = "rgb(32, 32, 46)";
        document.querySelector(".info").style.color = "white";
        document.getElementById("numero").style.backgroundColor = "rgb(32, 32, 46)";
        document.getElementById("numero").style.color = "white";
        localStorage.setItem("theme", "dark");
        document.getElementById("btn-tema").innerHTML = "Modo claro";
    } else {
        document.getElementById("body").style.backgroundImage = "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(179,174,174,1) 0%, rgba(223,213,213,1) 50%)";
        document.getElementById("dica").style.backgroundColor = "white";
        document.querySelector("main").style.backgroundColor = "white";
        document.getElementById("dica").style.color = "black";
        document.querySelector(".adivinhar").style.backgroundColor = "white";
        document.querySelector(".info").style.backgroundColor = "white";
        document.querySelector(".info").style.color = "black";
        document.getElementById("numero").style.backgroundColor = "white";
        document.getElementById("numero").style.color = "black";
        localStorage.setItem("theme", "white");
        document.getElementById("btn-tema").innerHTML = "Modo escuro";
    }
}