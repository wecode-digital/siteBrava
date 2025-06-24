'use client';

import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import Image from 'next/image';
import styles from "./sass/styles.module.scss";

//Profile pic
import felipeFarina from "../../../public/assets/imagens/client-profile-pic/felipe-carraro-photo.png"
import priscilaBaum from "../../../public/assets/imagens/client-profile-pic/priscila-baum-photo.png";
import giulianoBettanin from "../../../public/assets/imagens/client-profile-pic/giuliano-inbetta.png";
import viniciusMartini from "../../../public/assets/imagens/client-profile-pic/vinicius-ou-photo.png";
import liliamMantovani from "../../../public/assets/imagens/client-profile-pic/liliam-keko-photo.png";
import svenStihlPhoto from "../../../public/assets/imagens/client-profile-pic/sven-stihl-photo.png";
import vanessaStihlPhoto from "../../../public/assets/imagens/client-profile-pic/vanessa-stihl.png";

//svg
import playDepoimentos from "../../../public/assets/imagens/svg/play.svg"
import fecharModal from "../../../public/assets/imagens/svg/fechar-modal.svg"
import arrowEsquerda from "../../../public/assets/imagens/svg/left-arrow.svg"
import arrowDireita from "../../../public/assets/imagens/svg/right-arrow.svg"


const felipeHorizontal = "/assets/imagens/videos/depoimentos/felipe-carraro-horizontal.mp4";
const felipeVertical = "/assets/imagens/videos/depoimentos/felipe-carraro-vertical.mp4";

const priscilaHorizontal = "/assets/imagens/videos/depoimentos/priscila-piccaddily-horizontal.mp4";
const priscilaVertical = "/assets/imagens/videos/depoimentos/priscila-piccaddily-vertical.mp4";

const giulianoHorizontal = "/assets/imagens/videos/depoimentos/giuliano-bettanin-horizontal.mp4";
const giulianoVertical = "/assets/imagens/videos/depoimentos/giuliano-bettanin-vertical.mp4";

const viniciusHorizontal = "/assets/imagens/videos/depoimentos/vinicius-ou-horizontal.mp4";
const viniciusVertical = "/assets/imagens/videos/depoimentos/vinicius-ou-vertical.mp4";

const liliamDepoimento = "/assets/imagens/videos/depoimentos/liliam-keko.mp4";

const svenStihl = "/assets/imagens/videos/depoimentos/sven-vanessa-stihl.mp4";


const testimonials = [
  {
    type: 'double',
    testimonial: '&quotA nossa experiência foi fantástica, e a gente entende como <span>um marco na história da STIHL.</span>&quot',
    people: [
      {
        id: 'sven',
        name: 'Sven Laure',
        position: 'Head of Marketing Systems & E-Commerce',
        image: svenStihlPhoto,
      },
      {
        id: 'vanessa',
        name: 'Vanessa Spall',
        position: 'Analista de E-commerce da STIHL',
        image: vanessaStihlPhoto,
      }
    ],
    video: {
      horizontal: svenStihl,
      vertical: svenStihl,
    }
  },
  {
    name: 'Liliam Mantovani',
    position: 'Gerente de Marketing da Keko',
    image: liliamMantovani,
    testimonial: '&quotEu mais do que aconselho a consultoria da Brava <span>com certeza foi um investimento acertado</span>.&quot',
    video: {
      horizontal: liliamDepoimento,
      vertical: liliamDepoimento,
    }
  },
  {
    name: 'Felipe Farina',
    position: 'Gerente de E-commerce da Carraro',
    image: felipeFarina,
    testimonial: '&quotA consultoria nos ajudou muito desde o princípio, quando eles fizeram uma <span>imersão na empresa</span>, para <span>mapear todas as áreas</span> e todos os pontos críticos. Até o pós GO Live do projeto.&quot',
    video: {
      horizontal: felipeHorizontal,
      vertical: felipeVertical,
    }
  },
  {
    name: 'Priscila Baum',
    position: 'Gerente de E-commerce da PICCADILLY',
    image: priscilaBaum,
    testimonial: '&quotA consultoria da Brava trouxe a <span>expertise de estratégias do digital</span> para reestruturar o e-commerce, nos últimos anos, e <span>alavancar os resultados</span> de uma forma mais rápida na empresa, seguindo todos os desafios que a gente tinha na área.&quot',
    video: {
      horizontal: priscilaHorizontal,
      vertical: priscilaVertical,
    }
  },
  {
    name: 'Giuliano Bettanin',
    position: 'Gestor dos Canais Digitais da InBetta',
    image: giulianoBettanin,
    testimonial: '&quotQuando a gente fala de e-commerce a primeira coisa que tem que andar em conjunto no projeto é a <span>cultura dos funcionários</span> com o canal digital. A Brava nos ajudou a desenvolver todo <span>o modelo de negócio e alinhar as expectativas</span> entre todas as áreas e colaboradores.&quot',
    video: {
      horizontal: giulianoHorizontal,
      vertical: giulianoVertical,
    }
  },
  {
    name: 'Vinícius Martini',
    position: 'Gerente de Marketing da Martiplast',
    image: viniciusMartini,
    testimonial: '&quotA gente foi atrás de uma consultoria para <span>nos apoiar a acelerar esse desenvolvimento</span>, tanto de conhecimento, tanto de <span>aculturar</span> um pouco mais a empresa. Não só no como implementar um e-commerce, mas os benefícios disso.&quot',
    video: {
      horizontal: viniciusHorizontal,
      vertical: viniciusVertical,
    }
  },
  
];

