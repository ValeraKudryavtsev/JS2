// класс, который отвечает за товар, метод класса отвечвает за html-разметку
class GoodsItem {
    constructor(title, price, img) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.caption = 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.';
    }
    render() {
        return `<li class="goods__item">
                    <div class="goods__img-box">
                        <img class="goods__img" src="${this.img}" alt="Product img">
                        <a class="goods__cart-button" href="#">
                            <svg class="goods__cart-icon" width="27" height="25" viewBox="0 0 27 25" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z"></path>
                            </svg>
                            <span>Add to Cart</span>
                        </a>
                    </div>
                    <h3 class="goods__item-title">${this.title}</h3>
                    <p class="goods__item-text">${this.caption}</p>
                    <p class="goods__item-price">$${this.price}</p>
                </li>`;
    }
}

// список товаров
class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150, img: './img/product-1.jpg' },
            { title: 'Socks', price: 50, img: './img/product-2.jpg' },
            { title: 'Jacket', price: 350, img: './img/product-3.jpg' },
            { title: 'Shoes', price: 250, img: './img/product-4.jpg' },
            { title: 'Dress', price: 150, img: './img/product-5.jpg' },
            { title: 'T-shirt', price: 300, img: './img/product-6.jpg' },
        ];
    }
    render() {
        let listHtml = '';
        let block = document.querySelector('.goods__list');
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.img);
            listHtml += goodItem.render();
        });
        block.innerHTML = listHtml;
        // document.querySelector('.goods__list').innerHTML = goodsList.join('');
    }
    getSum() {
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price
        });
        console.log(sum);
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
// суммарная стоимость всех товаров
list.getSum();

// набросок классов для работы корзины
class CartList {
    // конструктор
    constructor() {

        }
        // добавляем элемент с помощью CartItem
    addItem() {

        }
        // удаляем элемент из корзины
    removeItem() {

        }
        // суммарная стоимость товаров из корзины
    getGoodsSum() {

    }
}

class CartItem {
    // конструктор
    constructor() {

        }
        // формирование разметки
    render() {

    }
}

// пока оставлю здесь

// // функция, которая добавляет товары в html-документ
// const renderGoodsList = (list) => {
//     let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img));
//     document.querySelector('.goods__list').innerHTML = goodsList.join('');
// }