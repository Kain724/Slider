// Управляющие элементы, которые вам нужно установить и которые являются условиями проекта:

// Стрелки (переключают слайды по кольцу. То есть после слайда №3 снова пойдет слайд №1);
// Кружочки между стрелками (включают нужный слайд);
// Ссылки сверху слайдера (включают нужный слайд).


function pageLoaded() {
  const btnPrev = document.querySelector(".btn-prev"),
    btnNext = document.querySelector(".btn-next"),
    slides = document.querySelectorAll(".slide"),
    dots = document.querySelectorAll(".dot"),
    links = document.querySelectorAll(".link");
  let infoCity = document.querySelector(".info-span.city"),
    infoAp = document.querySelector(".apartaments"),
    infoTime = document.querySelector(".info-span.time"),
    infoCost = document.querySelector(".info-span.cost");

  let index = 0;

  let contentInfo = [{
      city: "Rostov-on-Don <br>LCD admiral",
      area: "81 m2",
      repairTime: "3.5 months",
      сost: "Upon request",
    },
    {
      city: "Sochi <br>Thieves",
      area: "105 m2",
      repairTime: "4 months",
      сost: "Upon request",
    },
    {
      city: "Rostov-on-Don <br>Patriotic",
      area: "93 m2",
      repairTime: "3 months",
      сost: "Upon request",
    },
  ];

    

  const setEntity = (index) => {
    infoCity.innerHTML = contentInfo[index].city;
    infoAp.innerHTML = contentInfo[index].area;
    infoTime.innerHTML = contentInfo[index].repairTime;
    infoCost.innerHTML = contentInfo[index].сost;
    
  };
  
  
  


  const activeSlide = (n) => {
    for (slide of slides) {
      slide.classList.remove("active");
    }
    slides[n].classList.add("active");
  };

  const activeDots = (n) => {
    for (dot of dots) {
      dot.classList.remove("active");
    }
    dots[n].classList.add("active");
  };

  const activeLink = (n) => {
    for (link of links) {
      link.classList.remove("active");
    }
    links[n].classList.add("active");
  };

  const prepareCurrentSlide = (ind) => {
    activeSlide(ind);
    activeDots(ind);
    activeLink(ind);
    setEntity(ind);
  };

  const nextSlide = () => {
    if (index == slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    } else {
      index++;
      prepareCurrentSlide(index);
    }
  };

  const prevSlide = () => {
    if (index == 0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
    } else {
      index--;
      prepareCurrentSlide(index);
    }
  };

  dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
      index = indexDot;
      prepareCurrentSlide(index);
    });
  });

  links.forEach((item, indexlink) => {
    item.addEventListener("click", () => {
      index = indexlink;
      prepareCurrentSlide(index);
    });
  });

  btnNext.addEventListener("click", nextSlide);
  btnPrev.addEventListener("click", prevSlide);
}

document.addEventListener("DOMContentLoaded", pageLoaded);