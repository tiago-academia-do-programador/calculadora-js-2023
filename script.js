class CalculadoraView {
  gridTeclado = document.querySelector('.grid-teclado');
  inputResultado = document.getElementById('telaResultado');
  btnCalcular = document.getElementById('btnCalcular');
  btnLimpar = document.getElementById('btnLimpar');
  btnApagar = document.getElementById('btnApagar');

  constructor() {
    this.registrarEventos();
  }

  registrarEventos() {
    this.gridTeclado.childNodes.forEach(botao => {
      if (this.caracterePermitido(botao.textContent))
        botao.addEventListener('click', (e) => this.digitarCaractere(e));
    });
    
    btnLimpar.addEventListener('click', () => this.limpar());
    btnApagar .addEventListener('click', () => this.apagar());
    btnCalcular.addEventListener('click', () => this.calcular());
  }

  calcular() {
    const resultado = eval(this.inputResultado.value);
  
    this.inputResultado.value = resultado;
  }

  limpar() {
    this.inputResultado.value = '';
  }
  
  apagar() {
    const tamanhoString = this.inputResultado.value.length;
  
    const stringSubstituida = this.inputResultado.value.substring(0, tamanhoString - 1);
  
    this.inputResultado.value = stringSubstituida;
  }
  
  digitarCaractere(evento) {
    const letraClicada = evento.target.textContent;
  
    const caractereExiste = letraClicada.trim().length > 0;
    
    if (caractereExiste)
      this.inputResultado.value += letraClicada;
  }
  
  caracterePermitido(caractere) {
    return caractere != '=' && caractere != 'CE';
  }
}

window.addEventListener('load', () => new CalculadoraView());