export const setCartCount = () => {
    const cartCounter = document.querySelector('.counter');
    
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    cartCounter.textContent = String(cart.length);
};