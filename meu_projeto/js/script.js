document.addEventListener("DOMContentLoaded", () => {

  const formCadastro = document.querySelector(".formulario-cadastro");

  if (formCadastro) {
    formCadastro.addEventListener("submit", (event) => {
      event.preventDefault(); 

      
      const nome = document.querySelector("#nome_completo").value.trim();
      const email = document.querySelector("#email").value.trim();
      const cpf = document.querySelector("#cpf").value.trim();
      const telefone = document.querySelector("#telefone").value.trim();
      const dataNascimento = document.querySelector("#data_nascimento").value;
      const endereco = document.querySelector("#endereco").value.trim();
      const cep = document.querySelector("#cep").value.trim();
      const cidade = document.querySelector("#cidade").value.trim();
      const estado = document.querySelector("#estado").value;

     
      if (
        !nome ||
        !email ||
        !cpf ||
        !telefone ||
        !dataNascimento ||
        !endereco ||
        !cep ||
        !cidade ||
        !estado
      ) {
        alert("⚠️ Por favor, preencha todos os campos obrigatórios!");
        return;
      }

     
      const dadosUsuario = {
        nome,
        email,
        cpf,
        telefone,
        dataNascimento,
        endereco,
        cep,
        cidade,
        estado,
      };

      localStorage.setItem("usuarioCadastro", JSON.stringify(dadosUsuario));

      alert(`✅ Cadastro realizado com sucesso!\nBem-vindo(a), ${nome}!`);

     
      window.location.href = "/meu_projeto/index.html";
    });
  }

 
  const formContato = document.querySelector(".formulario");

  if (formContato) {
    formContato.addEventListener("submit", (event) => {
      event.preventDefault();

      const nome = formContato.querySelector('input[name="nome"]').value.trim();
      const email = formContato.querySelector('input[name="email"]').value.trim();
      const telefone = formContato.querySelector('input[name="telefone"]').value.trim();
      const whatsapp = formContato.querySelector('input[name="whatsapp"]').checked;

      if (!nome || !email || !telefone) {
        alert("⚠️ Por favor, preencha todos os campos obrigatórios!");
        return;
      }

      alert(`📩 Obrigado pelo contato, ${nome}! Em breve entraremos em contato.`);
      formContato.reset();
    });
  }


  const navLinks = document.querySelectorAll("nav a");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    if (link.href.includes(currentPath.split("/").pop())) {
      link.style.color = "#02a4a2"; 
    }
  });
});