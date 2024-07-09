console.log("=== LIST ===");

// Declaração Função Nomeada
function getAllProducts() {
  console.log("Buscando produtos...");

  const endpoint = "http://localhost/products";

  const config = {
    method: "GET",
  };

  fetch(endpoint, config)
    .then(convertToJson)
    .then(getAllProductsSuccess)
    .catch(getAllProductsError);
}

function convertToJson(res) {
  return res.json();
}

function getAllProductsSuccess(products) {
  // console.table(products);

  document.querySelector("table tbody").innerHTML = products
    .map((product) => {
      const { id, name, price, quantity } = product;
      return `<tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td>${quantity}</td>
      </tr>`;
    })
    .join("");
}

function getAllProductsError(error) {
  console.log(error.message);
}

// Executando Função Nomeada
getAllProducts();