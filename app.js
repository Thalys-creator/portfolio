                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
import { ClienteService } from "./classes.js";
import { limparCampos, criarElementoCliente } from "./utils.js";

const API_URL = "https://crudcrud.com/api/SEU_ID/clientes";
const clienteService = new ClienteService(API_URL);
const form = document.getElementById("clienteForm");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  await clienteService.criar({ nome, email });
  limparCampos();
  listarClientes();
});
    
const listaClientes = document.getElementById("listaClientes");

async function listarClientes() {
  const clientes = await clienteService.listar();
  listaClientes.innerHTML = "";
  clientes.forEach(cliente => {
    const li = criarElementoCliente(cliente, excluirCliente);
    listaClientes.appendChild(li);
  });
}

async function excluirCliente(id) {
  await clienteService.excluir(id);
  listarClientes();
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  await clienteService.criar({ nome, email });
  limparCampos();
  listarClientes();
});

listarClientes();