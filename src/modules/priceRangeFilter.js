import getData from './getData';
import renderGoods from './renderGoods';
import { priceFilter, saleFilter } from './filters';


const priceRangeFilter = () => {
    const filter = document.querySelector('.filter form');
    const minPrice = filter.querySelector('#min');
    const maxPrice = filter.querySelector('#max');
    const checkboxInput = document.querySelector('#discount-checkbox');
    const checkboxSpan = document.querySelector('.filter-check_checkmark');
    
    filter.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(saleFilter(data, checkboxInput.checked), minPrice.value, maxPrice.value));
        });
    });
    
    checkboxInput.addEventListener('change', () => {
        const checked = checkboxInput.checked;
        
        if (checked) {
            checkboxSpan.classList.add('checked');
        } else {
            checkboxSpan.classList.remove('checked');
        }
        
        getData().then((data) => {
            renderGoods(priceFilter(saleFilter(data, checked), minPrice.value, maxPrice.value));
        });
    });
};


export default priceRangeFilter;