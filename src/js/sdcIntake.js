let yes = document.getElementById('yes');
let no = document.getElementById('no');
let dogInfo = document.getElementById('dogInfo');

yes.addEventListener('change', (event) => {
    dogInfo.removeAttribute('style')
    event.preventDefault()
})

no.addEventListener('change', (event) => {
    dogInfo.setAttribute('style', 'display:none')
    event.preventDefault()
})