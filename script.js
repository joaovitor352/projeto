const produtos = [
    { nome: "Paracetamol 500mg", validade: "2025-08-01", lote: "M123", secao: "Medicamentos", imagem: "https://via.placeholder.com/300x120?text=Paracetamol" },
    { nome: "Serve Dorflex", validade: "2025-07-30", lote: "S987", secao: "Serve", imagem: "https://via.placeholder.com/300x120?text=Serve+Dorflex" },
    { nome: "Vitamina C", validade: "2025-07-29", lote: "V321", secao: "Vitaminas", imagem: "https://via.placeholder.com/300x120?text=Vitamina+C" },
    { nome: "Whey protrein", validade: "2025-08-05", lote: "S222", secao: "Suplementos", imagem: "https://via.placeholder.com/300x120?text=Omega3" },
    { nome: "Desodorante Roll-On", validade: "2025-07-28", lote: "D654", secao: "Desodorante", imagem: "https://via.placeholder.com/300x120?text=Desodorante" },
    { nome: "Escova Dental", validade: "2025-08-15", lote: "HB789", secao: "Higiene Bucal", imagem: "https://via.placeholder.com/300x120?text=Escova" },
    { nome: "Sabonete Neutro", validade: "2025-08-10", lote: "SB555", secao: "Sabonete", imagem: "https://via.placeholder.com/300x120?text=Sabonete" },
    { nome: "Absorvente Noturno", validade: "2025-07-29", lote: "AB111", secao: "Absorvente", imagem: "https://via.placeholder.com/300x120?text=Absorvente" },
    { nome: "Dipirona MIP", validade: "2025-07-30", lote: "MIP443", secao: "MIPs", imagem: "https://via.placeholder.com/300x120?text=Dipirona+MIP" },
    { nome: "Vitamina B3", validade: "2025-07-29", lote: "V857", secao: "Vitaminas", imagem: "https://via.placeholder.com/300x120?text=Vitamina+C" },
  ];
  
  const secoes = [
    "Vitaminas", "Suplementos", "MIPs", "Desodorante",
    "Higiene Bucal", "Sabonete", "Absorvente",
    "Medicamentos", "Serve"
  ];
  
  const diasParaVencer = 7;
  
  function criarLayoutSecoes() {
    const container = document.getElementById("secoes-container");
  
    secoes.forEach(secao => {
      const div = document.createElement("div");
      div.className = "secao";
      div.id = `secao-${secao}`;
      div.innerHTML = `<h2>${secao}</h2>`;
      container.appendChild(div);
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
        const secao = document.getElementById(`secao-${produto.secao}`);
        if (secao) secao.appendChild(alerta);
      }
    });
  }
  
  function mostrarSecao(secaoId) {
    document.querySelectorAll('.secao').forEach(secao => {
      secao.classList.remove('mostrar');
    });
  
    const secaoAtual = document.getElementById(`secao-${secaoId}`);
    if (secaoAtual) {
      secaoAtual.classList.add('mostrar');
    }
  }
  
  // Inicializa
  criarLayoutSecoes();
  checarVencimentos();
  mostrarSecao("Vitaminas"); // Mostra a aba padrão
  