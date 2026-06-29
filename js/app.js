// Renderiza a lista de itens e cuida do formulário.
(function () {
  "use strict";

  // Ano automático no rodapé
  const anoEl = document.getElementById("ano");
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  // Renderiza serviços a partir do arquivo de dados
  const dadosSite = window.DADOS_SITE || null;
  const lista = document.getElementById("lista-itens");
  if (lista && dadosSite && Array.isArray(dadosSite.servicos)) {
    lista.innerHTML = dadosSite.servicos.map(function (item) {
      const icone = item.icone || '✦';
      return (
        '<li class="card card-service">' +
          '<div class="service-icon">' + escapar(icone) + '</div>' +
          '<h3>' + escapar(item.nome) + '</h3>' +
          '<p>' + escapar(item.descricao) + '</p>' +
          (item.categoria ? '<span class="service-badge">' + escapar(item.categoria) + '</span>' : '') +
        '</li>'
      );
    }).join("");
  }

  // Atualiza links de contato e redes sociais a partir do arquivo de dados
  const contato = dadosSite && dadosSite.contato ? dadosSite.contato : null;
  if (contato) {
    const emailContato = document.getElementById("email-contato");
    if (emailContato) {
      emailContato.href = "mailto:" + contato.email;
      emailContato.textContent = contato.email;
    }

    const whatsappContato = document.getElementById("whatsapp-contato");
    if (whatsappContato) {
      whatsappContato.href = "https://wa.me/" + contato.whatsapp;
    }

    const instagramLink = document.getElementById("instagram-link");
    if (instagramLink) {
      instagramLink.href = contato.instagram;
    }

    const tiktokLink = document.getElementById("tiktok-link");
    if (tiktokLink) {
      tiktokLink.href = contato.tiktok;
    }

    const whatsappLink = document.getElementById("whatsapp-link");
    if (whatsappLink) {
      whatsappLink.href = "https://wa.me/" + contato.whatsapp;
    }

    const gmailLink = document.getElementById("gmail-link");
    if (gmailLink) {
      gmailLink.href = "mailto:" + contato.email;
    }
  }

  // Formulário com validação acessível
  const form = document.querySelector(".form");
  const status = document.getElementById("form-status");
  if (form) {
    form.addEventListener("submit", function (e) {
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const assunto = form.assunto.value.trim();
      const mensagem = form.mensagem.value.trim();

      if (!nome || !email || !assunto || !mensagem) {
        e.preventDefault();
        status.textContent = "⚠ Preencha todos os campos obrigatórios.";
        status.className = "form-status erro";
        return;
      }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        e.preventDefault();
        status.textContent = "⚠ E-mail inválido.";
        status.className = "form-status erro";
        return;
      }

      const subjectInput = form.querySelector('input[name="_subject"]');
      if (subjectInput) {
        subjectInput.value = "Novo contato pelo site RT Serviços - " + assunto;
      }

      const replyToInput = form.querySelector('input[name="_replyto"]');
      if (replyToInput) {
        replyToInput.value = email;
      }

      status.textContent = "Enviando sua mensagem...";
      status.className = "form-status ok";
    });
  }

  function escapar(txt) {
    const div = document.createElement("div");
    div.textContent = String(txt == null ? "" : txt);
    return div.innerHTML;
  }
})();