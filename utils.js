
export function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
}

export function criarElementoCliente(cliente, excluirCallback) {
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${cliente.nome}</strong> - ${cliente.email}
    <button type="button">Excluir</button>
  `;
  li.querySelector("button").addEventListener("click", () => excluirCallback(cliente._id));
  return li;
}