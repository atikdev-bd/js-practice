function incToFit(inch) {

    const fit = parseInt(inch / 12);
    const remainingInch = inch % 12;
    const finalResult = fit + " " + "fit" + ' ' + remainingInch + " " + "inch"

    console.log(finalResult)


}



incToFit(72)
