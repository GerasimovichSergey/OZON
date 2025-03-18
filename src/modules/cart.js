import renderCart from './renderCart';
import postData from './postData';
import { setCartCount } from './cartCounter';


const cart = () => {
    const cartBtn = document.querySelector('#cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseBtn = cartModal.querySelector('.cart-close');
    const cartTotal = cartModal.querySelector('.cart-total > span');
    const cartSbtBtn = cartModal.querySelector('.cart-confirm');
    const goodsWrapper = document.querySelector('.goods');
    const cartWrapper = document.querySelector('.cart-wrapper');
    
    const openCart = () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        
        cartModal.style.display = 'flex';
        
        renderCart(cart);
        
        cartTotal.textContent = cart.reduce((sum, item) => {
            return sum + item.price;
        }, 0);
    };
    
    const closeCart = () => {
        cartModal.style.display = '';
    };
    
    cartBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);
    
    goodsWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const card = event.target.closest('.card');
            const key = card.dataset.key;
            const goods = JSON.parse(localStorage.getItem('goods'));
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            const goodsItem = goods.find((item) => {
                return item.id === Number(key);
            });
            
            cart.push(goodsItem);
            
            localStorage.setItem('cart', JSON.stringify(cart));
            
            setCartCount();
        }
    });
    
    cartWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            const card = event.target.closest('.card');
            const key = card.dataset.key;
            const index = cart.findIndex((item) => {
                return item.id === Number(key);
            });
            
            cart.splice(index, 1);
            
            localStorage.setItem('cart', JSON.stringify(cart));
            
            renderCart(cart);
            setCartCount();
            
            cartTotal.textContent = cart.reduce((sum, item) => {
                return sum + item.price;
            }, 0);
        }
    });
    
    cartSbtBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        
        postData(cart).then(() => {
            localStorage.removeItem('cart');
            
            renderCart([]);
            setCartCount();
            
            cartTotal.textContent = '0';
        });
    });
};

export default cart;