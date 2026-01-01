function customRender(reactElement,container){
    // const domElement=document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactEkement.props.target)
    // container.appendChild(domElement0)

    const domElement=document.createElement(reactEelement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props){
        if(prop=='children')continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
} 


const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',

    },
    Children:'click me to visit google'
}

const anotherElement=(
    <a href ="https://www.google.com" target = '_blank'>Visit google</a>
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
    anotherElement()
)

const mainContainer=document.querySelector('#root');

customRender(reactElement,mainContainer);




