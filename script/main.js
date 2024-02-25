// Função para navegar para a página aula.html com o título correspondente
function navegarParaAula(titulo) {
  // é definido uma let valorVariavel para manipulação futura
  let valorVariavel;

  //  um switch case para identificar o id do botao que foi clicado e assim definir um valor de variavel para el
  switch (titulo.toLowerCase()) {
    case "pilhas":
      valorVariavel = 1;
      break;
    case "filas":
      valorVariavel = 2;
      break;
    case "arvores":
      valorVariavel = 3;
      break;
    case "arrays":
      valorVariavel = 4;
      break;
    case "listas":
      valorVariavel = 5;
      break;
    case "heaps":
      valorVariavel = 6;
      break;
    case "hash-tables":
      valorVariavel = 7;
      break;
    case "grafos":
      valorVariavel = 8;
      break;
    default:
      valorVariavel = 0; // Valor padrão
  }

  // Navega para aula.html com o título e a variável personalizada
  window.location.href = `aula.html?titulo=${titulo}&valorVariavel=${valorVariavel}`;
}

// função para carregar o conteúdo do DOM como um todo
document.addEventListener("DOMContentLoaded", function () {
  // essa função irá receber como parâmetro de um switch a url de um dos textos de acordo com o nome da estrutura que estiver sendo exibida
  function lerArquivo(urlDaEstrutura) {
    const urlDoArquivo = `/textos/${urlDaEstrutura}`;

    // a mesma irá retornar uma promessa, indo atrás da url do arquivo
    return fetch(urlDoArquivo)
      .then((response) => {
        if (!response.ok) {
          // se der erro, vai exibir no console e com o status do erro
          throw new Error(`Erro ao carregar o arquivo: ${response.status}`);
        }
        return response.json(); // Aqui, response.json() analisa a resposta como JSON
      })
      .catch((error) => {
        console.error("Deu erro moral:", error);
        // Retorna um array vazio (ou outra coisa apropriada) em caso de erro
        return [];
      });
  }

  // é criado a variavel currentIndex para identificar qual a posição atual do que está sendo exibido
  let currentIndex = 0;
  // a variável items receberá futuramente os componentes vindo da promessa anterior, e os armazenará em formato de arrays
  let items = [0, 0, 0, 0, 0];

  const updateContent = (valor) => {
    const conteudoAula = document.querySelector("#conteudo-aula");
    const valorVariavel = valor;
    const nomeEstrutura = mostrarConteudoPersonalizado(valorVariavel);
    history.pushState({}, null, `/index.html`);
    switch (nomeEstrutura) {
      case "Pilhas":
        lerArquivo("Pilhas.txt").then((result) => {
          items = result;
        });
        break;
      case "Filas":
        lerArquivo("Filas.txt").then((result) => {
          items = result;
        });
        break;
      case "Árvores":
        lerArquivo("Arvores.txt").then((result) => {
          items = result;
        });
        break;
      case "Arrays":
        lerArquivo("Arrays.txt").then((result) => {
          items = result;
        });
        break;
      case "Listas":
        lerArquivo("Listas.txt").then((result) => {
          items = result;
        });
        break;
      case "Heaps":
        lerArquivo("Heaps.txt").then((result) => {
          items = result;
        });
        break;
      case "Hash Tables":
        lerArquivo("HashTables.txt").then((result) => {
          items = result;
        });
        break;
      case "Grafos":
        lerArquivo("Grafos.txt").then((result) => {
          items = result;
        });
        break;
      default:
        items = [];
    }

    // elemento para aplicar uma opacidade e efeito de transição na hora de trocar o conteúdo exibido na tela de aula
    setTimeout(() => {
      setTimeout(() => {
        conteudoAula.innerHTML = `<h3>${items[currentIndex].titulo}</h3><p id="texto_ensino">${items[currentIndex].conteudo}</p><img id="imagem_ensino" src=${items[currentIndex].imagem}>`;

        var img = document.getElementById("imagem_ensino");
        var text = document.getElementById("texto_ensino");

        // Verifica se o conteúdo do elemento de texto está vazio
        if (text.textContent.trim() === "") {
          text.style.display = "none";
        } else {
          text.style.display = "block";
        }

        // Essa parte faz uma verificação para ver se o "src" da imagem está vazio ou não, e é adicionado um evento onload na imagem para que a verificação seja feita após o carregamento
        img.onload = function () {
          if (img.src == "" || img.src == undefined) {
            // se nao houver imagem, nao ira exibir nada
            img.style.display = "none";
          } else {
            // se houver imagen, ira exibir
            img.style.display = "block";
          }
          conteudoAula.querySelector("p").style.opacity = 1;
        };

        // Se ocorrer um erro ao carregar a imagem, trata o evento para garantir que a verificação seja feita
        img.onerror = function () {
          img.style.display = "none";
          conteudoAula.querySelector("p").style.opacity = 1;
        };
      }, 300);

      conteudoAula.querySelector("p").style.opacity = 0;
    }, 200);

    // criado uma variavel para manipular item com id navbar
    const navbar = document.querySelector("#navbar");
    // define um espaço vazio na navbar para que a mesma nao fique se repetindo
    navbar.innerHTML = "";
    items.forEach((item, index) => {
      // para cada um dos items, irá fazer esse processo, um novo botão na navbar, e etc
      const navbarCircle = document.createElement("div");
      navbarCircle.classList.add("navbar-circle");
      navbarCircle.textContent = `0${index + 1}`;
      // caso ela receba um clique, irá chamar a função jumpToItem passando o parâmetro do número que foi clicado para que possa avançar para o mesmo
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

  // função para retornar 1 item na navegação (Anterior)
  const showNextItem = () => {
    currentIndex = Math.min(currentIndex + 1, items.length - 1);
    updateContent(valorVariavel);
  };

  // função para avançar 1 item na navegação (Próximo)
  const showPreviousItem = () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateContent(valorVariavel);
  };

  // função para pular para um determinado número na navbar
  const jumpToItem = (index) => {
    currentIndex = Math.min(Math.max(parseInt(index), 0), items.length - 1);
    updateContent(valorVariavel);
  };

  // cria uma variavel para o botao de retornar
  const backButton = document.querySelector("#back-button");
  // cria uma variavel para o botao de avançar
  const nextButton = document.querySelector("#next-button");

  // se o botão for clicado, irá chamar as funções devidas
  backButton.addEventListener("click", showPreviousItem);
  nextButton.addEventListener("click", showNextItem);

  // Obtém parâmetros da URL
  const urlParams = new URLSearchParams(window.location.search);
  const valorVariavel = parseInt(urlParams.get("valorVariavel")) || 0;

  // Altera o valor da variável personalizada conforme necessário
  const nomeEstrutura = mostrarConteudoPersonalizado(valorVariavel);

  // Exibe o conteúdo personalizado na inicialização
  document.querySelector("#nome-estrutura").textContent = nomeEstrutura;

  // atualiza o conteúdo da página de acordo com o valor da variável
  updateContent(valorVariavel);

  // window.onbeforeunload = function () {
  //   // Exibe uma mensagem de confirmação (opcional)
  //   return "Tem certeza de que deseja sair?";
  // };
});
