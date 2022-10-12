const inputPeoplesEl = document.querySelector('#people')
const errorTextEl = document.querySelector('.subtitle-error')
const tipAmountEl = document.querySelector('.tip-amount')
const tipTotalEl = document.querySelector('.tip-total')
const billInputEl = document.querySelector('.bill-input')
const tipBtnsEl = document.querySelectorAll('.btn-tip')
const customTipEl = document.querySelector('.tip-input')
const btnResetEl = document.querySelector('.btn-reset')


// проверка на количество человек 
function checkPeoples() {
    if (+inputPeoplesEl.value === 0) {
        inputPeoplesEl.classList.add('error')
        errorTextEl.classList.add('show')

    } else {
        inputPeoplesEl.classList.remove('error')
        errorTextEl.classList.remove('show')
    }
}
checkPeoples()


// 
let bill = 0.00
let tips = 0
let persons = 0

// значение из input bill
billInputEl.addEventListener('input', () => {
    bill = +billInputEl.value
    console.log(bill);
    calculateTops()
})

// значение btn tip %
tipBtnsEl.forEach(btn => {
    btn.addEventListener('click', (e) => {
        tipBtnsEl.forEach(btn => {
            btn.classList.remove('active')
            if (e.target.innerHTML == btn.innerHTML) {
                btn.classList.add('active')
            }
        })
        // btn.classList.toggle('active')
        tips = +btn.textContent.replace(/%/, '')
        console.log(tips);
        calculateTops()
    })
})

// значение кастомных tips
customTipEl.addEventListener('change',() => {
    tips = +customTipEl.value
    console.log(tips);
    calculateTops()
})

// значение persons 
inputPeoplesEl.addEventListener('input', () => {
    checkPeoples()
    persons = +inputPeoplesEl.value
    console.log(persons);
    calculateTops()
})


// сброс всего
btnResetEl.addEventListener('click', () => {
    billInputEl.value = ''
    inputPeoplesEl.value = ''
    checkPeoples()
    tipBtnsEl.forEach(btn => {
        btn.classList.remove('active')
    })
    customTipEl.value = ''
    tipAmountEl.textContent = '$0.00'
    tipTotalEl.textContent = '$0.00'
})

function calculateTops() {
    if (inputPeoplesEl.value > 0) {
        let tipAmount = ((bill / 100) * tips ) / persons
        let total = (bill + tipAmount) / persons
        tipAmountEl.textContent = '$' + tipAmount.toFixed(2)
        tipTotalEl.textContent = '$' + total.toFixed(2)
    }
}
