const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.image')
const bottom = document.querySelector('.bottom')

let slideNumber = 1
const imgsLength = images.length

for(let i = 0; i < imgsLength; i++) {
  const myDiv = document.createElement('div')
  myDiv.className = 'button'
  bottom.appendChild(myDiv)
}

const buttons = document.querySelectorAll('.button')

const resetBg = ()=> {
  buttons.forEach((button)=> {
    button.style.backgroundColor = "Transparent"
  })
}

buttons.forEach((button, i) => {
  button.addEventListener('click', ()=> {
    resetBg()
    slider.style.transform = `translateX(-${i * 800}px)`
    slideNumber = i + 1
    button.style.backgroundColor = "white"
  })
})

const nextSlide = ()=> {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`
  slideNumber++
}

const prevSlide = ()=> {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`
  slideNumber--
}

const getFirstSlide = ()=> {
  slider.style.transform = "translateX(0px)"
  slideNumber = 1
}

const getLastSlide = ()=> {
  slider.style.transform = `translateX(-${(imgsLength - 1) * 800}px)`
  slideNumber = imgsLength
}

const changeColor = ()=> {
  resetBg()
  buttons[slideNumber - 1].style.backgroundColor = "white"
}
right.addEventListener('click', ()=> {
  slideNumber < imgsLength ? nextSlide() : getFirstSlide()
  changeColor()
})

left.addEventListener('click', ()=> {
  slideNumber > 1 ? prevSlide() : getLastSlide()
  changeColor()
})
