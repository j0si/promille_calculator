import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { PromilleCalculator } from "./PromilleCalculator.ts"

Deno.test("testing of functions", async () => {
    assertEquals(PromilleCalculator.howDrunkAmI(81, 185, "m", 3, 100), 5);
    assertEquals(PromilleCalculator.getGrammPureAlcohol(500, 5), 20);
    assertEquals(PromilleCalculator.getSeidlReductionFactor(70, 175, "m"), 0.75421);
    assertEquals(PromilleCalculator.resorbtionDeficit(1.5), 1.275);
    assertEquals(PromilleCalculator.hourlyDecline(1.5, 3), 1.05);
})
