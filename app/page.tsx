<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>OpenBrooks</title>

  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }

    body {
      background: #f7f8fa;
      color: #111827;
    }

    header {
      background: white;
      border-bottom: 1px solid #e5e7eb;
      padding: 18px 6%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 24px;
      font-weight: 800;
      color: #111827;
    }

    nav {
      display: flex;
      gap: 10px;
    }

    button {
      border: 0;
      border-radius: 8px;
      padding: 11px 18px;
      cursor: pointer;
      font-weight: 600;
    }

    .btn-primary {
      background: #111827;
      color: white;
    }

    .btn-secondary {
      background: #f3f4f6;
      color: #111827;
    }

    main {
      max-width: 1100px;
      margin: auto;
      padding: 70px 20px;
    }

    .hero {
      text-align: center;
      padding: 60px 20px;
    }

    .hero h1 {
      font-size: 48px;
      margin-bottom: 20px;
    }

    .hero p {
      max-width: 650px;
      margin: auto;
      color: #6b7280;
      font-size: 18px;
      line-height: 1.6;
    }

    .hero button {
      margin-top: 30px;
      font-size: 16px;
    }

    .page {
      display: none;
      max-width: 500px;
      margin: 40px auto;
      background: white;
      padding: 35px;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,.06);
    }

    .page.active {
      display: block;
    }

    .page h2 {
      margin-bottom: 10px;
    }

    .page p {
      color: #6b7280;
      margin-bottom: 25px;
    }

    input {
      width: 100%;
      padding: 14px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      margin-bottom: 15px;
      font-size: 15px;
    }

    .form-button {
      width: 100%;
      margin-top: 5px;
    }

    .message {
      margin-top: 15px;
      text-align: center;
      font-size: 14px;
    }

    .dashboard {
      max-width: 900px;
      margin: 40px auto;
    }

    .dashboard-card {
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,.05);
    }

    .dashboard-card h2 {
      margin-bottom: 10px;
    }

    .dashboard-card p {
      color: #6b7280;
      margin-bottom: 25px;
    }

    .hidden {
      display: none !important;
    }

    footer {
      text-align: center;
      padding: 40px 20px;
      color: #9ca3af;
      font-size: 14px;
    }

    @media (max-width: 600px) {
      .hero h1 {
        font-size: 36px;
      }

      header {
        padding: 15px 20px;
      }

      nav button {
        padding: 9px 12px;
      }
    }
  </style>
</head>

<body>

<header>

  <div class="logo">OpenBrooks</div>

  <nav id="navigation">
    <button class="btn-secondary" onclick="mostrarPagina('inicio')">
      Início
    </button>

    <button class="btn-secondary" onclick="mostrarPagina('login')">
      Entrar
    </button>

    <button class="btn-primary" onclick="mostrarPagina('cadastro')">
      Criar conta
    </button>
  </nav>

</header>


<!-- INÍCIO -->

<section id="inicio" class="page active">

  <div class="hero">

    <h1>Bem-vindo ao OpenBrooks</h1>

    <p>
      Uma plataforma criada para conectar pessoas,
      ideias e oportunidades em um só lugar.
    </p>

    <button
      class="btn-primary"
      onclick="mostrarPagina('cadastro')">
      Começar agora
    </button>

  </div>

</section>


<!-- CADASTRO -->

<section id="cadastro" class="page">

  <h2>Criar conta</h2>

  <p>
    Crie sua conta gratuitamente no OpenBrooks.
  </p>

  <form onsubmit="criarConta(event)">

    <input
      type="text"
      id="nome"
      placeholder="Seu nome"
      required>

    <input
      type="email"
      id="emailCadastro"
      placeholder="Seu e-mail"
      required>

    <input
      type="password"
      id="senhaCadastro"
      placeholder="Palavra-passe"
      minlength="6"
      required>

    <button
      class="btn-primary form-button"
      type="submit">
      Criar conta
    </button>

  </form>

  <div id="cadastroMensagem" class="message"></div>

  <br>

  <button
    class="btn-secondary"
    onclick="mostrarPagina('login')">
    Já tenho uma conta
  </button>

</section>


<!-- LOGIN -->

