const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

function calcularFecha() {
    const dayInput = document.getElementById("day").value;
    const monthInput = document.getElementById("month").value;
    const yearInput = document.getElementById("year").value;
    
    const date = new Date(yearInput, monthInput - 1, dayInput);
    const dayIndex = date.getDay();

    const dayLabel = diasSemana[dayIndex];
    let message = "";

  switch (dayIndex) {
    case 0: case 6: 
      message = "No es dia laboral";
      break;
    default:
      message = "Es dia laboral";
      break;
    }
    const resultElement = document.getElementById('result');
    resultElement.value = `${dayLabel}, ${message}`
}
