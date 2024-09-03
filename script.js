function displayCategory(category) {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = ''; // Clear the container

    const filteredProducts = products.filter(product => product.category === category);

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
        `;

        productContainer.appendChild(productElement);
    });
}

function filterProductsByPrice(minPrice, maxPrice) {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = ''; // Clear the container

    const filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
        `;

        productContainer.appendChild(productElement);
    });
}
