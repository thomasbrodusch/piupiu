import isCreditCardNumber from "@/validators/isCreditCardNumber";
import { nonStringValueCheck } from "../support";

describe("isCreditCardNumber", () => {
  it.each([
    [false, "112"],
    [false, "toto"],
    [false, "4816089253950821"],
    [false, "4816 0892 5395 0827"],
    [true, "4816089253950827"], //VISA
    [true, "5430455205894921"], //MasterCard
    [true, "371331832313571"], //AMEX
    ...nonStringValueCheck().map((nSv) => [false, nSv]),
  ])(
    "should return %s for isCreditCardNumber(%s)",
    (expected: boolean, input: string) => {
      expect(isCreditCardNumber(input)).toBe(expected);
    }
  );
});
