let language = document.querySelector('.lang')
let links = document.querySelectorAll('a')
let item1 = document.querySelector('.item1')
let item2 = document.querySelector('.item2')
let item3 = document.querySelector('.item3')
let item4 = document.querySelector('.item4')
let btn = document.querySelector('.btn')
let span1 = document.querySelector('.span1')
let span2 = document.querySelector('.span2')
let span3 = document.querySelector('.span3')
let active = document.querySelector('.active')

links.forEach(link => {
    link.addEventListener('click', () => {
        active.classList.remove('active')
        link.classList.add('active')

        var attr = link.getAttribute('language');
        localStorage.setItem('selected_language', attr)

        item1.textContent = data[attr].item1;
        item2.textContent = data[attr].item2;
        item3.textContent = data[attr].item3;
        item4.textContent = data[attr].item4;
        btn.textContent = data[attr].btn;
        span1.textContent = data[attr].span1;
        span2.textContent = data[attr].span2;
        span3.textContent = data[attr].span3;
    })
})

var data = {
    "azerbaijan":
    {
        "item1": "Hədiyyə kartları",
        "item2": "Birbank kartı əldə edin",
        "item3": "Korporativ satışlar",
        "item4": "Mağazalarımız",
        "btn": "KAMPANİYALAR",
        "span1": "SEVİMLİLƏRİM",
        "span2": "SƏBƏTİM",
        "span3": "HESABIM"
    },
    "russian":
    {
        "item1": "Подарочные карты",
        "item2": "Получить банковскую карту",
        "item3": "Корпоративные продажи",
        "item4": "Наши магазины",
        "btn": "КАМПАНИЯ",
        "span1": "ИЗБРАННОЕ",
        "span2": "КОРЗИНА",
        "span3": "АККАУНТ"
    }
}
