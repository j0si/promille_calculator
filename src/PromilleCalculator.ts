type Sex = "f" | "m"

export class PromilleCalculator {
    
    // Function to calculate the amount of pure alcohol in gramm, 
    // given the ml and percentage
    public static getGrammPureAlcohol (ml:number, percent:number) {
        return ml * ( percent / 100 ) * 0.8
    }

    // Reductionfactor r from Seidl et al.
    // bodyweight in kg, height in cm
    public static getSeidlReductionFactor (bodyweight:number, height:number, sex:Sex) {
        if (sex === "f")
            return 0.31223 - 0.006446 * bodyweight + 0.004466 * height
        if (sex === "m")
            return 0.31608 - 0.004821 * bodyweight + 0.004432 * height
        else
            return 1
    }

    // Calculates the Widmark Formular, given amount on pure alcohol in g,
    // bodyweight in kg and gender (f/m)
    public static getWidmarkFormula (alc:number, bodyweight:number, height:number, sex:Sex) {
        return alc / (bodyweight * this.getSeidlReductionFactor(bodyweight, height, sex)) 
    }

    // Resorptiondeficit is calculated because not all of the alcohol consumed is transferred
    // into the bloodstream. In this example we assume a resobrtionrate of 15%
    public static resorbtionDeficit (promille:number) {
        return promille - (promille * 15 / 100)
    }
    
    // Hourly decline of alcohol in blood, promille in promille and time in hours 
    // We assume a decline of 0.15 promille per hour
    public static hourlyDecline (promille:number, time:number) {
        return promille - time * 0.15
    }


    // Combines all the functions above to get promille
    public static howDrunkAmI (bodyweight:number, height:number, sex:Sex, time:number, alc:number) {
        // Calculates Widkmark Formula 
        var widmark = this.getWidmarkFormula(alc, bodyweight, height, sex)
        // Value after applying resorbtionDeficit
        var afterdeficit = this.resorbtionDeficit(widmark)
        // Final result after hourlyDecline
        var result = this.hourlyDecline(afterdeficit, time)

        console.log(`You have an estimated promille count of:  ${result}`);
        return result
    }
}

