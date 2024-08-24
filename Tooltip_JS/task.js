let has_tooltip = document.querySelectorAll('.has-tooltip')

has_tooltip.forEach((el) => {
    el.onclick = (e) => {
        e.preventDefault()

        if (!el.classList.contains('tooltip_active')) {
            el.classList.add('tooltip_active')

            let div = document.createElement('div')           
            div.classList.add('tooltip')
            div.textContent = el.title
            div.style.left = 0
            div.style.top =  0
            el.appendChild(div)

        } else if (el.classList.contains('tooltip_active')) {
            el.classList.remove('tooltip_active')
            
            div1 = document.querySelector('div.tooltip')
            div1.parentElement.removeChild(div1)
            
        }      
    }
})