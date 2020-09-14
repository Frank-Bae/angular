// This is a shortcut that gives us properties with the name we specified and
// it will automatically assign the values we received in the constructor to the newly created propeties
export class Ingredient {
  constructor(public name: string, public amount: number) { }
}
