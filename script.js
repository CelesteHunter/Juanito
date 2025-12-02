const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");

// Botão "não" fugindo
botaoNao.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.8;
    botaoNao.style.left = x + "px";
    botaoNao.style.top  = y + "px";
});

// Botão SIM → aparece confete + fotos
botaoSim.addEventListener("click", () => {
    confetti();

    const img = document.createElement("img");
    img.src = "foto.jpg"; // depois vamos trocar pela sua foto real
    img.style.width = "300px";
    img.style.marginTop = "20px";

    document.body.appendChild(img);
});
