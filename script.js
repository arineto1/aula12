//selecionando o body
const body = document.querySelector('body')

//criando tag div1
const div1 = document.createElement('div')
//adicionando uma classe css
div1.classList.add('destaque')
//inserindo texto
div1.innerHTML = 'Primeiro'

//criando tag h1
const h1 = document.createElement('h1')
//inserindo texto
h1.innerHTML = 'Segundo'
h1.style.backgroundColor = 'red'

//criando uma tag div com um h2 dentro
const h2 = document.createElement('h2')
h2.innerHTML = 'Terceiro'
const div3 = document.createElement('div')
div3.appendChild(h2)



//inserindo a tag div1 no body
body.appendChild(div1)
//inserindo a tag h1
body.appendChild(h1)
//inserindo a tag div3 que contem a tag h2
body.appendChild(div3)