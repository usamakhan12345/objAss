const inputBtn = document.getElementById("inputbtn")
const container = document.getElementById("cardContainer")

inputBtn.addEventListener('click',generateCard)

function generateCard(){
    
    let name = document.getElementById('name').value
    let fname = document.getElementById('fname').value
    let age = document.getElementById('age').value
    let image = document.getElementById('image').value
    const divEle = `
    <div class= 'box'>
    <img class = 'image' src = ${image} >
    <h2 class='head'>Name    :  ${name}</h2>
    <h3 class='head'>Father Name :  ${fname}</h3>
    <h3 class='head'>Age  :  ${age}</h3>
    </div>
    ` 
    let div = document.createElement('div')
    div.innerHTML = divEle
    div.className = 'box'
    container.appendChild(div)
    name = ""
    fname = ""
    age = ""
    image = ""
}