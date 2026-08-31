export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Cabeçalho */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">OpenBrooks</h1>
            <p className="text-xs text-gray-500">
              Serviços profissionais em Angola
            </p>
          </div>

          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#servicos" className="hover:text-gray-600">
              Serviços
            </a>
            <a href="#como-funciona" className="hover:text-gray-600">
              Como funciona
            </a>
            <a href="#profissionais" className="hover:text-gray-600">
              Profissionais
            </a>
          </nav>

          <a
            href="#profissional"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Sou profissional
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block rounded-full border bg-white px-4 py-2 text-sm text-gray-600">
              Uma nova forma de encontrar serviços
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Encontre profissionais para resolver o que precisa.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Encontre profissionais de confiança em Angola, compare opções e
              entre em contacto de forma simples e rápida.
            </p>

            {/* Pesquisa */}
            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border bg-white p-3 shadow-sm">
              <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
                <input
                  type="text"
                  placeholder="O que você precisa?"
                  className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-gray-300"
                />

                <input
                  type="text"
                  placeholder="Onde? Ex.: Luanda"
                  className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-gray-300"
                />

                <button className="rounded-xl bg-black px-7 py-3 font-semibold text-white hover:bg-gray-800">
                  Pesquisar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section id="servicos" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Encontre ajuda
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Serviços populares
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["🔌", "Eletricistas", "Instalações e reparações elétricas"],
            ["🚰", "Canalizadores", "Água, torneiras e canalização"],
            ["❄️", "Ar condicionado", "Instalação e manutenção"],
            ["🛠️", "Manutenção", "Reparações e serviços gerais"],
            ["💻", "Informática", "Computadores e assistência técnica"],
            ["🏗️", "Construção", "Obras, reformas e acabamentos"],
            ["🧹", "Limpeza", "Limpeza residencial e comercial"],
            ["🚗", "Mecânica", "Reparação e manutenção automóvel"],
          ].map(([icon, title, description]) => (
            <button
              key={title}
              className="rounded-2xl border bg-white p-6 text-left transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-3xl">{icon}</div>

              <h3 className="mt-5 text-lg font-bold">{title}</h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {description}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Simples e rápido
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Como funciona?
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              [
                "01",
                "Procure",
                "Escolha o serviço que você precisa e indique a sua localização.",
              ],
              [
                "02",
                "Escolha",
                "Veja profissionais, serviços, avaliações e informações.",
              ],
              [
                "03",
                "Contacte",
                "Entre em contacto e solicite um orçamento.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border bg-white p-8"
              >
                <span className="text-sm font-bold text-gray-400">
                  {number}
                </span>

                <h3 className="mt-5 text-xl font-bold">{title}</h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profissionais */}
      <section id="profissionais" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Para profissionais
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Tem uma profissão ou negócio?
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Crie o seu perfil no OpenBrooks, apresente os seus serviços e
              encontre novos clientes.
            </p>

            <a
              id="profissional"
              href="#cadastro"
              className="mt-8 inline-block rounded-full bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
            >
              Quero ser profissional
            </a>
          </div>

          <div className="rounded-3xl bg-gray-900 p-8 text-white">
            <p className="text-sm text-gray-400">OPENBROOKS</p>

            <h3 className="mt-4 text-2xl font-bold">
              Mostre o seu trabalho.
            </h3>

            <p className="mt-4 leading-7 text-gray-300">
              Tenha um perfil profissional, receba pedidos e construa a sua
              reputação através das avaliações dos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 OpenBrooks. Todos os direitos reservados.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-900">
              Sobre
            </a>
            <a href="#" className="hover:text-gray-900">
              Contacto
            </a>
            <a href="#" className="hover:text-gray-900">
              Privacidade
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
        }
