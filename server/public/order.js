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

const test = () => {
  const out = {};
  const userInfo = document.getElementsByTagName("input");
  for (let i = 0; i < userInfo.length; i++) {
    console.log(userInfo[i].value);
    console.log(userInfo[i].id);
  }
};

const checkInputs = () => {
  let goNext = true;
  const requierd = [
    document.getElementById("width").value,
    document.getElementById("dept").value,
    document.getElementById("hight").value,

    document.getElementById("firstName").value,
    document.getElementById("lastName").value,
    document.getElementById("email").value,
    document.getElementById("adress").value,
  ];
  for (let i = 0; i < requierd.length; i++) {
    if (!requierd[i]) {
      console.log(`Du mangler ${requierd[i]}`);
      goNext = false;
    }
  }
  if (goNext) sendData();
};

const sendData = async () => {
  const data = {
    table: {
      color: document.getElementById("rgbOut").innerHTML,
      width: document.getElementById("width").value,
      depth: document.getElementById("dept").value,
      hight: document.getElementById("hight").value,
    },
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("midleName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    adress: document.getElementById("adress").value,
    extras: document.getElementById("extras").value,
  };

  const sendTheData = await fetch("http://localhost:3000/kake", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  });
};
