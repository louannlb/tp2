// À vous de jouer !

document.addEventListener("DOMContentLoaded", function() {

    fetch('https://637d41d916c1b892ebca9a5a.mockapi.io/api/discs')
   .then(response => response.json())
    
   .then(data => {
   const pas7 = data.filter(album => album.id != 7);
   const itemsContainer = document.getElementById('items');
    
   pas7.forEach(album => {
    
   
    
   const article = document.createElement('article');
    
   article.innerHTML = `
    
    <a href="./product.html?id=${album.id}">
    
   <img src="${album.cover_url}" alt="${album.title}">
    
    <h3 class="productName">${album.title} - ${album.artist}</h3>
    
    <p class="productDescription">${album.price} €</p>
    
    </a>
    
   `;
    
   itemsContainer.appendChild(article);
    
    });
    
         })
    
    });
    
    