console.log("Sveiciens no skripta");

function sodien() {
  let vardi = fetch('/api/vardi/sodien')
  .then(atbilde => atbilde.json())
  .then(dati => ielikt_sodien(dati));
}

function ielikt_sodien(vardi) {
  let e = document.getElementById("sodien");
  for (let vards of vardi) {
    e.innerHTML += vards + "  ";
  }
}

function meklet_vardu() {
  let v = document.getElementById("jautajums").value;
  let datums = fetch('/api/vardi/mekle/' + v)
  .then(atbilde => atbilde.json())
  .then(dati => ielikt_datumu(dati));
  console.log("Poga ir nospiesta: " + v);
}

function ielikt_datumu(datums) {
  let r = document.getElementById("rezultats");
  r.innerHTML = datums;
}

function meklet_pec_teksta() {
  let v = document.getElementById("burti").value;
  // let datums = fetch('/api/vardi/mekle/' + v)
  // .then(atbilde => atbilde.json())
  // .then(dati => ielikt_datumu(dati));
  console.log("Poga ir nospiesta: " + v);
}