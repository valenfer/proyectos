

$(document).ready(function(){
 
    //Iniciamos valores de estilos al cargar la página
    
    $('.link_noticia').css('color', 'black'); //Color de los links de noticias
    $('#Expandir').hide();//Oculta el botón de expandir barra
    $('.texto').css('font-family', 'Verdana, sans-serif');//Cambia fuente del texto a Verdana
    $('#s_fuente').val('1');

    /*Codigo para agrandar texto y reducir imagen*/
    $('#Agrandar').on('click',function(){
        var tamanoFuente = parseInt($('.cuerpo_noticia .texto').css('font-size'));/* capturamos el tamaño en curso de la fuente*/
        if (tamanoFuente<20){/*Si la fuente aún no ha llegado al tamaño máximo*/
            $('.texto').css('font-size', (tamanoFuente + 1) + 'px'); /*Cambia el tamaño sumándole 1*/
            $('#historico').append('Agrandar - ');/*Imprime en el historial la acción*/
            /*Capturmaos el tamaño en curso de la imagen*/
            var ancho = parseInt($('.imagen').css('width'));
            var alto = parseInt($('.imagen').css('height'));
            /*Modificamos el tamaño restando 5px y se lo aplicamos a las propieddades css correspondientes*/
            $('.imagen').css('width', (ancho-5) + 'px');
            $('.imagen').css('height', (alto-5) + 'px');
            /* Modifica el texto de la barra indicando el tamaño del afuente en curso*/
            $('#infoTexto p:first').text('Font-size: ' + (tamanoFuente + 1) + 'px');//Selecciona el primer parrafo <p> de #infotexto
        }
    });

    /*Codigo para reducir texto y agrandar imagen*/
    $('#Reducir').on('click',function(){
        var tamanoFuente = parseInt($('.cuerpo_noticia .texto').css('font-size'));/* capturamos el tamaño en curso de la fuente*/
        if (tamanoFuente>14){/*Si la fuente aún no ha llegado al tamaño mínimo*/
            $('.texto').css('font-size', (tamanoFuente - 1) + 'px'); /*Cambia el tamaño restándole 1*/
            $('#historico').append('Reducir - ');/*Imprime en el historial la acción*/
            /*Capturmaos el tamaño en curso de la imagen*/
            var ancho = parseInt($('.imagen').css('width'));
            var alto = parseInt($('.imagen').css('height'));
            /*Modificamos el tamaño sumando 5px y se lo aplicamos a las propieddades css correspondientes*/
            $('.imagen').css('width', (ancho+5) + 'px');
            $('.imagen').css('height', (alto+5) + 'px');
            /* Modifica el texto de la barra indicando el tamaño del afuente en curso*/
            $('#infoTexto p:first').text('Font-size: ' + (tamanoFuente - 1) + 'px');
        }
    });

    //Codigo para el botón de modo oscuro
    $('#Oscuro').click(function() {
        $('.contenedor').toggleClass('modoOscuro'); /*Cambia los estilos del contenedor definidos en la clase modo oscuro*/
        $('#cabecera').toggleClass('modoOscuro'); /*Cambia los estilos de la cabecera definidos en la clase modo oscuro*/
        $('.navegacion').toggleClass('modoOscuro'); /*Cambia los estilos de menú definidos en la clase modo oscuro*/
        $('#pie').toggleClass('modoOscuro'); /*Cambia los estilos del pie definidos en la clase modo oscuro*/
        $('#historico').append('Modo oscuro - ');//Añade la acción al histórico
    });

    //Codigo para el botón de simplificar todas las noticias
    $('#Simplificada').on('click',function(){
        $(".contraer").each(function(index){//Genera un array con los elementos que tienen la clase contraer
            if ($(this).is(':visible')) {//Si el elemento en curso está visible
                $(this).slideUp();//Lo recoge ocultándolo
            } else {//Si no está visible
                $(this).slideDown();//Lo depliega visualizándolo
            }
        });
        $('#historico').append('Simplificar - ');
    });

    //Simplificar al pulsar en el título de las noticias 
    $('.titulo_noticia').on('click', function() {
        //var $this = $(this);
        var contraer = $(this).next('.contraer');//Capturamos el div que queremos contraer de la noticia clicada(El siguiente al elemento clicaco con clase .ocntraer)

        if (contraer.is(':visible')) {//Si está visible 
            contraer.slideUp();//La ocultamos
        } else {//Si está oculta
            contraer.slideDown();//La expandimos
        }
    });

    /* Codigo de cambio de fuentes de la noticia*/
    $('#s_fuente').change(function() {
        if ($(this).val() === '1') {//Si se ha seleccionado la opcion 1
            $('.texto').css('font-family', 'Verdana, sans-serif');//Cambia la fuente a Verdana
        } else if ($(this).val() === '2') {//Si se ha seleccionado la opcion 2
            $('.texto').css('font-family', 'fuenteLocal');//Cambia la fuente a la fuente local conficurada con @fontface
        } else if ($(this).val() === '3') {//Si se ha seleccionado la opcion 3
            $('.texto').css('font-family', 'Righteous, sans-serif');//Cambia la fuente a la enlazada por internet
        }
        $('#historico').append('Cambiar fuente - ');
    });
 
    //Codigo del botón de última hora ************************ Pendiente ************************************
    $('#UltimaHora').on('click', function(){
        
        //Insertamos contenido de la última noticia
        var contenido='<div class="noticia" id="Ultima_noticisa"><h2 class="texto titulo_noticia">LA MANCHA SOLAR GIGANTE QUE PODRÍA DESCARGAR UNA PODEROSA LLAMARADA SOBRE LA TIERRA</h2><div class="contraer"><div class="cuerpo_noticia"><p class="texto">Los astrónomos de medio mundo no le quitan ojo a la bautizada como AR3310, una descomunal mancha solar que es cuatro veces más grande que la Tierra y que se puede ver a simple vista (siempre con gafas de eclipse y precaución) desde hace ya varios días.<a target="_blank" href="https://www.elmundo.es/ciencia-y-salud/ciencia/2023/05/25/646f02bf21efa0eb4f8b456e.html">Enlace a la noticia</a></p></div><div class="imagen_noticia"><img class="imagen" src="./img/sol.jpg" alt="Imagen de la noticia"><p class="licencia">Imagen de <a href="https://pixabay.com/es/users/wikiimages-1897/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=11120">WikiImages</a> en <a href="https://pixabay.com/es//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=11120">Pixabay</a></p></div></div></div>';
        $('#noticias').append(contenido);
        //Insertamos el título
        var titulo='<li><a class="linkNoticia" href="#noticia_4">Última noticia</a></li>'
        $('.navegacion ul').append(titulo);



    });
       
        

    //Codigo del boton ocultar y mostrar barra
    $('#Ocultar').click(function() {
        $('.barra_botones > *').hide();//Selecccionamos todos los elementos de la barra de botones y los ocultamos
        $('#infoTexto').hide();//Oculta la barra de información sobre el tamaño del texto
        $('#Expandir').show(); //Mostramos el botón de expandir la barra
        $('.barra').css('width', 'fit-content');//El ancho de la barra se ajusta al contenido visible que en este caso el el botón de Expandir
        $('#historico').append('Ocultar barra - ');
    });
    $('#Expandir').click(function() {
        $('.barra_botones > *').show();//Selecccionamos todos los elementos de la barra de botones y los mostramos
        $('#infoTexto').show();//muestra la barra de información sobre el tamaño del texto
        $('.barra').css('width', 100+'%');//El ancho de la barra se ajusta al 100% de la pantalla
        $('#historico').append('Mostrar barra - ');
        $(this).hide();//Oculta el botón de expandir barra
    });

   

    /*Codigo de resetar la página*/
    $('#Reset').on('click',function(){
        //Devuelve estilo de cabecera a los originales
        $('#cabecera').css('color', 'black');
        $('#cabecera').css('background-color', 'white');
        //Devuelve estilo de navegación a los originales
        $('.linkNoticia').css('color', 'black');
        $('.navegacion').css('background-color', 'white');
        $('.texto').css('font-family', 'Verdana, sans-serif');//Cambia fuent del texto a Verdana
        $('#s_fuente').val('1');//Vuelve a seleccionar la opción Verdana de la lista de selección
        $('.contenedor').css('background-color', 'white');//Devuelve fondo blanco
        $('.texto').css('color', 'black');//Devuielve texto en negro
        $('.texto').css('font-size', 14 + 'px');//Tamaño del texto a 14px
        $('#infoTexto p:first').text('Font-size: 14px');//Actualiza el primer parrafo <p> de #infotexto
        $('.titulo_noticia').css('font-size', 16 + 'px');//Tamaño del titulo de las noticias a 16px
        $('#pie').css('background-color', 'white');//Fondo del pie a blanco
        $('#pie').css('color', 'black');//Texto del pie a negro
        $('.contraer').slideDown();//Abre el contenido de las noticias si estuviese oculto
        $('.imagen').css('width', 100 + 'px');//Pone ancho de imagenes al original
        $('.imagen').css('height', 'auto');//Pone alto de imagenes al original
        $('#historico').empty();//Vacia el contenido del historico
    }); 

    /*Codigo que cambia estilo de menu de navegacion*/
    $('.linkNoticia').on('click',function(){
        $('.linkNoticia').css('color', '');//Limpia estilos modificados
        $(this).css('color', 'red');//Pone en rojo el texto del elemento seleccionado
    });
});
