
    document.addEventListener("DOMContentLoaded", function () {
  const itemsPilhas = [
    {
      titulo: "Item 1: Conteúdo do Item 1 (Pilhas)",
      conteudo: "Conteúdo das Pilhas: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  
    // Adicione mais objetos conforme necessário
  ];

  const itemsFilas = [
    {
      titulo: "Item 1: Conteúdo do Item 1 (Filas)",
      conteudo: "Conteúdo das Filas: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
   
    // Adicione mais objetos conforme necessário
  ];
  const itemsArvores = [
    {
      titulo: "Item 1: Conteúdo do Item 1 (Arvores)",
      conteudo: "Conteúdo das Arvores: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      titulo: "Item 1: Conteúdo do Item 1 (Arvores)",
      conteudo: "leonardo viado.",
    },
  
    // Adicione mais objetos conforme necessário
  ];

  const itemsArrays = [
    {
      titulo: "Item 1: Conteúdo do Item 1 (ArraysitemsArrays)",
      conteudo: "Conteúdo das ArraysitemsArrays: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
   
    // Adicione mais objetos conforme necessário
  ];
  const itemsListas = [
    {
      titulo: "Item 1: Conteúdo do Item 1 (Listas)",
      conteudo: "Conteúdo das Listas: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  
    // Adicione mais objetos conforme necessário
  ];

  const itemsHeaps = [
    {
      titulo: "Item 1: Conteúdo do Item 1 (Heaps)",
      conteudo: "Conteúdo das Heaps: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
   
    // Adicione mais objetos conforme necessário
  ];
  const itemsHashTables = [
    {
      titulo: "Item 1: Conteúdo do Item 1 (HitemsHashTables)",
      conteudo: "Conteúdo das itemsHashTables: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  
    // Adicione mais objetos conforme necessário
  ];

  const itemsGrafos = [
    {
      titulo: "Item 1: Conteúdo do Item 1 (Filas)",
      conteudo: "Conteúdo das Filas: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
   
    // Adicione mais objetos conforme necessário
  ];

  // Repita o padrão para outros casos do switch

  let currentIndex = 0;
  let items;

  const updateContent = (valor) => {
    const conteudoAula = document.querySelector("#conteudo-aula");
    const valorVariavel = valor; // Modifique conforme necessário
    const nomeEstrutura = mostrarConteudoPersonalizado(valorVariavel);

    switch (nomeEstrutura) {
      case "Pilhas":
        items = itemsPilhas;
        break;
      case "Filas":
        items = itemsFilas;
        break;
      case "Árvores":
        items = itemsArvores;
        break;
      case "Arrays":
        items = itemsArrays;
        break;
      case "Listas":
        items = itemsListas;
        break;
      case "Heaps":
        items = itemsHeaps;
        break
      case "Hash Tables":
        items = itemsHashTables;
        break;
      case "Grafos":
        items = itemsGrafos;
        break
      default:
        items = []; // Adapte conforme necessário
    }

    // elemento para aplicar uma opacidade e efeito de transição na hora de trocar o conteúdo exibido na tela de aula
    setTimeout(() => {
        setTimeout(() => {conteudoAula.innerHTML = `<p>${items[currentIndex].conteudo}</p>`
        conteudoAula.querySelector('p').style.opacity = 1;
    }, 300);
        conteudoAula.querySelector('p').style.opacity = 0;
    }, 200);
    
    
  const progress = ((currentIndex + 1) / items.length) * 100;
  document.querySelector(".aula__progresso progress").setAttribute("value", progress);

  const navbar = document.querySelector("#navbar");
  navbar.innerHTML = "";
  items.forEach((item, index) => {
    const navbarCircle = document.createElement("div");
    navbarCircle.classList.add("navbar-circle");
    navbarCircle.textContent = `${index + 1}`;
    navbarCircle.addEventListener("click", () => jumpToItem(index));
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
    // Adicione mais casos conforme necessário
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

  // Obtenha parâmetros da URL
  const urlParams = new URLSearchParams(window.location.search);
  const valorVariavel = parseInt(urlParams.get('valorVariavel')) || 0;

  // Altere o valor da variável personalizada conforme necessário
  const nomeEstrutura = mostrarConteudoPersonalizado(valorVariavel);

  // Exiba o conteúdo personalizado na inicialização
  document.querySelector("#nome-estrutura").textContent = nomeEstrutura;

  updateContent(valorVariavel);
});
