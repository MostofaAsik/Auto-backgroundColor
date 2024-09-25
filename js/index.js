const createRandomcolor = () => {
    const hex = '012345678ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color

}

let intervalId;
const startBgColor = () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            document.querySelector('body').style.backgroundColor = createRandomcolor()
        }, 1000)
    }
}

const stopBgColor = () => {
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startBgColor)
document.querySelector('#stop').addEventListener('click', stopBgColor)