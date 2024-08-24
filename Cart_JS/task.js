let id = document.querySelectorAll('div.product')
let cart__products = document.querySelector('div.cart__products')


id.forEach((el) => {
    let inc = el.querySelector('div.product__quantity-control_inc')
    let dec = el.querySelector('div.product__quantity-control_dec')
    let val = el.querySelector('div.product__quantity-value')
    let cart = el.querySelector('div.product__add')

    
    inc.onclick = () => {
        val.textContent = Number(val.textContent) + 1
    }

    dec.onclick = () => {
        Number(val.textContent) > 1 ? val.textContent = Number(val.textContent) - 1 : val.textContent
    }

    cart.onclick = () => {
        if (!cart__products.querySelector(`[data-id="${el.getAttribute('data-id')}"]`)) {
            let div_product = document.createElement('div') 
            div_product.classList.add('cart__product')
            div_product.dataset.id = el.getAttribute('data-id')
            cart__products.appendChild(div_product)

            let img = document.createElement('img') 
            img.classList.add('cart__product-image')
            img.src = el.querySelector('img').src
            div_product.appendChild(img)

            let count = document.createElement('div') 
            count.classList.add('cart__product-count')
            count.textContent = Number(count.textContent) + Number(val.textContent)
            div_product.appendChild(count) 
        } else {
            let pr = cart__products.querySelector(`[data-id="${el.getAttribute('data-id')}"]`)
            let pr_count = pr.querySelector('div.cart__product-count')
            pr_count.textContent = Number(pr_count.textContent) + Number(val.textContent)
        }
    }
})