class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear() {
   this.currentOperand = ' '
   this.previousOperand = ' '
   this.operation = undefined
    }
    delete() {
this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendnumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
 this.currentOperand = this.currentOperand.toString()+number.toString()
    }
    chooseoperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
          this.compute()
      }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    compute() {
let computation
let prev = parseFloat(this.previousOperand)
let current = parseFloat(this.currentOperand)
if (isNaN(prev) || isNaN(current)) return
switch (this.operation) {
    case '+':
        computation = prev+current
        break
        case '-':
            computation = prev-current
            break
            case '*':
                computation = prev*current
                break
                case '÷':
                    computation = prev/current
                    break
                    default: return
}
this.currentOperand = computation
this.operation = undefined
this.previousOperand = ''
    }
    updatedisplay() {
    
 this.currentOperandTextElement.innerText = this.getdisplaynumber(this.currentOperand)
 if (this.operation != null) {
 this.previousOperandTextElement.innerText = this.getdisplaynumber(this.previousOperand)+' '+this.operation
}
else {
    this.previousOperandTextElement.innerText = ''
}
    }
    getdisplaynumber(number) {
        const stringnumber = number.toString()
            const integernumber = parseFloat(stringnumber.split('.')[0])
            const decimalnumber = stringnumber.split('.')[1]
            let integerdisplay
            if (isNaN(integernumber)) {
                integerdisplay =''
            } 
            else {
                integerdisplay = integernumber.toLocaleString('en', {maximumFractionDigits: 0})
            }
            if (decimalnumber != null) {
                return integernumber+'.'+decimalnumber
            }
            else {
                return integerdisplay
            }
        
 const floatnumber = parseFloat(number) 
 if (isNaN(floatnumber)) return ''
 return floatnumber.toLocaleString('en')
    }
}

const numberbuttons = document.querySelectorAll('[data-number]')
const operationbuttons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberbuttons.forEach(button => {
    button.addEventListener('click', () => {
  calculator.appendnumber(button.innerText)
  calculator.updatedisplay()
    })
})

operationbuttons.forEach(button => {
    button.addEventListener('click', () => {
  calculator.chooseoperation(button.innerText)
  calculator.updatedisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updatedisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updatedisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updatedisplay()
})