<section id="login" class="page">

  <h2>Entrar</h2>

  <p>
    Entre na sua conta OpenBrooks.
  </p>

  <form onsubmit="entrar(event)">

    <input
      type="email"
      id="emailLogin"
      placeholder="Seu e-mail"
      required>

    <input
      type="password"
      id="senhaLogin"
      placeholder="Palavra-passe"
      required>

    <button
      class="btn-primary form-button"
      type="submit">
      Entrar
    </button>

  </form>

  <div id="loginMensagem" class="message"></div>

  <br>

  <button
    class="btn-secondary"
    onclick="mostrarPagina('cadastro')">
    Criar nova conta
  </button>

</section>


<!-- PAINEL -->

<section id="painel" class="page">

  <div class="dashboard">

    <div class="dashboard-card">

      <h2>Seu painel</h2>

      <p id="boasVindas">
        Bem-vindo ao OpenBrooks.
      </p>

      <button
        class="btn-primary"
        onclick="sair()">
        Sair da conta
      </button>

    </div>

  </div>

</section>


<footer>
  © 2026 OpenBrooks. Todos os direitos reservados.
</footer>


<script>

  /* ================================
     CONFIGURAÇÃO SUPABASE
  ================================= */

  const SUPABASE_URL = "https://openbrooks.supabase.co";

  const SUPABASE_ANON_KEY = "chave-publica-do-openbrooks";

  const supabaseClient =
    window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_ANON_KEY
    );


  /* ================================
     NAVEGAÇÃO
  ================================= */

  function mostrarPagina(pagina) {

    document
      .querySelectorAll(".page")
      .forEach(function(elemento) {

        elemento.classList.remove("active");

      });

    document
      .getElementById(pagina)
      .classList.add("active");

    window.scrollTo(0, 0);
  }


  /* ================================
     CRIAR CONTA
  ================================= */

  async function criarConta(event) {

    event.preventDefault();

    const nome =
      document.getElementById("nome").value;

    const email =
      document.getElementById("emailCadastro").value;

    const senha =
      document.getElementById("senhaCadastro").value;

    const mensagem =
      document.getElementById("cadastroMensagem");

    mensagem.textContent =
      "Criando sua conta...";


    const { data, error } =
      await supabaseClient.auth.signUp({

        email: email,

        password: senha,

        options: {

          data: {
            nome: nome
          }

        }

      });


    if (error) {

      mensagem.textContent =
        "Erro: " + error.message;

      return;
    }


    mensagem.textContent =
      "Conta criada! Verifique seu e-mail para confirmar a conta.";

  }


  /* ================================
     LOGIN
  ================================= */

  async function entrar(event) {

    event.preventDefault();

    const email =
      document.getElementById("emailLogin").value;

    const senha =
      document.getElementById("senhaLogin").value;

    const mensagem =
      document.getElementById("loginMensagem");

    mensagem.textContent =
      "Entrando...";


    const { data, error } =
      await supabaseClient.auth.signInWithPassword({

        email: email,

        password: senha

      });


    if (error) {

      mensagem.textContent =
        "E-mail ou palavra-passe incorretos.";

      return;
    }


    mensagem.textContent = "";

    mostrarPainel(data.user);

  }


  /* ================================
     MOSTRAR PAINEL
  ================================= */

  function mostrarPainel(user) {

    mostrarPagina("painel");

    const nome =
      user.user_metadata?.nome ||
      user.email ||
      "Usuário";

    document
      .getElementById("boasVindas")
      .textContent =
      "Bem-vindo, " + nome + "!";

    document
      .getElementById("navigation")
      .innerHTML = `

        <button
          class="btn-primary"
          onclick="mostrarPagina('painel')">
          Meu painel
        </button>

        <button
          class="btn-secondary"
          onclick="sair()">
          Sair
        </button>

      `;
  }


  /* ================================
     SAIR
  ================================= */

  async function sair() {

    await supabaseClient.auth.signOut();

    document
      .getElementById("navigation")
      .innerHTML = `

        <button
          class="btn-secondary"
          onclick="mostrarPagina('inicio')">
          Início
        </button>

        <button
          class="btn-secondary"
          onclick="mostrarPagina('login')">
          Entrar
        </button>

        <button
          class="btn-primary"
          onclick="mostrarPagina('cadastro')">
          Criar conta
        </button>

      `;

    mostrarPagina("inicio");
  }


  /* ================================
     VERIFICAR SESSÃO
  ================================= */

  async function verificarUsuario() {

    const {
      data: { session }
    } = await supabaseClient.auth.getSession();


    if (session?.user) {

      mostrarPainel(session.user);

    }

  }


  verificarUsuario();

</script>

</body>
</html>