const TestimonialSlider = ({ isMobile }: { isMobile: boolean }) => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [videoSrc, setVideoSrc] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Estado para armazenar o índice do vídeo atual
  const [videoSrc, setVideoSrc] = useState('');
  // const [isMobile, setIsMobile] = useState(true);
  const sliderRef = useRef(null); // Referência para o slider
  const [verticalOnDesk, setVerticalOnDesk] = useState(false);


  const openModal = (index) => {
    setCurrentVideoIndex(index);
    const videoUrl = !isMobile && testimonials[index].video.horizontal
      ? testimonials[index].video.horizontal
      : testimonials[index].video.vertical;
    setVideoSrc(videoUrl);
    setVerticalOnDesk(!isMobile && testimonials[index].video.horizontal ? false : true);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    if (!sliderRef || !sliderRef.current) return;
    //@ts-ignore
    sliderRef.current.slickGoTo(currentVideoIndex); // Vai pro slide do vídeo atual
    setVideoSrc('');
  }

    const handlePrevious = () => {
    const newIndex = currentVideoIndex > 0 ? currentVideoIndex - 1 : testimonials.length - 1;
    setCurrentVideoIndex(newIndex);
    const videoUrl = !isMobile && testimonials[newIndex].video.horizontal
      ? testimonials[newIndex].video.horizontal
      : testimonials[newIndex].video.vertical;
    setVideoSrc(videoUrl);
    setVerticalOnDesk(!isMobile && testimonials[newIndex].video.horizontal ? false : true);
  };

  const handleNext = () => {
    const newIndex = (currentVideoIndex + 1) % testimonials.length;
    setCurrentVideoIndex(newIndex);
    const videoUrl = !isMobile && testimonials[newIndex].video.horizontal
      ? testimonials[newIndex].video.horizontal
      : testimonials[newIndex].video.vertical;
    setVideoSrc(videoUrl);
    setVerticalOnDesk(!isMobile && testimonials[newIndex].video.horizontal ? false : true);
  };


  // const openModal = (videoUrl) => {
  //   setVideoSrc(videoUrl);
  //   setModalIsOpen(true);
  // }

  // const closeModal = () => {
  //   setModalIsOpen(false);
  //   setVideoSrc('');
  // }

  useEffect(() => {
    return () => {
      setVideoSrc(''); // limpa o estado ao desmontar
    };
  }, []);

  const settings = {
    centerMode: true,
    dots: true,
    centerPadding: '20px',
    slidesToShow: 3,
    arrows: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1,
          centerMode: true,
          arrows: false
        }
      }
    ]
  };


  return (
    <div className={styles.testimonyMainContainer}>
      <div className={styles.testimonyTitlesContainer}>
        <h2 className={styles.testimonyTitle}>Depoimentos</h2>
        <h3 className={styles.testimonySubtitle}>Confira alguns <span>depoimentos</span> de nossos clientes</h3>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialSlide}>
            <div className={styles.testimonialContent}>
              {testimonial.type === 'double' ? (
                <div className={styles.testimonialContentDouble}>
                  <div className={styles.testimonialProfile}>
                    <div className={styles.iconNameWrap}>
                      <div className={styles.testimonialLogos}>
                        <div className={styles.testimonialLogo}>
                          <Image src={testimonial.people?.[0]?.image} alt="Logo" className={styles.testimonialLogoImage} />
                        </div>
                        <div className={`${styles.testimonialLogo} ${styles.testimonialLogo2}`}>
                          <Image src={testimonial.people?.[1]?.image} alt="Logo" className={styles.testimonialLogoImage} />
                        </div>
                      </div>
                      <h3 className={styles.testimonialName}>{testimonial?.people && testimonial?.people[0]?.name} e {testimonial?.people && testimonial?.people[1]?.name}</h3>
                    </div>
                    <div className={styles.testimonialNamePosition}>
                      <p className={styles.testimonialPosition}>{testimonial?.people && testimonial?.people[0]?.position} e {testimonial?.people && testimonial?.people[1]?.position}</p>
                    </div>
                  </div>
                  <div className={styles.testimonialDescription}>
                    <p className={styles.testimonialDescriptionContent} dangerouslySetInnerHTML={{ __html: testimonial.testimonial }} />
                  </div>
                  <div className={styles.testimonialVideo}>
                    <button onClick={() => openModal(index)} className={styles.testimonialButtonVideo}>
                      <span>Assistir depoimento</span> <Image src={playDepoimentos} className={styles.testimonialVideoArrow} alt="" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className={styles.testimonialContentSingle}>
                  <Image src={testimonial?.image ?? ''} alt={testimonial?.name ?? ''} className={styles.testimonialImage} />
                  <div className={styles.testimonialNamePosition}>
                    <h3 className={styles.testimonialName}>{testimonial.name}</h3>
                    <p className={styles.testimonialPosition}>{testimonial.position}</p>
                  </div>
                  <div className={styles.testimonialDescription}>
                    <p className={styles.testimonialDescriptionContent} dangerouslySetInnerHTML={{ __html: testimonial.testimonial }} />
                  </div>
                  <div className={styles.testimonialVideo}>
                    <button onClick={() => openModal(index)} className={styles.testimonialButtonVideo}>
                      <span>Assistir depoimento</span> <Image src={playDepoimentos} className={styles.testimonialVideoArrow} alt="" />
                    </button>
                  </div>
                </div>
              )
              }
            </div>
          </div>
        ))}
      </Slider>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        contentLabel="Vídeo do Depoimento"
      >
        <div
          className={styles.modalContentInner}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={closeModal} className={styles.modalCloseButton}><Image src={fecharModal} alt="" /></button>
          <div className={verticalOnDesk ? `${styles.verticalVideoDesk} ${styles.modalNavigation}` : styles.modalNavigation}>
            <button onClick={handlePrevious} className={styles.modalArrowLeft}><Image src={arrowEsquerda} alt="" /></button>
            <iframe
              src={videoSrc}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Depoimento em Vídeo"
            ></iframe>
            <button onClick={handleNext} className={styles.modalArrowRight}><Image src={arrowDireita} alt="" /></button>
          </div>
        </div>
      </Modal>
    </div>
    // <div className={styles.testimonyMainContainer}>
    //   <div className={styles.testimonyTitlesContainer}>
    //     <h2 className={styles.testimonyTitle}>Depoimentos</h2>
    //     <h3 className={styles.testimonySubtitle}>Confira alguns <span>depoimentos</span> de nossos clientes</h3>
    //   </div>
    //   <Slider {...settings}>
    //     {testimonials.map((testimonial, index) => (
    //       <div key={index} className={styles.testimonialSlide}>
    //         <div className={styles.testimonialContent}>
    //           <div className={styles.testimonialProfile}>
    //             {testimonial.image && <Image src={testimonial.image} alt={testimonial.name} className={styles.testimonialImage} />}
    //             <div className={styles.testimonialNamePosition}>
    //               <h3 className={styles.testimonialName}>{testimonial.name}</h3>
    //               <p className={styles.testimonialPosition}>{testimonial.position}</p>
    //             </div>
    //           </div>
    //           <div className={styles.testimonialDescription}>
    //             <p className={styles.testimonialDescriptionContent} dangerouslySetInnerHTML={{ __html: testimonial.testimonial }} />
    //           </div>
    //           <div className={styles.testimonialVideo}>
    //             {testimonial.video && (
    //               <button onClick={() => openModal(isMobile ? testimonial.video.vertical : testimonial.video.horizontal)} className={styles.testimonialButtonVideo}>
    //                 Assistir depoimento <Image src={playDepoimentos} alt="" />
    //               </button>
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </Slider>
    //   <Modal
    //     isOpen={modalIsOpen}
    //     onRequestClose={closeModal}
    //     className={styles.modalContent}
    //     overlayClassName={styles.modalOverlay}
    //     contentLabel="Vídeo do Depoimento"
    //   >
    //     <div
    //       className={styles.modalContentInner}
    //       onClick={(e) => e.stopPropagation()}
    //     >
    //       <button onClick={closeModal} className={styles.modalCloseButton}><Image src={fecharModal} alt="" /></button>

    //       <iframe
    //         src={videoSrc}
    //         width="100%"
    //         height="100%"
    //         frameBorder="0"
    //         allow="autoplay; encrypted-media"
    //         allowFullScreen
    //         title="Depoimento em Vídeo"
    //       ></iframe>
    //     </div>
    //   </Modal>
    // </div>
  );
};

export default TestimonialSlider;