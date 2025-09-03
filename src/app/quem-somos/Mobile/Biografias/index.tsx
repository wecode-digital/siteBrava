import "./sass/Biografia.scss";
import "../SecaoQuemSomos/sass/SecaoQuemSomos.scss";
import FotoFelipe from "../../../../../public/assets/imagens/fotos/img-Felipe.png";
import FotoBernardo from "../../../../../public/assets/imagens/fotos/img-Bernardo.png";
import FotoAmanda from "../../../../../public/assets/imagens/fotos/img-Amanda.png";
import Image from "next/image";

const Biografias = () => {
  return (
    <div className="biografias__container">
      <h2 className="biografias__title">Nossos consultores</h2>
      <div className="biografias__body">
        <Image className="biografias__img" src={FotoFelipe} alt="Foto Felipe" />
        <div className="biografias__body__desc">
          <p className="body__title">Felipe S. Soares</p>
          <p className="body__text">
            Graduado em Administração de Empresas, com MBA em Marketing Digital
            pela ESPM, possui mais de 13 anos de atuação no mercado de negócios
            digitais, com passagens por Lojas Colombo, Arezzo, ESPM e E-commerce
            Brasil. Conquistou premiações de Melhor Profissional de E-commerce
            pelo eBit e ABCOMM e atualmente é sócio da Brava e Wecode.
          </p>
        </div>
      </div>
      <div className="biografias__body">
        <Image className="biografias__img" src={FotoBernardo} alt="Foto Felipe" />
        <div className="biografias__body__desc">
          <p className="body__title">Bernardo Finimundi</p>
          <p className="body__text">
            Graduado em Administração de Empresas, possui mais de 13 anos de
            atuação no mercado de negócios digitais, com passagens por empresas
            de grande porte como Lojas Colombo, Grupo Dass (detentora das marcas
            Fila & Umbro) e Miolo Wine Group. Possui experiência em projetos
            B2C, B2B, D2C e Marketplace. Atualmente é consultor na Brava
            Consultoria em E-commerce.
          </p>
        </div>
      </div>
      <div className="biografias__body">
        <Image className="biografias__img" src={FotoAmanda} alt="Foto Felipe" />
        <div className="biografias__body__desc">
          <p className="body__title">Amanda Seimetz</p>
          <p className="body__text">
            Graduada em Relações Públicas, com Pós Graduação em Gestão de
            Negócios Digitais. Implementou o e-commerce da Piccadilly,
            estruturou a área dentro da organização e foi responsável pela
            gestão de toda a operação e performance dos negócios digitais
            durante 7 anos. Foi palestrante da Conferência E-commerce Brasil RS,
            em 2018 e 2021, e da Locaweb Digital Conference, em 2022. Atualmente
            é consultora da Brava Consultoria em E-commerce.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Biografias;
