/** @type {HTMLElement} */;
//validate form register

function Validator(options) {
    var formElement = document.querySelector(options.form)
    if (formElement) {
        options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector)
            var errorElement = inputElement.parentElement.querySelector(options.errorMess)
            inputElement.onblur = function(){
                blurInput(rule,inputElement,errorElement)
            }
            inputElement.oninput = function (){
                eventInput(inputElement,errorElement)
            }
        });
    }
    
}
function blurInput(rule,inputElement,errorElement){
    var error = rule.test(inputElement.value)
    errorElement.innerText = error

    if (error) {
        inputElement.parentElement.classList.add('invalid')
    }else{
        inputElement.parentElement.classList.remove('invalid')
    }
}
function eventInput(inputElement,errorElement){
    if (inputElement.value) {
        inputElement.parentElement.classList.remove('invalid')
        errorElement.innerText = ''
        
    } else {
        inputElement.parentElement.classList.add('invalid')
        errorElement.innerText = 'Vui lòng không để trống'
    }
}
Validator.isRequired = function (selector) {
    return {
        selector : selector,
        test : function (value) {
            if (value.trim()) {
               return ''
            } else {
                return 'Vui lòng không để trống'
            }
        }
    }
}

Validator.isEmail = function (selector) {
    return {
        selector : selector,
        test : function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if (regex.test(value)) {
                return ''
            }else{
                return 'Vui long nhap email'
            }
        }
    }
}

// Modal
const closeElement = document.querySelector('.js-modal-close__icoin')
const registerElement = document.querySelector('.js-header-nav__item-link')
const modalElement = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal__container')
//Open-modal
registerElement.addEventListener('click',openModal)
function openModal(){
    modalElement.classList.add('open-modal')
}
//Close-modal
closeElement.addEventListener('click',hideModal)

function hideModal(){
    modalElement.classList.remove('open-modal')
}

modalElement.addEventListener('click', hideModal)

modalContainer.addEventListener('click', function(event){
    //dừng hiện tượng nổi bọt
    event.stopPropagation()
})