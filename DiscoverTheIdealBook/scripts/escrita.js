document.getElementById("publicar").addEventListener("click", () => { // Adiciona um evento de clique ao botão "publicar"
  const texto = document.getElementById("texto").value.trim();// Obtém o valor do campo de texto e remove espaços em branco no início e no final
  if (texto !== "") { // Verifica se o campo de texto não está vazio
    const div = document.getElementById("publicacoes");// Seleciona o elemento onde as publicações serão exibidas
    const blocoExistente = div.querySelector(".publicacao"); // Verifica se já existe(a professora não ensinou) e essa linha parece não ser necessária
    const bloco = document.createElement("div");// Cria um novo elemento div para a publicação
    bloco.className = "publicacao"; // Adiciona a classe "publicacao" para estilização
    bloco.textContent = texto; // Define o conteúdo de texto do bloco com o valor do campo de texto
    div.appendChild(bloco);// Adiciona o bloco de publicação ao elemento de publicações
    document.getElementById("texto").value = "";// Limpa o campo de texto após a publicação
  }
});