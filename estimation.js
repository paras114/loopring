const inputs = document.querySelectorAll(".left_content .box .input");
inputs.forEach((inpt) => {
  inpt.addEventListener("click", () => {
    inpt.classList.toggle("active");
    inpt.querySelector(".input-sub").classList.toggle("hidden");
  });
});


const arrayValues = Array.from(document.querySelectorAll(".part-2-value"));

let total = 3500;
function totalFunc() {
  const totalEle = document.querySelector(".total span");
  totalEle.textContent = total;
}
function addValue(dataset) {
  if (dataset == "age") {
    for (let arr of arrayValues) {
      if (arr.dataset.value == "age") {
        if (arr.textContent != "Oui") {
          arr.textContent = "Oui";
          total += 1000;
          totalFunc();
        }
      }
    }
  } else if (dataset == "identity") {
    for (let arr of arrayValues) {
      if (arr.dataset.value == "identity") {
        if (arr.textContent != "300") {
          arr.textContent = "300";
          total += 300;
          totalFunc();
        }
      }
    }
  } else if (dataset == "motivated") {
    for (let arr of arrayValues) {
      if (arr.dataset.value == "motivated") {
        if (arr.textContent != "1000") {
          arr.textContent = "1000";
          total += 1000;
          totalFunc();
        }
      }
    }
  } else if (dataset == "referral") {
    for (let arr of arrayValues) {
      if (arr.dataset.value == "referral") {
        if (arr.textContent != "1500") {
          arr.textContent = "1500";
          total += 1500;
          totalFunc();
        }
      }
    }
  }
}
function removeValue(dataset) {
  if (dataset == "age") {
    for (let arr of arrayValues) {
      if (arr.dataset.value == "age") {
        if (arr.textContent != "Non") {
          arr.textContent = "Non";
          total -= 1000;
          totalFunc();
        }
      }
    }
  } else if (dataset == "identity") {
    for (let arr of arrayValues) {
      if (arr.dataset.value == "identity") {
        if (arr.textContent != "0") {
          arr.textContent = "0";
          total -= 300;
          totalFunc();
        }
      }
    }
  } else if (dataset == "motivated") {
    for (let arr of arrayValues) {
      if (arr.dataset.value == "motivated") {
        if (arr.textContent != "0") {
          arr.textContent = "0";
          total -= 1000;
          totalFunc();
        }
      }
    }
  } else if (dataset == "referral") {
    for (let arr of arrayValues) {
      if (arr.dataset.value == "referral") {
        if (arr.textContent != "0") {
          arr.textContent = "0";
          total -= 1500;
          totalFunc();
        }
      }
    }
  }
}

const options = document.querySelectorAll(".input-sub li");


options.forEach((li) => {
  li.addEventListener("click", () => {
    const value = li.textContent;
    const liParent =
      li.parentElement.parentElement.parentElement.querySelector("h3");
    liParent.textContent = value;

    if (liParent.textContent == "Oui") {
      addValue(liParent.dataset.estimate);
    } else {
      removeValue(liParent.dataset.estimate);
    }
  });
});
