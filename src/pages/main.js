//@ts-check

/*window.addEventListener("scroll", function () {
    var elementTarget = document.getElementById("hola");
    console.log('a')
    if (window.scrollY > (elementTarget.offsetTop)) {
        document.getElementById('header').classList.add('passed')
    }
    if (window.scrollY < (elementTarget.offsetTop)) {
        document.getElementById('header').classList.remove('passed')
    }
});*/

const height = () => {
    const heading = document.getElementById('heading')
    if (heading)
        heading.style.height = `${window.innerHeight}px`
}

height()
window.onresize = height