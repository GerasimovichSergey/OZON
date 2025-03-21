const renderCart = (goods) => {
    const cartWrapper = document.querySelector('.cart-wrapper');
    
    cartWrapper.innerHTML = '';
    
    if (goods.length === 0) {
        cartWrapper.innerHTML = `
            <div id="cart-empty">
                Ваша корзина пока пуста
            </div>
        `;
    } else {
        goods.forEach((item) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.key = item.id;
            card.innerHTML = `
            ${item.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
            <div class="card-img-wrapper">
                <span class="card-img-top"
                    style="background-image: url(${item.img})">
                </span>
            </div>
            <div class="card-body justify-content-between">
                <div class="card-price">${item.price} ₽</div>
                <h5 class="card-title">${item.title}</h5>
                <button class="btn btn-primary">Удалить</button>
            </div>
        `;
            
            cartWrapper.append(card);
        });
    }
};


export default renderCart;