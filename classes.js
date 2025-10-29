
export class ClienteService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async listar() {
    const response = await fetch(this.apiUrl);
    return await response.json();
  }

  async criar(cliente) {
    const response = await fetch(this.apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente)
    });
    return await response.json();
  }

  async excluir(id) {
    await fetch(`${this.apiUrl}/${id}`, { method: "DELETE" });
  }
}