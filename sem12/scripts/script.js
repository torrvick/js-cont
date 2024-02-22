import { productsJSON } from './data.js';

const products = JSON.parse(productsJSON);
// console.log(products);

const productsListEl = document.querySelector('.products-list');

products.forEach((product) => {
	const productItemEl = document.createElement('div');
	productItemEl.classList.add('products-list-item');
	productItemEl.dataset.prodid = product.id;
	productItemEl.innerHTML = `
        <a class="item-link" href="#">
            <img src="${product.photo}" alt="">
            <div class="spec">
                <p class="name">${product.brand}</p>
                <p class="desc">${product.text}</p>
                <p class="price">${product.currency === 'USD' ? '$' : '₽'} ${product.price}</p>
            </div>
        </a>
        <div class="add-box">
            <button class="add-btn" href="#">
                <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.9509 23.2667H21.8386C21.2294 23.2667 20.7177 22.7671 20.6735 22.1294C20.629 21.4607 21.1175 20.8785 21.7626 20.8346C21.788 20.8329 21.8145 20.832 21.8405 20.832C22.4575 20.832 22.9743 21.3219 23.0201 21.9487C23.0319 22.1971 22.9914 22.5514 22.736 22.8439L22.73 22.8507L22.7242 22.8575C22.5275 23.0912 22.2607 23.2321 21.9509 23.2667ZM8.21887 23.2604C7.5683 23.2604 7.03906 22.7174 7.03906 22.05C7.03906 21.3832 7.5683 20.8406 8.21887 20.8406C8.86945 20.8406 9.39868 21.3832 9.39868 22.05C9.39868 22.7174 8.86945 23.2604 8.21887 23.2604Z"
                        fill="white" />
                    <path
                        d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z"
                        fill="white" />
                    <path
                        d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z"
                        fill="white" />
                </svg>
                Add to Cart
            </button>
        </div>
    `;
	productsListEl.append(productItemEl);
});

const featureBlock = document.querySelector('.feature');
let cartItems = {};

document.addEventListener('click', (e) => {
	const target = e.target;
	e.preventDefault();

	if (target.classList.contains('add-btn')) {
		const itemId = target.closest('.products-list-item').dataset.prodid;

		cartItems[itemId] = cartItems[itemId] ? cartItems[itemId] + 1 : 1;
		let itemQuantity = cartItems[itemId];
		let cartBlock = document.querySelector('.cart');
		let cartListEl = document.querySelector('.cart__list');

		if (!cartBlock) {
			cartBlock = document.createElement('div');
			cartBlock.classList.add('cart', 'center');
			featureBlock.insertAdjacentElement('afterend', cartBlock);

			cartBlock.innerHTML = `
                <p class="cart__heading">
                        Cart Items
                </p>
                <div class="cart__list">
                    
                </div>
			`;
		}

		if (itemQuantity > 1) {
			const cartItem = cartBlock.querySelector(`[data-cartitemid="${itemId}"]`);
			const quantityEl = cartItem.querySelector('.cart__item-quantity');
			quantityEl.value = parseInt(quantityEl.value) + 1;
		} else {
			const product = products.find((product) => product.id == itemId);
			const itemEl = document.createElement('div');
			itemEl.classList.add('cart__item');
			itemEl.dataset.cartitemid = itemId;

			itemEl.innerHTML = `
            <a href="product.html" class="cart__product-link">
                        <img class="cart__img" src=${product.photo} alt="">
                        <div class="cart__dsc">
                            <h2 class="cart__title">
                                ${product.brand}
                            </h2>
                            <p class="cart__text">Price: <span class="cart__text_price">${product.currency === 'USD' ? '$' : '₽'}${
				product.price
			}</span></p>
                            <p class="cart__text">Color: ${product.color}</p>
                            <p class="cart__text">Size: Xl </p>
                            <p class="cart__text">Quantity: <input class="cart__item-quantity" type="number" min="1"
                                    value=1>
                            </p>
                        </div>
                    </a>
                    <div class="cart__del-btn">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                fill="#575757" />
                        </svg>

                    </div>
        `;
			const cartListEl = document.querySelector('.cart__list');
			cartListEl.append(itemEl);
		}
	}

	if (target.closest('.cart__del-btn')) {
		const cartItem = target.closest('.cart__item');
		const itemId = cartItem.dataset.cartitemid;
		delete cartItems[itemId];
		cartItem.remove();
		if (Object.keys(cartItems).length === 0) {
			document.querySelector('.cart').remove();
		}
	}

	if (target.classList.contains('cart__item-quantity')) {
		const cartItem = target.closest('.cart__item');
		const itemId = cartItem.dataset.cartitemid;
		cartItems[itemId] = parseInt(target.value);
	}

	console.log(cartItems);
});
