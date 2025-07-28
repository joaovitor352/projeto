const produtos = [
    {
      nome: "Paracetamol 500mg",
      validade: "2025-08-01",
      lote: "M12345",
      secao: "Medicamentos",
      imagem: "https://via.placeholder.com/300x120?text=Paracetamol"
    },
    {
      nome: "Shampoo Anticaspa",
      validade: "2025-07-29",
      lote: "C98765",
      secao: "Cosméticos",
      imagem: "https://via.placeholder.com/300x120?text=Shampoo"
    },
    {
      nome: "Sabonete Líquido",
      validade: "2025-08-03",
      lote: "H54321",
      secao: "Higiene",
      imagem: "https://via.placeholder.com/300x120?text=Sabonete"
    },
    {
      nome: "Fralda Tamanho M",
      validade: "2025-07-30",
      lote: "B11223",
      secao: "Bebês",
      imagem: "https://via.placeholder.com/300x120?text=Fralda"
    },
    {
      nome: "Ômega 3",
      validade: "2025-08-05",
      lote: "S33221",
      secao: "Suplementos",
      imagem: "https://via.placeholder.com/300x120?text=Omega3"
    },
    {
      nome: "Curativo Adesivo",
      validade: "2025-07-28",
      lote: "P22334",
      secao: "Primeiros Socorros",
      imagem: "https://via.placeholder.com/300x120?text=Curativo"
    }
  ];
  
  const secoes = [
    "Medicamentos",
    "Cosméticos",
    "Higiene",
    "Bebês",
    "Suplementos",
    "Primeiros Socorros"
  ];
  
  const diasParaVencer = 7;
  
  function criarLayoutSecoes() {
    const container = document.getElementById("secoes-container");
  
    secoes.forEach(secao => {
      const divSecao = document.createElement("div");
      divSecao.className = "secao";
      divSecao.id = `secao-${secao}`;
      divSecao.innerHTML = `<h2>${secao}</h2>`;
      container.appendChild(divSecao);
    });
  }
  
  function checarVencimentos() {
    const hoje = new Date();
  
    produtos.forEach(produto => {
      const dataValidade = new Date(produto.validade);
      const diffDias = Math.ceil((dataValidade - hoje) / (1000 * 60 * 60 * 24));
  
      if (diffDias <= diasParaVencer && diffDias >= 0) {
        const alerta = document.createElement("div");
        alerta.className = "alerta";
        alerta.innerHTML = `
          <img src="${produto.imagem}" alt="${produto.nome}">
          <h3>${produto.nome}</h3>
          <p><strong>Lote:</strong> ${produto.lote}</p>
          <p><strong>Validade:</strong> ${produto.validade}</p>
          <p style="color:red;"><strong>⚠ Faltam ${diffDias} dia(s) para vencer!</strong></p>
        `;
  
        const divSecao = document.getElementById(`secao-${produto.secao}`);
        if (divSecao) {
          divSecao.appendChild(alerta);
        }
      }
    });
  }
  
  criarLayoutSecoes();
  checarVencimentos();
  