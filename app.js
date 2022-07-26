//console.log('Aplicación Calculadora');

function sumar(){
    const formulario = document.getElementById('formulario');
    let numeroA = formulario['numeroA'];
    let numeroB = formulario['numeroB'];
    let resultado = parseFloat(numeroA.value) + parseFloat(numeroB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

function restar(){
    const formulario = document.getElementById('formulario');
    let numeroA = formulario['numeroA'];
    let numeroB = formulario['numeroB'];
    let resultado = parseFloat(numeroA.value) - parseFloat(numeroB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

function multiplicar(){
    const formulario = document.getElementById('formulario');
    let numeroA = formulario['numeroA'];
    let numeroB = formulario['numeroB'];
    let resultado = parseFloat(numeroA.value) * parseFloat(numeroB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

function dividir(){
    const formulario = document.getElementById('formulario');
    let numeroA = formulario['numeroA'];
    let numeroB = formulario['numeroB'];
    let resultado = parseFloat(numeroA.value) / parseFloat(numeroB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}
