import getData from './getData';
import renderGoods from './renderGoods';
import { setCartCount } from './cartCounter';


const load = () => {
    getData().then((data) => {
        renderGoods(data);
        
        setCartCount();
    });
};


export default load;