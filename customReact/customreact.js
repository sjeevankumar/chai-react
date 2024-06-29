const createElement = (element) => {
    const { type, props, children } = element
    const ele = document.createElement(type)
    if (props)
        for (const [prop, value] in Object.entries(props)) {
            ele.prop = value
        }
    ele.innerHTML = children
    return ele
}

const customRender = (element, root) => {
    const ele = createElement(element)
    root.appendChild(ele)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click me to visit google'
}
const reactElement2 = {
    type: 'h1',
    // props: {
    //     href: "https://google.com",
    //     target: "_blank"
    // },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
customRender(reactElement2, mainContainer)