import getData from './getData';


const second = () => {
    const cartBtn = document.querySelector('#cart');
    
    cartBtn.addEventListener('click', () => {
        getData().then((data) => {
            console.log(data);
        });
    });
};


export default second;