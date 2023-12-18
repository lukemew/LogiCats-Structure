
     // Função para navegar para a página aula.html com o título correspondente
     function navegarParaAula(titulo) {
        // Modifique a variável conforme necessário
        let valorVariavel;
    
        // Defina o valor da variável com base no título
        switch (titulo.toLowerCase()) {
          case 'pilhas':
            valorVariavel = 1;
            break;
          case 'filas':
            valorVariavel = 2;
            break;
          case 'arvores':
            valorVariavel = 3;
            break;
          case 'arrays':
            valorVariavel = 4;
            break;
          case 'listas':
            valorVariavel = 5;
            break;
          case 'heaps':
            valorVariavel = 6;
            break;
          case 'hash-tables':
            valorVariavel = 7;
            break;
          case 'grafos':
            valorVariavel = 8;
            break;
          // Adicione mais casos conforme necessário...
          default:
            valorVariavel = 0; // Valor padrão
        }
    
        // Navegue para aula.html com o título e a variável personalizada
        window.location.href = `aula.html?titulo=${titulo}&valorVariavel=${valorVariavel}`;
      }
      
    document.addEventListener("DOMContentLoaded", function () {

        function lerArquivo(urlDaEstrutura) {
            const urlDoArquivo = `../textos/${urlDaEstrutura}`;
        
            return fetch(urlDoArquivo)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Erro ao carregar o arquivo: ${response.status}`);
                    }
                    return response.json(); // Aqui, response.json() analisa a resposta como JSON
                })
                .then(itemsPilhas => {
                    console.log('Conteúdo do arquivo:', itemsPilhas);
        
                    // Retorne o array para que ele possa ser utilizado após o encadeamento de promises
                    return itemsPilhas;
                })
                .catch(error => {
                    console.error('Deu erro moral:', error);
                    // Retorna um array vazio (ou outra coisa apropriada) em caso de erro
                    return [];
                });
        }
      
        

  let currentIndex = 0;
  let items = [1];
      
  const updateContent = (valor) => {
    const conteudoAula = document.querySelector("#conteudo-aula");
    const valorVariavel = valor;
    const nomeEstrutura = mostrarConteudoPersonalizado(valorVariavel);

    switch (nomeEstrutura) {
      case "Pilhas":
        lerArquivo("Pilhas.txt").then(result => {
            items = result;
        })
        break;
      case "Filas":
        lerArquivo("Filas.txt").then(result => {
            items = result;
        })
        break;
      case "Árvores":
        lerArquivo("Arvores.txt").then(result => {
            items = result;
        })
        break;
      case "Arrays":
        lerArquivo("Arrays.txt").then(result => {
            items = result;
        })
        break;
      case "Listas":
        lerArquivo("Listas.txt").then(result => {
            items = result;
        })
        break;
      case "Heaps":
        lerArquivo("Heaps.txt").then(result => {
            items = result;
        })
        break
      case "Hash Tables":
        lerArquivo("HashTables.txt").then(result => {
            items = result;
        })
        break;
      case "Grafos":
        lerArquivo("Grafos.txt").then(result => {
            items = result;
        })
        break
      default:
        
    }

    // elemento para aplicar uma opacidade e efeito de transição na hora de trocar o conteúdo exibido na tela de aula
    setTimeout(() => {
      setTimeout(() => {
          conteudoAula.innerHTML = `<h3>${items[currentIndex].titulo}</h3><p>${items[currentIndex].conteudo}</p><img id="imagem_ensino" src=${items[currentIndex].imagem}>`;
          
          var img = document.getElementById("imagem_ensino");
  
          // Essa parte faz uma verificação para ver se o "src" da imagem está vazio ou não, e é adicionado um evento onload na imagem para que a verificação seja feita após o carregamento
          img.onload = function() {
              if (img.src == "" || img.src == undefined) {
                  img.style.display = 'none';
              } else {
                  img.style.display = 'block';
              }
              conteudoAula.querySelector('p').style.opacity = 1;
          };
  
          // Se ocorrer um erro ao carregar a imagem, trata o evento para garantir que a verificação seja feita
          img.onerror = function() {
              img.style.display = 'none';
              conteudoAula.querySelector('p').style.opacity = 1;
          };
  
      }, 300);
  
      conteudoAula.querySelector('p').style.opacity = 0;
  }, 200);

  
  
  const navbar = document.querySelector("#navbar");
  navbar.innerHTML = "";
  items.forEach((item, index) => {
    const navbarCircle = document.createElement("div");
    navbarCircle.classList.add("navbar-circle");
    navbarCircle.textContent = `0${index + 1}`;
    navbarCircle.addEventListener("click", () => jumpToItem(index));

    // Adiciona a classe "not-seen" aos itens não vistos
   if (index > currentIndex) {
    navbarCircle.classList.add("not-seen");
 }

 navbar.appendChild(navbarCircle);
  });
};

      // Função para exibir o conteúdo correspondente ao valor da variável
      const mostrarConteudoPersonalizado = (valor) => {
  switch (valor) {
    case 1:
      return "Pilhas";
    case 2:
      return "Filas";
    case 3:
      return "Árvores";
    case 4:
      return "Arrays";
    case 5:
      return "Listas";
    case 6:
      return "Heaps";
    case 7:
      return "Hash Tables";
    case 8:
      return "Grafos";
    default:
      return "Conteúdo padrão";
  }
};
    
const showNextItem = () => {
    currentIndex = Math.min(currentIndex + 1, items.length - 1);
    updateContent(valorVariavel);
  };

  const showPreviousItem = () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateContent(valorVariavel);
  };

  const jumpToItem = (index) => {
    currentIndex = Math.min(Math.max(parseInt(index), 0), items.length - 1);
    updateContent(valorVariavel);
  };

  const backButton = document.querySelector("#back-button");
  const nextButton = document.querySelector("#next-button");

  backButton.addEventListener("click", showPreviousItem);
  nextButton.addEventListener("click", showNextItem);

  // Obtém parâmetros da URL
  const urlParams = new URLSearchParams(window.location.search);
  const valorVariavel = parseInt(urlParams.get('valorVariavel')) || 0;

  // Altera o valor da variável personalizada conforme necessário
  const nomeEstrutura = mostrarConteudoPersonalizado(valorVariavel);

  // Exibe o conteúdo personalizado na inicialização
  document.querySelector("#nome-estrutura").textContent = nomeEstrutura;

  updateContent(valorVariavel);
});
