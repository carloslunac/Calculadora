
var Calculadora = (function(){
  var valor1, valor2, resultado, signo, pantalla, signoAnterior, valor1Anterior, valor2Anterior;
  valor1='';
  valor2='';
  signo =null;
  resultado=0;
  valor1Anterior='';
  valor2Anterior='';
  signoAnterior =null;

  pantalla = document.getElementById( 'display' );

  document.getElementById( 'on' ).onmousedown = function Resetear(){
    valor1='';
    valor2='';
    signo =null;
    signoAnterior=null;
    resultado=0;
    pantalla.innerHTML = '0';
  }

  //---------------------------- punto--------------------------------
  document.getElementById( 'punto' ).onmousedown = function Decimal(){
    if (signo ==null) {
      if (valor1.length < 8) {
        if (valor1.indexOf('.') == -1){
        //valor1=valor1.toString() + '.'
        valor1=pantalla.innerHTML.toString() + '.'
        pantalla.innerHTML = valor1;
        }
      }
    }else {
      if (valor2.length < 8) {
        if (valor2.indexOf('.') == -1){
        //valor2=valor2.toString() + '.'
        valor2=pantalla.innerHTML.toString() + '.'
        pantalla.innerHTML = valor2;
        }
      }
    }
  }
  // ------------------negativo,positivo---------------------------
  document.getElementById( 'sign' ).onmousedown = function Signo(){
    if (pantalla.innerHTML!='0') {
        if (signo ==null || signo=='igual') {
          var Convertir = parseFloat(valor1) * -1
          valor1=Convertir.toString()
          pantalla.innerHTML = valor1;
        }else {
          var Convertir = parseFloat(valor2) * -1
          valor2=Convertir.toString()
          pantalla.innerHTML = valor2;
        }
      }
    }


  // -----------------------Numeros------------------------------
  document.getElementById( '0' ).onmousedown = function cero(){
    LimpiarVariables();

    if (signo ==null) {
      if (valor1.length < 8) {
        if (pantalla.innerHTML != '0') {
          valor1=valor1.toString() + '0'
          pantalla.innerHTML = valor1;
        }
      }
    }else{
      if (valor2.length < 8) {
        if (pantalla.innerHTML != '0') {
          valor2=valor2.toString() + '0'
          pantalla.innerHTML = valor2;
        }
      }
    }
  }
  document.getElementById( '1' ).onmousedown = function uno(){
    LimpiarVariables();

    if (signo ==null) {
      if (valor1.length < 8) {
        valor1=valor1.toString() + '1'
        pantalla.innerHTML = valor1;
      }
    }else{
      if (valor2.length < 8) {
        valor2=valor2.toString() + '1'
        pantalla.innerHTML = valor2;
      }
    }
  }
  document.getElementById( '2' ).onmousedown = function dos(){
    LimpiarVariables();

    if (signo ==null) {
      if (valor1.length < 8) {
        valor1=valor1.toString() + '2'
        pantalla.innerHTML = valor1;
      }
    }else{
      if (valor2.length < 8) {
        valor2=valor2.toString() + '2'
        pantalla.innerHTML = valor2;
      }
    }
  }
  document.getElementById( '3' ).onmousedown = function tres(){
    LimpiarVariables();

    if (signo ==null) {
      if (valor1.length < 8) {
        valor1=valor1.toString() + '3'
        pantalla.innerHTML = valor1;
      }
    }else{
      if (valor2.length < 8) {
        valor2=valor2.toString() + '3'
        pantalla.innerHTML = valor2;
      }
    }
  }
  document.getElementById( '4' ).onmousedown = function cuatro(){
    LimpiarVariables();

    if (signo ==null) {
      if (valor1.length < 8) {
        valor1=valor1.toString() + '4'
        pantalla.innerHTML = valor1;
      }
    }else{
      if (valor2.length < 8) {
        valor2=valor2.toString() + '4'
        pantalla.innerHTML = valor2;
      }
    }
  }
  document.getElementById( '5' ).onmousedown = function cinco(){
    LimpiarVariables();

      if (signo ==null) {
        if (valor1.length < 8) {
          valor1=valor1.toString() + '5'
          pantalla.innerHTML = valor1;
        }
      }else{
        if (valor2.length < 8) {
          valor2=valor2.toString() + '5'
          pantalla.innerHTML = valor2;
        }
      }
    }
    document.getElementById( '6' ).onmousedown = function seis(){
      LimpiarVariables();

      if (signo ==null) {
        if (valor1.length < 8) {
          valor1=valor1.toString() + '6'
          pantalla.innerHTML = valor1;
        }
      }else{
        if (valor2.length < 8) {
          valor2=valor2.toString() + '6'
          pantalla.innerHTML = valor2;
        }
      }
  }

  document.getElementById( '7' ).onmousedown = function siete(){
    LimpiarVariables();

    if (signo ==null) {
      if (valor1.length < 8) {
        valor1=valor1.toString() + '7'
        pantalla.innerHTML = valor1;
      }
    }else{
      if (valor2.length < 8) {
        valor2=valor2.toString() + '7'
        pantalla.innerHTML = valor2;
      }
    }

  }

  document.getElementById( '8' ).onmousedown = function ocho(){
    LimpiarVariables();

    if (signo ==null) {
      if (valor1.length < 8) {
        valor1=valor1.toString() + '8'
        pantalla.innerHTML = valor1;
      }
    }else{
      if (valor2.length < 8) {
        valor2=valor2.toString() + '8'
        pantalla.innerHTML = valor2;
      }
    }
  }

  document.getElementById( '9' ).onmousedown = function Nueve(){
    LimpiarVariables();

    if (signo ==null) {
      if (valor1.length < 8) {
        valor1=valor1.toString() + '9'
        pantalla.innerHTML = valor1;
      }
    }else{
      if (valor2.length < 8) {
        valor2=valor2.toString() + '9'
        pantalla.innerHTML = valor2;
      }
    }
  }
  // -------------------------Signos------------------------------
  document.getElementById( 'mas' ).onmousedown = function Sumar(){
        ValidarSignoYvalor2();
        signo='sumar'
        pantalla.innerHTML = '0';
  }
  document.getElementById( 'menos' ).onmousedown = function Menos(){
        ValidarSignoYvalor2();
        signo='restar'
        pantalla.innerHTML = '0';
  }
  document.getElementById( 'por' ).onmousedown = function Multiplicar(){
        ValidarSignoYvalor2();
        signo='multiplicar'
        pantalla.innerHTML = '0';
  }
  document.getElementById( 'dividido' ).onmousedown = function Dividir(){
        ValidarSignoYvalor2();
        signo='Dividir'
        pantalla.innerHTML = '0';
  }
  // -------------------------Resultado------------------------------
  document.getElementById( 'igual' ).onmousedown = function Resultado(){
    if (signo!=null && valor1!='' && valor2!='') {
      var numero1 = parseFloat(valor1);
      var numero2 = parseFloat(valor2);

      if (signo=='sumar') {
        resultado = parseFloat(numero1+numero2); //.toFixed(2)
      }

      if (signo=='restar') {
        resultado = parseFloat(numero1-numero2); //.toFixed(2)
      }

      if (signo=='multiplicar') {
        resultado = parseFloat(numero1*numero2); //.toFixed(2)
      }

      if (signo=='Dividir') {
        resultado = parseFloat(numero1/numero2); //.toFixed(2)
      }

      // este if sabe si el resultado es entero o tiene decimal
      if (resultado % 1 == 0) {
            pantalla.innerHTML = resultado.toString();
      } else {
          if (resultado.toString().length<9 ){
            resultado = parseFloat(resultado);
            pantalla.innerHTML = resultado.toString();
          }else{
            var tamanoResultado =resultado.toString().length;
            var decimales=resultado.toString().indexOf('.');
            var AsignarDecimales = 8 - parseFloat(decimales)-1
            if(AsignarDecimales>=0){resultado = parseFloat(resultado).toFixed(AsignarDecimales);}
            else{resultado = parseFloat(resultado).toFixed(0);}
            pantalla.innerHTML = resultado.toString();
          }
        }
        //
        if (resultado.toString().length>8){
          pantalla.innerHTML = resultado.toString().substring(0, 8);
        }

      valor1Anterior = valor2.toString();
      valor2Anterior = resultado.toString();
      valor1 = resultado.toString();
      valor2='';
      resultado =0;
      signoAnterior=signo;
      signo='igual';

    } else if (signo=='igual'){

      var numero1Anterior = parseFloat(valor1Anterior);
      var numero2Anterior = parseFloat(valor2Anterior);

      if (signoAnterior=='sumar') {
        resultado = parseFloat(numero1Anterior+numero2Anterior);
      }

      if (signoAnterior=='restar') {
        resultado = parseFloat(numero1Anterior-numero2Anterior);
      }

      if (signoAnterior=='multiplicar') {
        resultado = parseFloat(numero1Anterior*numero2Anterior);
      }

      if (signoAnterior=='Dividir') {
        resultado = parseFloat(numero1Anterior/numero2Anterior);
      }

      // este if sabe si el resultado es entero o tiene decimal
      if (resultado % 1 == 0) {
            pantalla.innerHTML = resultado.toString();
      } else {
          if (resultado.toString().length<9 ){
            resultado = parseFloat(resultado);
            pantalla.innerHTML = resultado.toString();
          }else{
            var tamanoResultado =resultado.toString().length;
            var decimales=resultado.toString().indexOf('.');
            var AsignarDecimales = 8 - parseFloat(decimales)-1
            if(AsignarDecimales>=0){resultado = parseFloat(resultado).toFixed(AsignarDecimales);}
            else{resultado = parseFloat(resultado).toFixed(0);}
            pantalla.innerHTML = resultado.toString();
          }
      }
        //
      if (resultado.toString().length>8){
        pantalla.innerHTML = resultado.toString().substring(0, 8);
      }
      valor2 = valor2Anterior.toString();
      valor1Anterior = valor2.toString();
      valor2Anterior = resultado.toString();
      valor1 = resultado.toString();
      valor2='';
      resultado =0;
      signo='igual';
    }
  }
  function LimpiarVariables(){
    if (pantalla.innerHTML == valor2Anterior && signo=='igual' ) {
      valor1='';
      valor2='';
      signo =null;
      resultado=0;
      valor1Anterior='';
      valor2Anterior='';
      signoAnterior =null;
    }
  }

  function ValidarSignoYvalor2(){
    if (signo=='sumar' || signo=='restar' ||signo=='multiplicar' || signo=='Dividir' ) {
      valor2=''
    }
  }
})();
