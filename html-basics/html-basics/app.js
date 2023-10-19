let photosGrid = document.querySelector(".photos");
let placeholder = document.querySelector(".placeholder");
const API_URL = "https://jsonplaceholder.typicode.com/photos";

const photoItem = (photo) => {
  return `
        <div class="photos__item" key="${photo.id}">
          <div class="photos__item--image">
            <img src="${photo.url}" alt="photo" />
          </div>
          <div class="photos__item--description">
            <h5 class="photos__item--image-title">${photo.title}</h5>
          </div>
        </div>
  `;
};

const renderPhotoItems = (photos) => {
  photos.forEach((photo) => {
    photosGrid.innerHTML += photoItem(photo);
  });
};

const getPhotos = async (url) => {
  try {
    placeholder.textContent = "Something huge is coming...";
    const response = await fetch(url);
    const photos = await response.json();
    const slicedPhotos = photos.slice(0, 50);
    if (response.ok) {
      renderPhotoItems(slicedPhotos);
      placeholder.textContent = "";
    }
  } catch (error) {
    placeholder.textContent = "Haaaaa something went wrong!, kindly refresh.";
    placeholder.classList.add("error-message");
    throw new Error("Failed to fetch photos");
  }
};

window.addEventListener("load", function () {
  getPhotos(API_URL);
});
