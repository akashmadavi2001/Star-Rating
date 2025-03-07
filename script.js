const stars = document.querySelectorAll('.stars img');

stars.forEach((star, index1) => {
    star.addEventListener('click', () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.src = "./star.png": star.src = "./star-black.png";
        });
    });
});