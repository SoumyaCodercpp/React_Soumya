
function customRender(element,conatiner){
    const domElement=document.createElement(element.type)
    domElement.innerHTML=element.text
    domElement.setAttribute('href',element.props.href)
    domElement.setAttribute('target',element.props.target)
    conatiner.appendChild(domElement)
}

const reactelement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    text:'click me to visit google'
}

const maincontianer =document.querySelector('#root')

// injecitng element
customRender(reactelement,maincontianer)

