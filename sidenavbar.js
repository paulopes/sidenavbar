var sidenavbarbehind = document.createElement('div')
sidenavbarbehind.setAttribute('id', 'sidenavbarbehind')
document.body.appendChild(sidenavbarbehind)

sidenavbarbehind.addEventListener('click', function(event) {
    if (document.body.classList.contains('sidenavbar-active')) {
        document.body.classList.remove('sidenavbar-active')
    }
})

window.addEventListener(
    'DOMContentLoaded',
    function() {
        document.body.querySelectorAll('.navbar').forEach(function(el) {
            var sidenavbarbutton = document.createElement('div')
            sidenavbarbutton.classList.add('sidenavbar-button')

            var sidenavbarbuttontop = document.createElement('div')
            sidenavbarbuttontop.classList.add('sidenavbar-button-top')
            sidenavbarbutton.appendChild(sidenavbarbuttontop)
            var sidenavbarbuttonmid = document.createElement('div')
            sidenavbarbuttonmid.classList.add('sidenavbar-button-mid')
            sidenavbarbutton.appendChild(sidenavbarbuttonmid)
            var sidenavbarbuttonbottom = document.createElement('div')
            sidenavbarbuttonbottom.classList.add('sidenavbar-button-bottom')
            sidenavbarbutton.appendChild(sidenavbarbuttonbottom)

            el.appendChild(sidenavbarbutton)

            sidenavbarbutton.addEventListener('click', function(event) {
                if (document.body.classList.contains('sidenavbar-active')) {
                    document.body.classList.remove('sidenavbar-active')
                } else {
                    document.body.classList.add('sidenavbar-active')
                }
            })
        })
    },
    false,
)
