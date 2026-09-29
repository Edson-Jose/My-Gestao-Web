// 1. Pegando as telas do HTML
const telaLogin = document.getElementById('tela-login');
const telaDashboard = document.getElementById('tela-dashboard');
const telaNovaVenda = document.getElementById('tela-nova-venda'); // Nova tela!

// 2. Pegando os botões do HTML
const btnEntrar = document.getElementById('btn-entrar');
const btnNovaVenda = document.getElementById('btn-nova-venda'); // Novo botão!
const btnVoltar = document.getElementById('btn-voltar'); // Novo botão de voltar!

// 3. Ação: Quando clicar em ENTRAR
btnEntrar.addEventListener('click', function() {
    telaLogin.classList.remove('visivel');
    telaLogin.classList.add('escondida');
    
    telaDashboard.classList.remove('escondida');
    telaDashboard.classList.add('visivel');
});

// 4. Ação: Quando clicar em REGISTRAR NOVA VENDA
btnNovaVenda.addEventListener('click', function() {
    // Esconde o dashboard
    telaDashboard.classList.remove('visivel');
    telaDashboard.classList.add('escondida');
    
    // Mostra a tela de nova venda
    telaNovaVenda.classList.remove('escondida');
    telaNovaVenda.classList.add('visivel');
});

// 5. Ação: Quando clicar em VOLTAR AO INÍCIO
btnVoltar.addEventListener('click', function() {
    // Esconde a tela de nova venda
    telaNovaVenda.classList.remove('visivel');
    telaNovaVenda.classList.add('escondida');
    
    // Mostra o dashboard de novo
    telaDashboard.classList.remove('escondida');
    telaDashboard.classList.add('visivel');
});

