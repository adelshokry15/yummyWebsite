import { Details } from "./details.module.js";
import { Display } from "./display.module.js";
import { SearchPage } from "./searchPage.module.js";
import { Categories } from "./categoriesPage.module.js";
import { Area } from "./areaPage.module.js";
import { Ingredients } from "./ingredientsPage.module.js";
import { Contact } from "./contact.module.js";

export class Yummy {
  constructor() {
    this.display = new Display();

    $(document).ready(() => {
      this.getMeals();
      $(".loading-screen").fadeOut(500, () => {
        $(".loading-screen").removeClass("d-flex");
      });

      this.closeSideNav();
    });
    this.categories = new Categories();
    this.contact = new Contact();

    this.area = new Area();
    this.details = new Details();

    this.search = new SearchPage();
    this.ingredients = new Ingredients();
    $("li.search").click(() => {
      this.search.displaySearchBars();
      this.closeSideNav();
    });
    $("li.categories").click(() => {
      this.categories.getCategories();
      this.closeSideNav();
      $(".search-bars").html("");
    });
    $("li.area").click(() => {
      this.area.getAreas();
      this.closeSideNav();
      $(".search-bars").html("");
    });
    $("li.ing").click(() => {
      this.ingredients.getIngredients();
      this.closeSideNav();
      $(".search-bars").html("");
    });
    $("li.contact").click(() => {
      this.contact.displayContact();
      this.closeSideNav();
      $(".search-bars").html("");
    });
    $(document).keyup((e) => {
      if (e.target.classList.contains("search-name")) {
        this.search.searchByName(e.target.value);
      } else if (e.target.classList.contains("search-letter")) {
        this.search.searchByLetter(e.target.value);
      }
    });
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("cat-click")) {
        this.categories.getMealCategories(
          $(e.target).parents(".category").attr("data-cat")
        );
      }
    });
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("place")) {
        this.area.getMealsAreas($(e.target).attr("data-a"));
      }
    });
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("ingredient-click")) {
        this.ingredients.getMealsIngredients(
          $(e.target).attr("data-i").split(" ").join("_")
        );
      }
    });

    $(".sideNav i.open-close-icon").on("click", () => {
      if ($(".sideNav").css("left") == "0px") {
        this.closeSideNav();
      } else {
        this.openSideNav();
      }
    });
  }
  getMeals() {
    this.display.getFirstPage();
    this.fetchDetails();
  }

  fetchDetails() {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("meal-layer")) {
        this.display.fetchDetails($(e.target).parent().attr("data-id"));
        $(".search-bars").html("");
      }
    });
  }
  async searchByName() {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=ab`
    );
    response = await response.json();

    console.log(response);
  }
  openSideNav() {
    $(".sideNav").animate(
      {
        left: 0,
      },
      500
    );

    $(".open-close-icon").removeClass("fa-align-justify");
    $(".open-close-icon").addClass("fa-x");

    for (let i = 0; i < 5; i++) {
      $(".sideLinks li")
        .eq(i)
        .animate(
          {
            top: 0,
          },
          (i + 5) * 100
        );
    }
  }
  closeSideNav() {
    let boxWidth = $(".sideNav .linksContainer").outerWidth();
    $(".sideNav").animate(
      {
        left: -boxWidth,
      },
      500
    );

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");

    $(".sideLinks li").animate(
      {
        top: 300,
      },
      500
    );
  }
}
