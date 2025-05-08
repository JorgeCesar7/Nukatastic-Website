window.addEventListener('load', () => {
    window.scrollTo({ top: 10, behavior: 'smooth' });
  });
  

  const products = document.querySelectorAll('.product');
const saleContainer = document.querySelector('.sale-container');

const saleName = document.getElementById('sale-product-name');
const saleDescription = document.getElementById('sale-product-description');
const saleImage = document.getElementById('sale-product-image');
const priceNumber = document.getElementById('price-number');

products.forEach(product => {
  product.addEventListener('click', () => {
    const name = product.getAttribute('data-name');
    const price = product.getAttribute('data-price');
    const description = product.getAttribute('data-description');

    const productImage = product.querySelector('img');
    const imageSrc = productImage ? productImage.src : '';

    saleName.textContent = name;
    priceNumber.textContent = price.replace(' caps', '');
    saleDescription.textContent = description;
    saleImage.src = imageSrc;

    saleContainer.classList.add('show');

    saleContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


  
  document.getElementById('close-sale').addEventListener('click', () => {
    saleContainer.classList.remove('show');
  });
  