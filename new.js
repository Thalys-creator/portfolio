
const API_URL = "https://crudcrud.com/api/dfddf63d1ec740b19c753de706826243/clientes";

const form = document.getElementById("clienteForm");
const listaClientes = document.getElementById("listaClientes");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email }),
    });

    if (!response.ok) throw new Error("Erro ao cadastrar cliente");

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    listarClientes();

  } catch (erro) {
    console.error(erro);
  }
});

// Listar clientes
async function listarClientes() {
  try {
    const response = await fetch(API_URL);
    const clientes = await response.json();

    listaClientes.innerHTML = "";
    clientes.forEach((cliente) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${cliente.nome}</strong> - ${cliente.email}
        <button onclick="excluirCliente('${cliente._id}')">Excluir</button>
      `;
      listaClientes.appendChild(li);
    });

  } catch (erro) {
    console.error("Erro ao listar clientes:", erro);
  }
}

// Excluir cliente
async function excluirCliente(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    listarClientes();
  } catch (erro) {
    console.error("Erro ao excluir cliente:", erro);
  }
}


listarClientes();