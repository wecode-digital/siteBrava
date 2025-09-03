import "./sass/SecaoQuemSomosDesk.scss";
import LogoBravaCinza from "../../../../../public/assets/imagens/logo/logoBravaCinza.svg";
import LogoConverte from "../../../../../public/assets/imagens/logo/logoConverte.svg";
import LogoWecode from "../../../../../public/assets/imagens/logo/logoWecode.svg";
import logoCentric from "../../../../../public/assets/imagens/logo/logoCentric.svg"
import Image from "next/image";

const SecaoQuemSomosDesk = () => {
  return (
    <div className="quem-somos__container-desk">
      <div className="quem-somos__header">
        <h4 className="header__title2">Quem somos</h4>
        <h3 className="header__title1">
          Valorizamos <span className="text-highlight">pessoas</span> e
          impulsionamos <span className="text-highlight">negócios</span>
        </h3>
        <p className="header__text1">
          Somos um grupo que oferece diferentes soluções para diferentes
          necessidades, dentro do ecossistema do mercado digital.
        </p>
      </div>
      <div className="quem-somos__body">
        <div className="body__company">
          <div className="body__company__logo">
            <Image src={LogoBravaCinza} alt="Logo Brava Cinza" />
          </div>
          <div className="body__company__info">
            <p className="body__company__title">Consultoria</p>
            <p className="body__company__text">
              Especializada em implantação, diagnóstico e evolução de projetos
              de e-commerce e marketplace.
            </p>
          </div>
        </div>
        {/* <div className="body__company">
          <div className="body__company__logo">
            <Image src={LogoConverte} alt="Logo Brava Cinza" />
          </div>
          <div className="body__company__info">
            <p className="body__company__title">Educação</p>
            <p className="body__company__text">
              Cursos in company para o mercado de e-commerce, marketplace e
              marketing digital
            </p>
          </div>
        </div> */}
        <div className="body__company">
          <div className="body__company__logo">
            <Image src={LogoWecode} alt="Logo Brava Cinza" />
          </div>
          <div className="body__company__info">
            <p className="body__company__title">Tecnologia</p>
            <p className="body__company__text">
              Certificada em implantação, migração e suporte da plataforma VTEX
            </p>
          </div>
        </div>
        <div className="body__company">
          <div className="body__company__logo">
            <Image src={logoCentric} alt="Logo Centric Cinza" />
          </div>
          <div className="body__company__info">
            <p className="body__company__title">Mídia Paga</p>
            <p className="body__company__text">
              Performance e gestão de tráfego pago para operações de e-commerce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecaoQuemSomosDesk;
