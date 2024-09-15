import React, { useEffect, useRef } from 'react';
import './App.css';
import img1 from "./img/pessoa-no-celular.png"
import img2 from "./img/image-removebg-preview.png"
import img3 from "./img/image 11.png"
import img4 from "./img/gustavo 2.png"
import serv1 from "./img/serv1.png"
import serv2 from "./img/serv2.png"
import serv3 from "./img/serv3.png"
import logo from "./img/logo-porto33.png"
import cris from "./img/cristiano.png"
import leo from "./img/leo.png"


function App() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const vantagemRef = useRef(null);
  const integrantesRef = useRef(null);
  const feedbackRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(heroRef.current);
    observer.observe(servicesRef.current);
    observer.observe(vantagemRef.current);
    observer.observe(integrantesRef.current);
    observer.observe(feedbackRef.current);
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo">Porto Seguro</div>
        <nav>
          <ul className="nav-list">
            <li>Home</li>
            <li>Serviços</li>
            <li>Contato</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        <div className="hero-text">
          <h1>Atendimento com Inteligência Artificial</h1>
          <p>Atendimento inovador com IA. Soluções ágeis e personalizadas!</p>
          <button>Saiba mais</button>
        </div>
        <div className="hero-image">
          <img src={img1} alt="Hero" />
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="services-section">
        <div className="service">
          <img src={img2} alt="UBI Icon" />
          <h3>UBI</h3>
          <p>Economize em seu seguro com descontos!</p>
        </div>
        <div className="service">
          <img src={img2} alt="Assistência Icon" />
          <h3>Assistência 24h</h3>
          <p>Suporte 24/7 para emergências!</p>
        </div>
        <div className="service">
          <img src={img2} alt="Preventiva Icon" />
          <h3>Preventiva</h3>
          <p>Manutenção para manter seu carro seguro.</p>
        </div>
        <div className="service">
          <img src={img2} alt="IA no Seguro Icon" />
          <h3>IA no Seguro</h3>
          <p>Automatize com inteligência artificial.</p>
        </div>
      </section>

      {/* Vantagens Section */}
      <section ref={vantagemRef} className="vantagens-section">
        <div className="vantagem-text">
          <h2>Vantagem Porto Seguro</h2>
          <ul>
            <li>Suporte contínuo para emergências e dúvidas, disponível 24/7.</li>
            <li>Ofertas especiais e benefícios.</li>
            <li>Recompensas por permanência.</li>
            <li>Atendimento personalizado com IA.</li>
            <li>Aplicativo móvel intuitivo com IA.</li>
            <li>Coberturas flexíveis e customizáveis.</li>
          </ul>
          <button>Veja mais</button>
        </div>
        <div className="vantagem-image">
          <img src={img3} alt="Vantagens" />
        </div>
      </section>

      {/* Integrantes Section */}
      <section ref={integrantesRef} className="integrantes-section">
        <h2>Integrantes</h2>
        <div className="integrantes">
          <div className="integrante">
            <img src={img4} alt="Gustavo Lima" />
            <p>Gustavo Lima - Front-End e Business</p>
          </div>
          <div className="integrante">
            <img src={leo} alt="João Silva" />
            <p>João Silva - Back-End Developer</p>
          </div>
          <div className="integrante">
            <img src={img4} alt="Ana Souza" />
            <p>Ana Souza - UI/UX Designer</p>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section ref={feedbackRef} className="feedback-section">
        <h2>Feedback de nossos clientes</h2>
        <div className="feedback">
          <div className="feedback-item">
            <img src={cris} alt="Jose Almeida" className="feedback-img" />
            <div className="feedback-text">
              <p>Jose Almeida</p>
              <p>Estou extremamente satisfeito com a Porto Seguro! O atendimento foi impecável e a equipe demonstrou um profissionalismo excepcional. </p>
            </div>
          </div>
          <div className="feedback-item">
            <img src={img4} alt="Cristiano Robinho" className="feedback-img" />
            <div className="feedback-text">
              <p>Cristiano Robinho</p>
              <p>Minha experiência com a Porto Seguro foi incrível! O suporte fornecido foi além das minhas expectativas, mostrando um cuidado genuíno com o cliente. </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços Section */}
      <section className="servicos-section">
        <h2>Nossos serviços</h2>
        <p>Feitos especialmente para cada um!</p>
        <div className="servicos">
          <div className="servico-item">
            <img src={serv1} alt="Serviço 1" className="servico-image" />
            <h3>Plataforma de Bem-Estar</h3>
            <p>By Porto Seguro | <span>undefined</span></p>
          </div>
          <div className="servico-item">
            <img src={serv2} alt="Serviço 2" className="servico-image" />
            <h3>Previsão de Riscos</h3>
            <p>By Porto Seguro | <span>undefined</span></p>
          </div>
          <div className="servico-item">
            <img src={serv3} alt="Serviço 3" className="servico-image" />
            <h3>Prevenção de Fraudes</h3>
            <p>By Porto Seguro | <span>undefined</span></p>
          </div>
        </div>
      </section>

      {/* Seção de Feedback com Email */}
      <section className="feedback-email-section">
        <div className="feedback-email-content">
          <h2>Nós ajude a melhorar sua experiência!</h2>
          <form className="email-form">
            <input type="email" placeholder="Entre com email" />
          </form>
        </div>
      </section>

      <footer className="footer">
  <div className="footer-content">
    <div className="footer-left">
      <img src={logo} alt="Logo Porto" className="footer-logo" />
      <p>Conte com todo nosso cuidado também, cartões e serviços Porto em um só lugar de forma rápida e segura. Baixe agora!</p>
    </div>
    
    <div className="footer-right">
      <div className="footer-column">
        <h4>Rede social</h4>
        <ul>
          <li><a href="#instagram">Instagram</a></li>
          <li><a href="#facebook">Facebook</a></li>
          <li><a href="#site">Site</a></li>
          <li><a href="#whatsapp">Whatsapp</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Páginas</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Rm dos alunos</h4>
        <ul>
          <li>556857</li>
          <li>555672</li>
          <li>555708</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2024 Porto Seguro - Todos os direitos reservados.</p>
  </div>
</footer>

    </div>
  );
}

export default App;
