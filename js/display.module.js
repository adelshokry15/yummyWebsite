export class Display {
  async getFirstPage() {
    let res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    let data = await res.json();
    let firstPageMeals = data.meals.slice(0, 20);
    console.log(firstPageMeals);
    let cartona = "";
    for (let i = 0; i < firstPageMeals.length; i++) {
      cartona += `
      <div class="col-md-3">
              <div
                class="meal position-relative overflow-hidden rounded-2" data-id=${firstPageMeals[i].idMeal}
              >
                <img class="w-100" src="${firstPageMeals[i].strMealThumb}" alt="${firstPageMeals[i].strMeal}" />
                <div
                  class="meal-layer position-absolute top-100 start-0 d-flex align-items-center w-100 h-100 text-black p-2"
                >
                  <h3>${firstPageMeals[i].strMeal}</h3>
                </div>
              </div>
            </div>
      
      `;
      $(".firstPage .container .origin").html(cartona);
    }
  }
  async fetchDetails(term) {
    $(".inner-loading-screen").addClass("d-flex");
    $(".inner-loading-screen").fadeIn(300);
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${term}`
    );
    res = await res.json();
    console.log(res);
    this.showDetails(res);
    $(".inner-loading-screen").fadeOut(300, () => {
      $(".inner-loading-screen").removeClass("d-flex");
    });
  }
  showDetails(id) {
    let ingredients = ``;

    for (let i = 1; i <= 20; i++) {
      if (id.meals[0][`strIngredient${i}`]) {
        ingredients += `<li class="alert alert-info m-2 p-1">${
          id.meals[0][`strMeasure${i}`]
        } ${id.meals[0][`strIngredient${i}`]}</li>`;
      }
    }

    let tags = id.meals[0].strTags?.split(",");

    if (!tags) tags = [];

    let tagsStr = "";
    for (let i = 0; i < tags.length; i++) {
      tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`;
    }
    let cartona = `
            <div class="col-md-4">
              <img class="w-100" src=${id.meals[0].strMealThumb} alt=${id.meals[0].strMeal} />
              <h2 class="text-capitalize">${id.meals[0].strMeal}</h2>
            </div>
            <div class="col-md-8">
              <h2 class="text-capitalize">instructions</h2>
              <p>
                ${id.meals[0].strInstructions}
              </p>
              <h3 class="fw-bolder">
                Area : <span class="fw-medium">${id.meals[0].strArea}</span>
              </h3>
              <h3 class="fw-bolder">
                Category : <span class="fw-medium">${id.meals[0].strCategory}</span>
              </h3>
              <h3>Recipes :</h3>
              <ul class="ingredients list-unstyled d-flex flex-wrap">
              
                ${ingredients}
                
              </ul>
              <h3 class="fw-bolder">Tags :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
              ${tagsStr}
                
              </ul>
              <a
                target="_blank"
                href="${id.meals[0].strSource}"
                class="btn btn-success"
                >Source</a
              >
              <a
                target="_blank"
                href="${id.meals[0].strYoutube}"
                class="btn btn-danger"
                >Youtube</a
              >
            </div>
          `;
    $(".firstPage .container .origin").html(cartona);
  }
}
