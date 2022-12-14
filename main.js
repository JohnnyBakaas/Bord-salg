const mainPictures = [
  `<img src="img/Bord.png" alt="" class="bilde" />`,
  `<img src="img/Bord m_farge.png" alt="Skreddersydd bord" class="bilde" style="filter: hue-rotate(0deg)"/>`,
  `<img src="img/Bord m_farge.png" alt="Skreddersydd bord rød" class="bilde" style="filter: hue-rotate(30deg)"/>`,
  `<img src="img/Bord m_farge.png" alt="Skreddersydd bord mørke rød" class="bilde" style="filter: hue-rotate(90deg)"/>`,
  `<img src="img/Bord m_farge.png" alt="Skreddersydd bord mørke grønn" class="bilde" style="filter: hue-rotate(110deg)"/>`,
  `<img src="img/Bord m_farge.png" alt="Skreddersydd bord grønn" class="bilde" style="filter: hue-rotate(170deg)"/>`,
  `<img src="img/Bord m_farge.png" alt="Skreddersydd bord havgrønn" class="bilde" style="filter: hue-rotate(180deg)"/>`,
  `<img src="img/Bord m_farge.png" alt="Skreddersydd bord turkis" class="bilde" style="filter: hue-rotate(200deg)"/>`,
  `<img src="img/Bord m_farge.png" alt="Skreddersydd bord blå" class="bilde" style="filter: hue-rotate(290deg)"/>`,
  `<img src="img/Bord m_farge.png" alt="Skreddersydd bord lilla" class="bilde" style="filter: hue-rotate(320deg)"/>`,
];
let curentPicture = 0;

const changeMainPicture = (amount) => {
  curentPicture += amount;
  if (curentPicture == -1) curentPicture = mainPictures.length - 1;
  if (curentPicture == mainPictures.length) curentPicture = 0;
  document.getElementById("mainImage").innerHTML = mainPictures[curentPicture];
};
