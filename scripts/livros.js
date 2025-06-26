const container = document.getElementById("livros"); // Seleciona o elemento onde os livros serão exibidos
  livros.forEach(livro => { // Itera(faz uma ação) sobre cada livro na lista
    const card = document.createElement("section");// Cria um novo elemento div para cada livro
    card.className = "livro";// Adiciona a classe "livro" para estilização
    card.innerHTML = `
      <h2>${livro.titulo}</h2>
      <p>${livro.sinopse}</p>
      <p><strong>Autor:</strong> ${livro.autor}</p>
    `; // Define o conteúdo HTML do card, título, sinopse e autor do livro
    container.appendChild(card);// Adiciona o card ao container
  });
