let language = document.querySelector(".lang");
let links = document.querySelectorAll("a");
let item1 = document.querySelector(".item1");
let item2 = document.querySelector(".item2");
let item3 = document.querySelector(".item3");
let item4 = document.querySelector(".item4");
let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
let active = document.querySelector(".active");

links.forEach((link) => {
  link.addEventListener("click", () => {
    var lang = link.getAttribute("language");
    setLanguage(lang);

    item1.textContent = data[lang].item1;
    item2.textContent = data[lang].item2;
    item3.textContent = data[lang].item3;
    item4.textContent = data[lang].item4;
    input.placeholder = data[lang].input;
    btn.textContent = data[lang].btn;
    span1.textContent = data[lang].span1;
    span2.textContent = data[lang].span2;
    span3.textContent = data[lang].span3;
  });
});


function setLanguage(language) {
    localStorage.setItem("selectedLanguage", language);
    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("language") === language) {
          link.classList.add('active');
        }  
    });
}

const storedLanguage = localStorage.getItem("selectedLanguage");
if (storedLanguage) {
  setLanguage(storedLanguage);
}

var data = {
  azerbaijan: {
    item1: "Hədiyyə kartları",
    item2: "Birbank kartı əldə edin",
    item3: "Korporativ satışlar",
    item4: "Mağazalarımız",
    input: "Axtardığınız məhsulu yazın",
    btn: "KAMPANİYALAR",
    span1: "SEVİMLİLƏRİM",
    span2: "SƏBƏTİM",
    span3: "HESABIM",
  },
  russian: {
    item1: "Подарочные карты",
    item2: "Получить банковскую карту",
    item3: "Корпоративные продажи",
    item4: "Наши магазины",
    input: "Введите продукт, который вы ищете",
    btn: "КАМПАНИЯ",
    span1: "ИЗБРАННОЕ",
    span2: "КОРЗИНА",
    span3: "АККАУНТ",
  },
};
