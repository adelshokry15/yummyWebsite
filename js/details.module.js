import { Display } from "./display.module.js";
export class Details {
  constructor(id) {
    this.display = new Display();
  }
  async getDetails() {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
    );
    let product = await res.json();
    console.log(product);
    this.display.showDetails(product);
  }
}
