const r = document.getElementById("myRangeRed");
const g = document.getElementById("myRangeGren");
const b = document.getElementById("myRangeBlue");

const out = document.getElementById("rgbOut");
const rep = document.getElementById("rgbRep");

const output = () => {
  out.innerHTML = `${r.value}, ${g.value}, ${b.value}`;
  rep.style.backgroundColor = `rgb(${r.value},${g.value},${b.value})`;
};

output();
