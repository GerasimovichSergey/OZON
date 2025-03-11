import getData from './getData';
import renderGoods from './renderGoods';
import { priceFilter, saleFilter } from './filters';


const priceRangeFilter = () => {
    const filter = document.querySelector('.filter form');
    const checkboxInput = document.querySelector('#discount-checkbox');
    const checkboxSpan = document.querySelector('.filter-check_checkmark');
    
    filter.addEventListener('input', () => {
        let minPrice = filter.querySelector('#min').value;
        let maxPrice = filter.querySelector('#max').value;
        
        getData().then((data) => {
            renderGoods(priceFilter(data, minPrice, maxPrice));
        });
    });
    
    checkboxInput.addEventListener('change', () => {
        if (checkboxInput.checked) {
            checkboxSpan.classList.add('checked');
        } else {
            checkboxSpan.classList.remove('checked');
        }
        
        getData().then((data) => {
            renderGoods(saleFilter(data, checkboxInput.checked));
        });
    });
};


export default priceRangeFilter;