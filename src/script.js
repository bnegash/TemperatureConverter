console.log('Welcome to 🌡️ Temperature Converter');

const tempLoad = () => {
    let fa = document.getElementById('fa');
    fa.innerHTML = "&#xf2cb";
    fa.style.color = "#ffa41b";

    setTimeout(() => {
        fa.innerHTML = "&#xf2ca;";
        fa.style.color = "#ffa41b";
    }, 1000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c9;";
    }, 2000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c8;";
    }, 3000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c7;";
        fa.style.color = "#ff5151";
    }, 4000)
}

setInterval(() => {
    fa.style.color = "#ffa41b";
    tempLoad();
}, 5000);


tempLoad();

/**
 * Function to convert Celsius to Fahrenheit and Kelvin
 * @param inputDegreeValue
 * @param conversionDegreeType
 * @returns {string}
 */
const celToFaAndKe = (inputDegreeValue, conversionDegreeType) => {
    let temp = '';
    if(conversionDegreeType === 'C'){
        temp = inputDegreeValue;
    }else if (conversionDegreeType === 'F'){
        temp = (inputDegreeValue * (9 / 5) + 32);
    }else if (conversionDegreeType === 'K'){
        temp = (inputDegreeValue + 273.15);
    }
    return temp;

}

/**
 * Function to convert Fahrenheit to Celsius and Kelvin
 * @param inputDegreeValue
 * @param conversionDegreeType
 * @returns {string}
 */
const faToCelAndKe = (inputDegreeValue, conversionDegreeType) => {
    let temp = '';
    if(conversionDegreeType === 'F'){
        temp = inputDegreeValue;
    }else if (conversionDegreeType === 'C'){
        temp = (inputDegreeValue - 32) * (5 / 9);
    }else if (conversionDegreeType === 'K') {
        temp = (inputDegreeValue - 32) * (5 / 9) + 273.15;
    }
    return temp;
}


/**
 * Function to convert Kelvin to Fahrenheit and Celsius
 * @param inputDegreeValue
 * @param conversionDegreeType
 * @returns {string}
 */
const kelvinToFaAndCel = (inputDegreeValue, conversionDegreeType) => {
    let temp = '';
    if(conversionDegreeType === 'K'){
        temp = inputDegreeValue;
    }else if (conversionDegreeType === 'F'){
        temp = (inputDegreeValue - 273.15) * (9 / 5) + 32;
    }else if (conversionDegreeType === 'C'){
        temp = (inputDegreeValue - 273.15);
    }
    return temp;
}

/**
 * Event Handler for form submission
 * On Form submission prevent the default action and call the function to update the result
 */
$('form').submit(function (event) {
    event.preventDefault(); // to prevent the default action
    convertInputDegree()
});


/**
 * Function to convert the input degree based on the selected conversion type and update the result
 * @returns {*|jQuery}
 */
const convertInputDegree = () => {
    let inputDegree = parseInt($(`#inputDegree`).val()); // Get the input degree value and convert it to an integer
    let selectInputDegreeType = $(`#selectInputDegreeType`).val(); // Get the selected input degree type
    let conversionType = $(`#selectConversionType`).val(); // Get the selected conversion type


    let resultValue = "";

    // Perform the appropriate conversion based on the selected input degree type and conversion type
    if(selectInputDegreeType === 'C'){
        resultValue = celToFaAndKe(inputDegree,conversionType);
    }else if (selectInputDegreeType === 'F'){
        resultValue = faToCelAndKe(inputDegree,conversionType);
    }else if (selectInputDegreeType === 'K'){
        resultValue = kelvinToFaAndCel(inputDegree,conversionType);
    }

    // Prevent a NaN value
    if(isNaN(inputDegree)){
        $(`#convertedDegree`).text('');
        return;
    }

    // Update the Degree unit
    $(`#convertedUnit`).text(conversionType);

    // Update the Degree value
    if(conversionType === selectInputDegreeType){
        $(`#convertedDegree`).text(inputDegree);
    }else{
        return $(`#convertedDegree`).text(resultValue.toFixed(2));
    }

    // Realtime Update
    $('#inputDegree').on('input', () => convertInputDegree());
    $('#selectInputDegreeType').change(() => convertInputDegree());
    $('#selectConversionType').change(() => convertInputDegree());
}
