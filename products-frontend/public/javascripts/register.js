console.log("=== REGISTER ===");

// Ações
function registerProduct() {
  console.log("Registrando Produto...");

  const data = {
    name: document.querySelector("#name").value,
    quantity: document.querySelector("#quantity").value,
    price: document.querySelector("#price").value,
  };

  const endpoint = "http://localhost/products";

  const config = {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-type": "application/json",
    }),
  };

  fetch(endpoint, config)
    .then(registerProductSuccess)
    .catch(registerProductError);
}

function registerProductSuccess(res) {
  if (res.statusText === "Created") {
    location.href = "/";
  }
}

function registerProductError(err) {
  console.error(err);
}

// Mapeando Eventos
document
  .querySelector(".btn-primary")
  .addEventListener("click", registerProduct);