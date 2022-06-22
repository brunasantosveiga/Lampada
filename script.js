const botao = document.querySelector('#botao');
function trocar() {
    const lampada = document.querySelector('#lampada');
    console.log(lampada.src);
    if (lampada.src !== 'http://127.0.0.1:5502/images/quebrada.jpg') {
        if (lampada.src == 'http://127.0.0.1:5502/images/desligada.jpg') {
            lampada.src = './images/ligada.jpg';
            botao.textContent = 'Desligar';
        } else {
            lampada.src = './images/desligada.jpg';
            botao.textContent = 'Ligar';
        }
    }
};
function mouseOver() {
    if (lampada.src !== 'http://127.0.0.1:5502/images/quebrada.jpg') {
        lampada.src = './images/ligada.jpg';
        botao.textContent = 'Desligar';
    };
};
function mouseLeave() {
    if (lampada.src !== 'http://127.0.0.1:5502/images/quebrada.jpg') {
        lampada.src = './images/desligada.jpg';
        botao.textContent = 'Ligar';
    }
}
function doubleClick() {
    lampada.src = './images/quebrada.jpg';
};
botao.addEventListener('click', trocar);
lampada.addEventListener('mouseover', mouseOver);
lampada.addEventListener('mouseleave', mouseLeave);
lampada.addEventListener('dblclick', doubleClick);

