import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  MessageCircle,
  PackageCheck,
  Sparkles,
} from "lucide-react";

function MotifGlyph({ kind }: { kind: "leaf" | "bowl" | "seed" | "sun" | "spoon" }) {
  if (kind === "leaf") {
    return (
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <path d="M19 88C23 43 52 18 99 20 96 66 72 94 24 99" />
        <path d="M25 94 91 27M48 72l-3-29M64 57l27 1M35 83l-2-19M76 44l17 1" />
      </svg>
    );
  }
  if (kind === "bowl") {
    return (
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <path d="M18 51h84c-5 31-19 47-42 47S23 82 18 51Z" />
        <path d="M26 43c12-14 25-20 34-20 13 0 25 7 35 20M38 64c8 7 14 10 22 10s15-3 23-10" />
      </svg>
    );
  }
  if (kind === "seed") {
    return (
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <path d="M60 17c27 18 37 40 28 63-8 20-34 27-51 12-21-19-10-50 23-75Z" />
        <path d="M59 28c9 24 7 44-7 61M42 48c15 3 28 12 39 25" />
      </svg>
    );
  }
  if (kind === "spoon") {
    return (
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <ellipse cx="40" cy="38" rx="17" ry="24" />
        <path d="m51 57 42 45M81 91l14-14" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="20" />
      <path d="M60 11v20M60 89v20M11 60h20M89 60h20M25 25l14 14M81 81l14 14M95 25 81 39M39 81 25 95" />
    </svg>
  );
}

function MotifPanel() {
  return (
    <div className="motif-panel" aria-hidden="true">
      <span className="motif-cell motif-word">OBÁ</span>
      <span className="motif-cell motif-clay"><MotifGlyph kind="leaf" /></span>
      <span className="motif-cell motif-gold"><MotifGlyph kind="bowl" /></span>
      <span className="motif-cell motif-forest"><MotifGlyph kind="seed" /></span>
      <span className="motif-cell motif-cream"><MotifGlyph kind="spoon" /></span>
      <span className="motif-cell motif-indigo"><MotifGlyph kind="sun" /></span>
    </div>
  );
}

const whatsappNumber = "5511984123254";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function productAsset(filename: string) {
  return `${basePath}/products/${filename}`;
}

function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const tradicionalFlavors = [
  "Milho",
  "Cenoura",
  "Laranja",
  "Fubá com goiabada",
  "Chocolate",
  "Formigueiro",
  "Fubá",
  "Baunilha",
];

const coberturaFlavors = [
  "Chocolate",
  "Creme de Nutella",
  "Churros",
  "Ninho",
  "Limão",
  "Cream cheese com goiabada",
  "Maracujá",
  "Cenoura com chocolate",
  "Morango",
];

const boloTradicional = [
  "Brigadeiro",
  "Brigadeiro branco",
  "Doce de leite",
  "Merengue",
  "Mousse de maracujá",
  "Creme de confeiteiro",
  "Prestígio",
];

const boloEspecial = [
  "Ninho",
  "Brigadeiro com Nutella",
  "Ganache",
  "Nozes",
  "Cream cheese",
];

const salgados = [
  "Coxinha",
  "Bolinho de queijo",
  "Risole",
  "Calabresa com requeijão",
  "Brócolis",
  "Bolinho de carne",
  "Enroladinho de salsicha",
  "Cheddar, bacon e cebola caramelizada",
  "Dois queijos",
];

const kits = [
  {
    name: "Kit 1",
    price: "R$ 250",
    items: ["1 kg de bolo", "100 salgados", "50 docinhos"],
  },
  {
    name: "Kit 2",
    price: "R$ 400",
    items: ["2 kg de bolo", "200 salgados", "100 docinhos"],
  },
  {
    name: "Kit 3",
    price: "R$ 680",
    items: ["3 kg de bolo", "300 salgados", "200 docinhos"],
  },
];

function WhatsAppButton({
  label = "Pedir pelo WhatsApp",
  message,
  dark = false,
}: {
  label?: string;
  message: string;
  dark?: boolean;
}) {
  return (
    <a
      className={dark ? "button button-dark" : "button"}
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle aria-hidden="true" size={19} strokeWidth={2.2} />
      {label}
    </a>
  );
}

function FlavorList({ items }: { items: string[] }) {
  return (
    <ul className="flavor-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Obá Bolos — início">
          <span className="brand-mark">O</span>
          <span>
            <strong>OBÁ</strong>
            <small>BOLOS</small>
          </span>
        </a>

        <nav aria-label="Navegação principal">
          <a href="#cardapio">Cardápio</a>
          <a href="#historia">Nossa história</a>
          <a href="#kits">Kits</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          className="header-cta"
          href={whatsappLink("Olá, Bruna! Vim pelo site da Obá Bolos e quero fazer um pedido.")}
          target="_blank"
          rel="noreferrer"
        >
          Fazer um pedido
          <ArrowUpRight aria-hidden="true" size={17} />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-motif-strip" aria-hidden="true">
          <span>folha</span><i /><span>fogo</span><i /><span>mesa</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Confeitaria artesanal · por Bruna</p>
          <h1>
            Sabor que celebra
            <em> histórias.</em>
          </h1>
          <p className="hero-lead">
            Bolos, doces e salgados feitos para encontros que merecem presença,
            cuidado e muita personalidade.
          </p>
          <div className="hero-actions">
            <WhatsAppButton message="Olá, Bruna! Conheci a Obá Bolos pelo site e gostaria de fazer um pedido." />
            <a className="text-link" href="#cardapio">
              Ver cardápio
              <ArrowDown aria-hidden="true" size={17} />
            </a>
          </div>
          <div className="hero-facts" aria-label="Principais informações">
            <div>
              <strong>A partir de R$ 20</strong>
              <span>Caseirinhos</span>
            </div>
            <div>
              <strong>Pedidos sob encomenda</strong>
              <span>Consulte disponibilidade</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Bolo personalizado e docinhos produzidos pela Obá Bolos">
          <span className="hero-orbit orbit-one" aria-hidden="true" />
          <span className="hero-orbit orbit-two" aria-hidden="true" />
          <img
            className="hero-product"
            src={productAsset("peacock-cake-v2.webp")}
            alt="Bolo artesanal azul e dourado com pavão produzido pela Obá Bolos"
          />
          <span className="floating-note note-one">feito por Bruna</span>
          <span className="floating-note note-two">encomendas</span>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span>role para descobrir</span>
          <ArrowDown size={15} />
        </div>
      </section>

      <section className="story section" id="historia">
        <div className="section-number">01</div>
        <div className="story-heading">
          <p className="eyebrow dark">A força do nome, o afeto do feito à mão</p>
          <h2>Uma confeitaria com memória, presença e identidade.</h2>
        </div>
        <div className="story-copy">
          <p>
            A Obá Bolos nasce do trabalho artesanal de Bruna e do desejo de
            transformar receitas em momentos marcantes. Cada encomenda é feita
            com atenção aos detalhes, do sabor à apresentação.
          </p>
          <p>
            O nome Obá carrega a força que inspira a marca. Essa história aparece
            no cuidado, nas cores e na personalidade de criações feitas para
            aniversários, celebrações e encontros de todos os tamanhos.
          </p>
          <a
            className="story-link"
            href="https://www.instagram.com/obabolosconfeitaria/"
            target="_blank"
            rel="noreferrer"
          >
            <Camera aria-hidden="true" size={18} />
            Acompanhar no Instagram
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
        <MotifPanel />
      </section>

      <section className="craft-gallery section" aria-labelledby="galeria-titulo">
        <div className="gallery-intro">
          <p className="eyebrow">Feito de verdade, apresentado com presença</p>
          <h2 id="galeria-titulo">Cada criação tem uma personalidade.</h2>
          <p>
            O trabalho real da Obá ganha luz, enquadramento e espaço — sem perder
            a textura artesanal que faz cada encomenda ser única.
          </p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-piece gallery-piece-blue">
            <span className="piece-number">01</span>
            <img src={productAsset("blue-cake-v2.webp")} alt="Bolo azul em degradê com detalhes metálicos" />
            <figcaption>Bolos temáticos</figcaption>
          </figure>
          <div className="gallery-manifesto">
            <span>feito à mão</span>
            <strong>cor · memória<br />gesto · sabor</strong>
            <MotifGlyph kind="leaf" />
          </div>
          <figure className="gallery-piece gallery-piece-yellow">
            <span className="piece-number">02</span>
            <img src={productAsset("yellow-cake-v2.webp")} alt="Bolo branco e amarelo decorado com girassol e rosa" />
            <figcaption>Flores e celebrações</figcaption>
          </figure>
        </div>
      </section>

      <section className="menu-section section" id="cardapio">
        <div className="section-intro">
          <div>
            <p className="eyebrow dark">Cardápio Obá</p>
            <h2>Escolha pelo desejo.</h2>
          </div>
          <p>
            Valores atuais do cardápio. Sabores, disponibilidade e detalhes da
            encomenda são confirmados diretamente com a Bruna.
          </p>
        </div>

        <div className="menu-grid">
          <article className="menu-card caseirinhos-card">
            <div className="card-topline">
              <span>01 · Caseirinhos</span>
              <Sparkles aria-hidden="true" size={20} />
            </div>
            <h3>Pequenos no tamanho. Grandes no afeto.</h3>
            <div className="price-row">
              <div><span>Tradicional G</span><strong>R$ 20</strong></div>
              <div><span>Com cobertura G</span><strong>R$ 30</strong></div>
              <div><span>Vulcão G</span><strong>R$ 37</strong></div>
            </div>
            <div className="flavor-columns">
              <div>
                <h4>Tradicionais</h4>
                <FlavorList items={tradicionalFlavors} />
              </div>
              <div>
                <h4>Coberturas e recheios</h4>
                <FlavorList items={coberturaFlavors} />
              </div>
            </div>
            <WhatsAppButton
              dark
              label="Encomendar caseirinho"
              message="Olá, Bruna! Vi os caseirinhos no site e quero consultar sabores e disponibilidade."
            />
          </article>

          <article className="menu-card cake-card">
            <div className="card-topline">
              <span>02 · Bolos por quilo</span>
              <span className="mini-label">sob encomenda</span>
            </div>
            <div className="cake-card-content">
              <div>
                <h3>Bolos que chegam para ocupar a mesa.</h3>
                <div className="cake-prices">
                  <div>
                    <span>Sabores tradicionais</span>
                    <strong>R$ 75<small>/kg</small></strong>
                    <FlavorList items={boloTradicional} />
                  </div>
                  <div>
                    <span>Sabores especiais</span>
                    <strong>R$ 85<small>/kg</small></strong>
                    <FlavorList items={boloEspecial} />
                  </div>
                </div>
                <p className="fruit-note">
                  Frutas à escolha: morango, abacaxi, ameixa e coco. Outras opções sob consulta.
                </p>
                <WhatsAppButton
                  dark
                  label="Pedir um bolo"
                  message="Olá, Bruna! Quero encomendar um bolo. Pode me ajudar a escolher tamanho, sabor e decoração?"
                />
              </div>
              <div className="cake-art" aria-hidden="true">
                <span className="cake-halo" />
                <img src={productAsset("black-gold-cake-v2.webp")} alt="" />
              </div>
            </div>
          </article>

          <article className="menu-card savory-card">
            <div className="savory-copy">
              <div className="card-topline">
                <span>03 · Salgados</span>
                <span className="mini-label">fritos ou congelados</span>
              </div>
              <h3>Crocantes por fora. Generosos por dentro.</h3>
              <FlavorList items={salgados} />
              <div className="savory-price-groups">
                <div>
                  <h4>Fritos</h4>
                  <p><span>20 un.</span><strong>R$ 18</strong></p>
                  <p><span>50 un.</span><strong>R$ 42</strong></p>
                  <p><span>100 un.</span><strong>R$ 80</strong></p>
                </div>
                <div>
                  <h4>Congelados</h4>
                  <p><span>20 un.</span><strong>R$ 15</strong></p>
                  <p><span>50 un.</span><strong>R$ 35</strong></p>
                  <p><span>100 un.</span><strong>R$ 65</strong></p>
                </div>
              </div>
              <WhatsAppButton
                dark
                label="Escolher salgados"
                message="Olá, Bruna! Quero fazer um pedido de salgados. Pode me confirmar os sabores e as quantidades disponíveis?"
              />
            </div>
            <div className="savory-art">
              <span>DESTAQUE</span>
              <img
                src={productAsset("salgado-v2.webp")}
                alt="Salgado artesanal recheado com cheddar, bacon e cebola caramelizada"
              />
              <p>Cheddar, bacon e cebola caramelizada</p>
            </div>
          </article>

          <article className="menu-card sweets-card">
            <div className="sweets-art">
              <img
                src={productAsset("docinhos-v2.webp")}
                alt="Seleção de docinhos artesanais da Obá Bolos"
              />
            </div>
            <div className="sweets-copy">
              <div className="card-topline">
                <span>04 · Docinhos</span>
                <span className="mini-label">consulte sabores</span>
              </div>
              <h3>Um final doce para qualquer celebração.</h3>
              <p>
                Brigadeiros e docinhos artesanais aparecem nos kits de festa e
                também podem ser consultados diretamente pelo WhatsApp.
              </p>
              <WhatsAppButton
                dark
                label="Consultar docinhos"
                message="Olá, Bruna! Vi os docinhos no site e quero consultar sabores, quantidades e valores."
              />
            </div>
          </article>
        </div>
      </section>

      <section className="kits section" id="kits">
        <div className="kits-heading">
          <p className="eyebrow">Tudo pronto para celebrar</p>
          <h2>Kits para reunir, cantar e dividir.</h2>
          <p>
            Bolo, salgados e docinhos em combinações pensadas para diferentes tamanhos de festa.
          </p>
        </div>
        <div className="kit-grid">
          {kits.map((kit, index) => (
            <article className="kit-card" key={kit.name}>
              <span className="kit-index">0{index + 1}</span>
              <h3>{kit.name}</h3>
              <ul>
                {kit.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <strong>{kit.price}</strong>
              <a
                href={whatsappLink(`Olá, Bruna! Quero consultar o ${kit.name} de ${kit.price}.`)}
                target="_blank"
                rel="noreferrer"
              >
                Quero este kit
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="order-flow section" id="contato">
        <div className="section-number">02</div>
        <div className="order-heading">
          <p className="eyebrow dark">Seu pedido, sem complicação</p>
          <h2>Escolha aqui. Combine tudo com a Bruna.</h2>
        </div>
        <ol className="steps">
          <li>
            <span>1</span>
            <div><strong>Escolha</strong><p>Veja sabores, formatos e kits no cardápio.</p></div>
          </li>
          <li>
            <span>2</span>
            <div><strong>Converse</strong><p>Envie sua ideia e a data pelo WhatsApp.</p></div>
          </li>
          <li>
            <span>3</span>
            <div><strong>Confirme</strong><p>Combine detalhes, disponibilidade e entrega.</p></div>
          </li>
        </ol>
        <div className="contact-card">
          <PackageCheck aria-hidden="true" size={28} />
          <div>
            <span>WhatsApp da Obá Bolos</span>
            <strong>(11) 98412-3254</strong>
          </div>
          <WhatsAppButton
            label="Falar com a Bruna"
            message="Olá, Bruna! Vim pelo site da Obá Bolos e quero conversar sobre uma encomenda."
          />
        </div>
      </section>

      <section className="instagram-band">
        <div>
          <Camera aria-hidden="true" size={21} />
          <span>@obabolosconfeitaria</span>
        </div>
        <p>Bolos reais. Histórias reais. Feitos pelas mãos da Bruna.</p>
        <a
          href="https://www.instagram.com/obabolosconfeitaria/"
          target="_blank"
          rel="noreferrer"
        >
          Ver Instagram
          <ArrowUpRight aria-hidden="true" size={17} />
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio" aria-label="Voltar ao início">
          <span className="brand-mark">O</span>
          <span><strong>OBÁ</strong><small>BOLOS</small></span>
        </a>
        <p>Bolos, doces e salgados artesanais.</p>
        <div>
          <a href="https://www.instagram.com/obabolosconfeitaria/" target="_blank" rel="noreferrer">Instagram</a>
          <a href={whatsappLink("Olá, Bruna! Vim pelo site da Obá Bolos.")} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </footer>

      <a
        className="mobile-whatsapp"
        href={whatsappLink("Olá, Bruna! Vim pelo site da Obá Bolos e quero fazer um pedido.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Fazer pedido pelo WhatsApp"
      >
        <MessageCircle aria-hidden="true" size={20} />
        Fazer pedido
      </a>
    </main>
  );
}
