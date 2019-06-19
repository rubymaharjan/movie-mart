var xhtml = new XMLHttpRequest();
xhtml.open('get', 'https://api.themoviedb.org/3/movie/popular?api_key=004fe1ee41218ae53e75b9b4b7c47018&language=en-US&page=1');
xhtml.responseType = 'json';
xhtml.send();

var container = document.querySelector('.container')
var overlay = document.querySelector('.side-details')
xhtml.onload = function () {
    xhtml.response.results.forEach(movie => {

        var imgSection = document.createElement('div');
        imgSection.classList.add('img-section');

        var list = document.createElement('div');
        list.classList.add('list');

        var image = document.createElement('img');
        image.classList.add('content-img');
        image.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
        image.id = movie.id
        image.addEventListener('click', (event) => {
            sideBox(movie)

        })
        list.appendChild(image);
        imgSection.appendChild(list);



        var title = document.createElement('p');
        title.textContent = movie.title;
        list.appendChild(title);
        imgSection.appendChild(list);

        container.appendChild(imgSection)


    });



}

xhtml.onerror = function () {
    console.log("errorr")
}

function sideBox(movie) {

    var sideBanner = document.createElement('div');
    sideBanner.classList.add('side-banner');

    var containerSideImage = document.createElement('div');
    containerSideImage.classList.add('container-side-image');

    var sideImage = document.createElement('img');
    sideImage.classList.add('side-image');
    sideImage.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    // image.id = movie.id
    // image.addEventListener('click', (event) => {
    //     createModal(movie)
    // })
    containerSideImage.appendChild(sideImage);
    sideBanner.appendChild(containerSideImage);

    var sideTopic = document.createElement('h3');
    sideTopic.classList.add('side-topic');
    sideTopic.textContent = movie.title;
    sideBanner.appendChild(sideTopic);

    var sideDate = document.createElement('h4');
    sideDate.classList.add('side-date');
    sideDate.textContent = movie.release_date;
    sideBanner.appendChild(sideDate);

    var sideDetails = document.createElement('p');
    sideDetails.classList.add('side-info');
    sideDetails.textContent = movie.overview;
    sideBanner.appendChild(sideDetails);

    var sideCasts = document.createElement('p');
    sideCasts.classList.add('side-info');
    sideCasts.textContent = movie.overview;
    sideBanner.appendChild(sideCasts);

    overlay.appendChild(sideBanner)
}

// function createModal(movie) {
//     var modal = document.createElement('div');
//     modal.classList.add('modal');

//     var modalView = document.createElement('div');
//     modalView.classList.add('modal-view');

//     var modalContent = document.createElement('div');
//     modalContent.classList.add('modal-content');

//     var modalContent1 = document.createElement('div');
//     modalContent1.classList.add('modal-content1');

//     var modalContent2 = document.createElement('div');
//     modalContent2.classList.add('modal-content2');

//     var modalTopic = document.createElement('h2');
//     modalTopic.classList.add('modal-topic');
//     modalTopic.textContent = movie.title;
//     var modalDetails = document.createElement('p');
//     modalDetails.textContent = movie.overview;

//     var imageModal = document.createElement('img');
//     imageModal.classList.add('modal-image');
//     imageModal.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

//     var textnode = document.createElement("span");
//     textnode.classList.add('closeBtn');
//     textnode.innerHTML = "&times;"

//     window.addEventListener('click', (event) => {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     })
//     modal.appendChild(modalView);
//     modalView.appendChild(modalContent1);
//     modalView.appendChild(modalContent);
//     modalView.appendChild(modalContent2);

//     modalContent.appendChild(modalTopic);
//     modalContent.appendChild(modalDetails);

//     modalContent2.appendChild(textnode);

//     modalContent1.appendChild(imageModal);
//     overlay.appendChild(modal);

// }