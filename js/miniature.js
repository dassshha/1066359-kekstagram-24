const picTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pics = document.querySelector('.pictures');
const picsFragment = document.createDocumentFragment();

const createPic = (photo) => {
  const pic = picTemplate.cloneNode(true);
  const img = pic.querySelector('.picture__img');
  img.src = photo.url;
  const likes = pic.querySelector('.picture__likes');
  likes.textContent = photo.likes;
  const comments = pic.querySelector('.picture__comments');
  comments.textContent = photo.comments.length;
  picsFragment.append(pic);
};

const createPics = (photos) => {
  photos.forEach((photo) => {
    createPic(photo);
  });
  pics.appendChild(picsFragment);
};

export {createPics};

