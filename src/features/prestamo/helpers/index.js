/**
 * 
 * @param {*} principal 
 * @param {*} interestRate 
 * @param {*} loanTerm 
 * @param {*} paymentPeriod 
 * @returns 
 * La función toma cuatro argumentos: principal (el monto del préstamo), interestRate (la tasa de interés en porcentaje), loanTerm (la duración del préstamo en años) y paymentPeriod (el período de pago: "mensual", "quincenal", "semanal" o "diario"). La función usa un switch para seleccionar el cálculo correcto en función del período de pago y devuelve el pago correspondiente. Si se proporciona un período de pago que no está soportado, la función devuelve NaN.
 */
const calculateLoanPayments = (principal, interestRate, loanTerm, paymentPeriod) => {
    switch (paymentPeriod) {
        case 'mensual':
            return Math.ceil((principal * interestRate / 100 / 12) / (1 - Math.pow(1 + interestRate / 100 / 12, -loanTerm * 12)));
        case 'quincenal':
            return Math.ceil((principal * interestRate / 100 / 26) / (1 - Math.pow(1 + interestRate / 100 / 26, -loanTerm * 26)));
        case 'semanal':
            return Math.ceil((principal * interestRate / 100 / 52) / (1 - Math.pow(1 + interestRate / 100 / 52, -loanTerm * 52)));
        case 'diario':
            return Math.ceil((principal * interestRate / 100 / 365) / (1 - Math.pow(1 + interestRate / 100 / 365, -loanTerm * 365)));
        default:
            return NaN;
    }
}

/**
 * 
 * @param {*} startDate 
 * @param {*} paymentPeriod 
 * @param {*} loanTerm 
 * @param {*} paymentsMade 
 * @returns 
 * 
 * La función generateDueDates toma cuatro argumentos: startDate (la fecha en que comienza el préstamo), paymentPeriod (el período de pago: "mensual", "quincenal", "semanal" o "diario"), loanTerm (la duración del préstamo en años) y paymentsMade (el número de pagos realizados; se usa 0 por defecto). La función usa una función auxiliar llamada getInterval para determinar el número de días que deben transcurrir entre cada pago. La función generateDueDates devuelve una matriz de fechas de vencimiento formateadas como cadenas de fecha.
 * 
 */

const generateDueDates = (startDate, paymentPeriod, loanTerm, paymentsMade = 0) => {
    let dueDates = [];
    let currentDate = new Date(startDate);
    const interval = getInterval(paymentPeriod);

    for (let i = 0; i < loanTerm * getInterval(paymentPeriod) - paymentsMade; i++) {
        currentDate.setDate(currentDate.getDate() + interval);
        dueDates.push(currentDate.toLocaleDateString());
    }

    return dueDates;
}

function getInterval(paymentPeriod) {
    switch (paymentPeriod) {
        case 'mensual':
            return 12;
        case 'quincenal':
            return 26;
        case 'semanal':
            return 52;
        case 'diario':
            return 365;
        default:
            return NaN;
    }
}

/**
 * 
 * @param {*} principal 
 * @param {*} interestRate 
 * @param {*} loanTerm 
 * @param {*} paymentPeriod 
 * @param {*} startDate 
 * @returns 
 * 
 * La función generateLoanSchedule toma cinco argumentos: principal (el monto del préstamo), interestRate (la tasa de interés en porcentaje), loanTerm (la duración del préstamo en años), paymentPeriod (el período de pago: "mensual", "quincenal", "semanal" o "diario") y startDate (la fecha en que comienza el préstamo). La función usa las funciones calculateLoanPayments y generateDueDates para calcular el pago y las fechas de vencimiento, respectivamente. La función devuelve una matriz de objetos, donde cada objeto representa un pago y contiene los campos dueDate, payment, interest y balance.
 * 
 */

const generateLoanSchedule = (principal, interestRate, loanTerm = 1, paymentPeriod, startDate) => {
    const payment = calculateLoanPayments(principal, interestRate, loanTerm, paymentPeriod);
    const dueDates = generateDueDates(startDate, paymentPeriod, loanTerm);
    let balance = principal;
    let schedule = [];

    for (let i = 0; i < dueDates.length; i++) {
        let interest = balance * interestRate / 100 / getInterval(paymentPeriod);
        balance -= payment - interest;
        schedule.push({ dueDate: dueDates[i], payment, interest, balance });
    }

    return schedule;
}


/**
 * 
 * @param {*} loanTerm 
 * @param {*} paymentPeriod 
 * @returns 
 * 
 * La función getNumberOfPayments toma dos argumentos: loanTerm (la duración del préstamo en años) y paymentPeriod (el período de pago: "mensual", "quincenal", "semanal" o "diario"). La función usa la función auxiliar getInterval para calcular el número de intervalos en un año y devuelve la multiplicación de loanTerm por el número de intervalos por año. Esto te da el número total de pagos necesarios para pagar el préstamo.
 */

const getNumberOfPayments = (loanTerm = 1, paymentPeriod) => {
    return loanTerm * getInterval(paymentPeriod);
}


const calculateNumberOfPayments = (principal, interestRate, paymentAmount, paymentPeriod) => {
    const totalAmount = calculateLoanAmount(principal, interestRate);
    return Math.ceil(totalAmount / paymentAmount);
}
const calculateLoanAmount = (principal, interestRate) => {
    const interest = principal * (interestRate / 100);
    return principal + interest;
}



export {
    calculateLoanPayments,
    generateDueDates,
    generateLoanSchedule,
    getInterval,
    getNumberOfPayments,
    calculateNumberOfPayments,
    calculateLoanAmount
}