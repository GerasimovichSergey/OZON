const postData = () => {
    return fetch('http://localhost:3000/goods', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Парк Юрского периода',
            price: 1000,
            sale: true,
            img: 'https://cdn1.ozone.ru/multimedia/c400/1021419099.jpg',
            category: 'Игры и софт',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json());
};


export default postData;