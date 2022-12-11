const mainPictures = [
  `<img src="img/Bord.png" alt="" class="bilde" />`,
  `<img src="img/Bord m_farge.png" alt="" class="bilde" style="filter: hue-rotate(0deg)"/>`,
  `<img src="img/Bord m_farge.png" alt="" class="bilde" style="filter: hue-rotate(90deg)"/>`,
  `<img src="img/Bord m_farge.png" alt="" class="bilde" style="filter: hue-rotate(180deg)"/>`,
  `<img src="img/Bord m_farge.png" alt="" class="bilde" style="filter: hue-rotate(270deg)"/>`,
];
let curentPicture = 0;

const changeMainPicture = (amount) => {
  curentPicture += amount;
  if (curentPicture == -1) curentPicture = mainPictures.length - 1;
  if (curentPicture == mainPictures.length) curentPicture = 0;
  document.getElementById("mainImage").innerHTML = mainPictures[curentPicture];
  console.log("bilde skal være plass ", curentPicture);
  console.log("og heter ", mainPictures[curentPicture]);
};
