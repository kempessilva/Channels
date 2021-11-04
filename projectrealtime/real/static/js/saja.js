var chatSocket = new WebSocket(
    'ws://'+ window.location.host +
    '/ws/chat/' + nome_sala + '/'
);

chatSocket.onmessage = function(e){
    var dados = JSON.parse(e.data);
    var mensagem = dados['mensagem'];
    document.querySelector('#sala').value += (mensagem + '\n');
};

chatSocket.onclose = function(e){
    console.error('O chat se encerrou.');
};

document.querySelector('#texto').focus();
document.querySelector('#texto').onkeyup = function(e){
    if(e.keyCode === 13){
        document.querySelector('#botao').click();
    }
};
document.querySelector('#botao').onclick = function(e){
    var mensagemInput = document.querySelector('#texto');
    var mensagem = mensagemInput.value;
    chatSocket.send(JSON.stringify({
        'mensagem': mensagem
    }));
    mensagemInput.value = '';
};


var socket = new WebSocket('ws://localhost:8000/ws/some_url/');
socket.onmessage = function(event){
    var data = JSON.parse(event.data);
    console.log(data);
    
    document.querySelector('#app').innerText = data.message;
}