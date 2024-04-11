// À vous de jouer !
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('id');

    fetch(`https://637d41d916c1b892ebca9a5a.mockapi.io/api/discs/${albumId}`)
    .then(response => response.json())
    .then(album => {
        document.getElementById('title').textContent = album.title;
        document.getElementById('artist').textContent = album.artist;
        document.getElementById('year').textContent = album.year;
        document.getElementById('price').textContent = album.price;
        
        if (album.cover_url) {
            const coverElement = document.getElementById('cover');
            const imgElement = document.createElement('img');
            imgElement.src = album.cover_url;
            imgElement.alt = album.title;
            coverElement.appendChild(imgElement);
        }
    })
})
