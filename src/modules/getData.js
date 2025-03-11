const getData = () => {
    return fetch(`https://dbjson-1779d-default-rtdb.firebaseio.com/goods.json`)
        .then(response => response.json());
};


export default getData;