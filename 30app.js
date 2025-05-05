// let container = document.querySelector('.container')
// let newPara = document.createElement('p')
// container.appendChild( newPara)
// newPara.innerHTML =`My name is Afsana`
// let newHead = document.createElement('h1')
// container.appendChild(newHead)
// newHead.innerHTML = 'Introduction'
// newHead.classList.add('heading')
//console.log(newpara);

function addBox(){
    let newBox = document.createElement('div')
    document.querySelector('.container').appendChild(newBox)
    newBox.classList.add('box')
}