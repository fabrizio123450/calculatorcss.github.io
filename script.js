let form = document.getElementById('calculadora');
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const colores = document.getElementsByClassName('colores')
CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
});
///https://www.merckmanuals.com/medical-calculators/MaintenanceFluidChildren-es.htm
function calcFlujo(peso){
    console.log("primero "+peso);
    let flujo = 0;
    if (peso>20){
        let aux = peso-20;
        console.log(aux);
        flujo += aux*1;
        console.log(flujo);
        peso -= aux;
        console.log(peso);
    } 
    if (peso>=10){
        let aux = peso-10;//15-10 = 5
        
        flujo += aux*2;//5*2 = 10

        flujo*=100;//primeros 10= 1000
        aux*=50;//sgte de 10 5*50 = 250
        
        flujo= (flujo +aux)/24
        console.log("MI RESULTADO " + flujo);
    }
    
    return flujo;
}

