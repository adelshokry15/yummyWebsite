export class Area {
  async getAreas() {
    $(".inner-loading-screen").addClass("d-flex");
    $(".inner-loading-screen").fadeIn(300);
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    res = await res.json();
    this.displayAreas(res);
    $(".inner-loading-screen").fadeOut(300, () => {
      $(".inner-loading-screen").removeClass("d-flex");
    });
  }
  displayAreas(areas) {
    let cartona = ``;
    let data = areas.meals;
    for (let i = 0; i < data.length; i++) {
      cartona += `
        <div class="col-md-3">
              <div class="place text-center" data-a=${data[i].strArea}>
                <i class="place fa-solid fa-house-laptop fa-4x" data-a=${data[i].strArea}></i>
                <h3 class="place text-capitalize" data-a=${data[i].strArea}>${data[i].strArea}</h3>
              </div>
            </div>
        `;
      $(".firstPage .container .origin").html(cartona);
      $(".inner-loading-screen").fadeOut(300, () => {
        $(".inner-loading-screen").removeClass("d-flex");
      });
    }
  }
  async getMealsAreas(area) {
    $(".inner-loading-screen").addClass("d-flex");
    $(".inner-loading-screen").fadeIn(300);
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );
    res = await res.json();
    this.displayMealsAreas(res);
    $(".inner-loading-screen").fadeOut(300, () => {
      $(".inner-loading-screen").removeClass("d-flex");
    });
  }
  displayMealsAreas(data) {
    let cartona = "";
    let mealsAreas = data.meals;
    for (let i = 0; i < mealsAreas.length && i < 20; i++) {
      cartona += `
      <div class="col-md-3">
              <div
                class="meal position-relative overflow-hidden rounded-2" data-id=${mealsAreas[i].idMeal}
              >
                <img class="w-100" src="${mealsAreas[i].strMealThumb}" alt="${mealsAreas[i].strMeal}" />
                <div
                  class="meal-layer position-absolute top-100 start-0 d-flex align-items-center w-100 h-100 text-black p-2"
                >
                  <h3>${mealsAreas[i].strMeal}</h3>
                </div>
              </div>
            </div>
      
      `;
      $(".firstPage .container .origin").html(cartona);
    }
  }
}
