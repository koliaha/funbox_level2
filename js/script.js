document.addEventListener("DOMContentLoaded", () => {
    let list = document.querySelector('.cat-list')
    let item = list.querySelectorAll('.cat-item')
    let btn = document.querySelector('.btn')
    let buylist = document.querySelector('.buylist')
    const nth = 'Вы ничего не выбрали'
    const defaultString = 'Головы щучьи с чесноком да свежайшая сёмгушка.'
    const selectedString = 'Чего сидишь? Порадуй котэ, <a class="buyDirect" href="">купи</a>.'
    const disabledString = 'Печалька, с курой закончился.'
    item.forEach((el) => {
        let arrayClip = el.querySelector('.clip-path').classList
        let subtext = el.querySelector('.sub-text')
        el.addEventListener('click', () => {
            if (arrayClip.length == 2) {
                el.classList.toggle('tick-on');
                subtext.innerHTML = selectedString
                let buyDirect = el.querySelector('.buyDirect')
                buyDirect.addEventListener('click', (event)=>{
                    buyItems(event)
                })
            }
            if (el.classList.length == 1) {
                subtext.innerHTML = defaultString
            }
        })
        el.addEventListener('dblclick', () => {
            arrayClip.toggle('gray')
            el.classList.toggle('disabled');
            el.classList.remove('tick-on');
            subtext.classList.toggle('gold')
            subtext.innerHTML = disabledString
            if (el.classList.length == 1) {
                subtext.innerHTML = defaultString
            }
        })
        
    })
    function buyItems (elem){
        elem.preventDefault()
        let listfood = []
        let onBasket = list.querySelectorAll('.tick-on')
        onBasket.forEach((elem) => {
            listfood.push(elem.querySelector('.item-food').innerHTML)
        })
        listfood.length == 0 ?
            buylist.innerHTML = 'Корзина пуста' :
            buylist.innerHTML = `Вы купили ${listfood.join(', ')}`
    }
    btn.addEventListener('click', (elem) => {
        buyItems(elem)
    })

});