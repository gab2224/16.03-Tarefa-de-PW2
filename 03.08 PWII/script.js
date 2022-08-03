function limparEstilo(){
    $('h1').removeClass('StyleOne')
    $('h1').removeClass('StyleTwo')
    $('h1').removeClass('StyleThree')
    $('p').removeClass('StyleOne')
    $('p').removeClass('StyleTwo')
    $('p').removeClass('StyleThree')
}

$(document).ready(function(){
    $('#styleOne').click(function(e){
        e.preventDefaut()
        limparEstilo()
        // Selecionar o h1 e p e aplicar o estilo
        $('h1').addClass('styleOne')
        $('p').addClass('styleOne')
    })
    $('#styleTwo').click(function(e){
        e.preventDefaut()
        limparEstilo()
        // Selecionar o h1 e p e aplicar o estilo
        $('h1').addClass('styleOne')
        $('p').addClass('styleOne')
    })
    $('#styleThree').click(function(e){
        e.preventDefaut()
        limparEstilo()
        // Selecionar o h1 e p e aplicar o estilo
        $('h1').addClass('styleOne')
        $('p').addClass('styleOne')
    })
})