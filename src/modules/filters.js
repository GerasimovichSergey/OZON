export const searchFilter = (goods, value) => {
    return goods.filter((item) => {
        return item.title.toLowerCase().includes(value);
    });
};

export const categoryFilter = (goods, value) => {
    return goods.filter((item) => {
        return item.category === value;
    });
};

export const priceFilter = (goods, min, max) => {
    return goods.filter((item) => {
        if (min === '' && max === '') {
            return item;
        } else if (min !== '' && max !== '') {
            return (item.price >= Number(min)) && (item.price <= Number(max));
        } else if (min !== '' && max === '') {
            return item.price >= Number(min);
        } else if (min === '' && max !== '') {
            return item.price <= Number(max);
        }
    });
};

export const saleFilter = (goods, checked) => {
    return goods.filter((item) => {
        if (checked) {
            return item.sale === checked;
        } else {
            return item;
        }
    });
};