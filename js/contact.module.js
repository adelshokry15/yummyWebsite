export class Contact {
  displayContact() {
    let cartona = `
        <div
              class="contact d-flex justify-content-center min-vh-100 align-items-center col-12"
            >
              <div class="container w-75 text-center">
                <div class="row g-4 mb-3">
                  <div class="col-md-6">
                    <input
                      id="nameInput"
                      type="text"
                      class="form-control"
                      placeholder="Enter Your Name"
                    />
                    <div
                      id="nameAlert"
                      class="alert alert-danger w-100 mt-2 d-none"
                    >
                      Special characters and numbers not allowed
                    </div>
                  </div>
                  <div class="col-md-6">
                    <input
                      id="emailInput"
                      type="email"
                      class="form-control"
                      placeholder="Enter Your Email"
                    />
                    <div
                      id="emailAlert"
                      class="alert alert-danger w-100 mt-2 d-none"
                    >
                      Email not valid *exemple@yyy.zzz
                    </div>
                  </div>
                  <div class="col-md-6">
                    <input
                      id="phoneInput"
                      type="text"
                      class="form-control"
                      placeholder="Enter Your Phone"
                    />
                    <div
                      id="phoneAlert"
                      class="alert alert-danger w-100 mt-2 d-none"
                    >
                      Enter valid Phone Number
                    </div>
                  </div>
                  <div class="col-md-6">
                    <input
                      id="ageInput"
                      type="number"
                      class="form-control"
                      placeholder="Enter Your Age"
                    />
                    <div
                      id="ageAlert"
                      class="alert alert-danger w-100 mt-2 d-none"
                    >
                      Enter valid age
                    </div>
                  </div>
                  <div class="col-md-6">
                    <input
                      id="passwordInput"
                      type="password"
                      class="form-control"
                      placeholder="Enter Your Password"
                    />
                    <div
                      id="passwordAlert"
                      class="alert alert-danger w-100 mt-2 d-none"
                    >
                      Enter valid password *Minimum eight characters, at least
                      one letter and one number:*
                    </div>
                  </div>
                  <div class="col-md-6">
                    <input
                      id="repasswordInput"
                      type="password"
                      class="form-control"
                      placeholder="Repassword"
                    />
                    <div
                      id="repasswordAlert"
                      class="alert alert-danger w-100 mt-2 d-none"
                    >
                      Enter valid repassword
                    </div>
                  </div>
                </div>
                <button
                  id="submitBtn"
                  class="btn btn-outline-danger text-capitalize"
                >
                  submit
                </button>
              </div>
            </div>
        `;
    $(".firstPage .container .origin").html(cartona);
    let nameInputTouched = false;
    let emailInputTouched = false;
    let phoneInputTouched = false;
    let ageInputTouched = false;
    let passwordInputTouched = false;
    let repasswordInputTouched = false;
    let submitBtn = document.getElementById("submitBtn");

    document.getElementById("nameInput").addEventListener("focus", () => {
      nameInputTouched = true;
      $("#nameInput").keyup(() => {
        this.inputsValidation(
          nameInputTouched,
          emailInputTouched,
          phoneInputTouched,
          ageInputTouched,
          passwordInputTouched,
          repasswordInputTouched,
          submitBtn
        );
      });
    });

    document.getElementById("emailInput").addEventListener("focus", () => {
      emailInputTouched = true;
      $("#emailInput").keyup(() => {
        this.inputsValidation(
          nameInputTouched,
          emailInputTouched,
          phoneInputTouched,
          ageInputTouched,
          passwordInputTouched,
          repasswordInputTouched,
          submitBtn
        );
      });
    });

    document.getElementById("phoneInput").addEventListener("focus", () => {
      phoneInputTouched = true;
      $("#phoneInput").keyup(() => {
        this.inputsValidation(
          nameInputTouched,
          emailInputTouched,
          phoneInputTouched,
          ageInputTouched,
          passwordInputTouched,
          repasswordInputTouched,
          submitBtn
        );
      });
    });

    document.getElementById("ageInput").addEventListener("focus", () => {
      ageInputTouched = true;
      $("#ageInput").keyup(() => {
        this.inputsValidation(
          nameInputTouched,
          emailInputTouched,
          phoneInputTouched,
          ageInputTouched,
          passwordInputTouched,
          repasswordInputTouched,
          submitBtn
        );
      });
    });

    document.getElementById("passwordInput").addEventListener("focus", () => {
      passwordInputTouched = true;
      $("#passwordInput").keyup(() => {
        this.inputsValidation(
          nameInputTouched,
          emailInputTouched,
          phoneInputTouched,
          ageInputTouched,
          passwordInputTouched,
          repasswordInputTouched,
          submitBtn
        );
      });
    });

    document.getElementById("repasswordInput").addEventListener("focus", () => {
      repasswordInputTouched = true;
      $("#repasswordInput").keyup(() => {
        this.inputsValidation(
          nameInputTouched,
          emailInputTouched,
          phoneInputTouched,
          ageInputTouched,
          passwordInputTouched,
          repasswordInputTouched,
          submitBtn
        );
      });
    });
    this.inputsValidation(
      nameInputTouched,
      emailInputTouched,
      phoneInputTouched,
      ageInputTouched,
      passwordInputTouched,
      repasswordInputTouched,
      submitBtn
    );
  }

  inputsValidation(
    nameInputTouched,
    emailInputTouched,
    phoneInputTouched,
    ageInputTouched,
    passwordInputTouched,
    repasswordInputTouched,
    submitBtn
  ) {
    this.ageValidation();
    this.emailValidation();
    this.nameValidation();
    this.passwordValidation();
    this.phoneValidation();
    this.repasswordValidation();
    if (nameInputTouched) {
      if (this.nameValidation()) {
        document
          .getElementById("nameAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("nameAlert")
          .classList.replace("d-none", "d-block");
      }
    }
    if (emailInputTouched) {
      if (this.emailValidation()) {
        document
          .getElementById("emailAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("emailAlert")
          .classList.replace("d-none", "d-block");
      }
    }

    if (phoneInputTouched) {
      if (this.phoneValidation()) {
        document
          .getElementById("phoneAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("phoneAlert")
          .classList.replace("d-none", "d-block");
      }
    }

    if (ageInputTouched) {
      if (this.ageValidation()) {
        document
          .getElementById("ageAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("ageAlert")
          .classList.replace("d-none", "d-block");
      }
    }

    if (passwordInputTouched) {
      if (this.passwordValidation()) {
        document
          .getElementById("passwordAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("passwordAlert")
          .classList.replace("d-none", "d-block");
      }
    }
    if (repasswordInputTouched) {
      if (this.repasswordValidation()) {
        document
          .getElementById("repasswordAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("repasswordAlert")
          .classList.replace("d-none", "d-block");
      }
    }

    if (
      this.nameValidation() &&
      this.emailValidation() &&
      this.phoneValidation() &&
      this.ageValidation() &&
      this.passwordValidation() &&
      this.repasswordValidation()
    ) {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", true);
    }
  }
  nameValidation() {
    return /^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value);
  }

  emailValidation() {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      document.getElementById("emailInput").value
    );
  }

  phoneValidation() {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
      document.getElementById("phoneInput").value
    );
  }

  ageValidation() {
    return /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(
      document.getElementById("ageInput").value
    );
  }

  passwordValidation() {
    return /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(
      document.getElementById("passwordInput").value
    );
  }

  repasswordValidation() {
    return (
      document.getElementById("repasswordInput").value ==
      document.getElementById("passwordInput").value
    );
  }
}
