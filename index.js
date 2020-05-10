
const apiUrl = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
const dado_api =  document.querySelector("#card");
let data = [];
let current_page = 1;
let records_per_page = 2;


async function fetchCards() {
  return await fetch(apiUrl)
    .then(async(res) => await res.json())

}


function renderCards(card) {
  dado_api.innerHTML = "";
  card.map(renderCard);

}

function renderCard (card) {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="card">
      <img src="${card.photo}" />
      <h2>${card.name}</h2>
      <div>
      <p> tipo: ${card.property_type}</p><br>
      <p>Valor: R$ ${card.price},00</p>
      </div>
  `;
  
  dado_api.appendChild(div);
  
  
}

async function main(){
  data = await fetchCards();
  if(data[0]) {
    renderCards(data);
  }

  

}
function onOff() {
  document
    .querySelector("#modal")
    .classList.toggle("hide")

  // document
  //   .querySelector("body")
  //   .classList
  //   .toggle("hideScroll")
  
  // document
  //   .querySelector("#modal")
  //   .classList
  //   .toggle("addScroll")
}

// onOff();

main();
