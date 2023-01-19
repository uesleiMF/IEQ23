import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import photo from '../../assets/foto.png';
import github from '../../assets/github.png';
import tiktok from '../../assets/tiktok.png';
import email from '../../assets/email.png';
import youtube from '../../assets/yt.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';

import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Github } from '../../assets/github.svg';

import { ReactComponent as Youtube } from '../../assets/youtube.svg';

import { Card } from '../../components/Card';

export function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  const link = [
    {
      img: github,
      title: 'Github',
      description: 'Link do meu perfil do github. @alexiakattah',
      url: 'https://github.com/alexiakattah',
    },
    {
      img: tiktok,
      title: 'TikTok',
      description: 'Link do meu perfil do TikTok. @alexiakattah',
      url: 'https://www.tiktok.com/@alexiakattah',
    },
    {
      img: email,
      title: 'Email',
      description:
        'Caso tenha interesse em parcerias, fique a vontade para entrar em contato comigo! contato@alexiakattah.com.br',
      url: 'mailto:contato@alexiakattah.com.br',
    },
    {
      img: youtube,
      title: 'YouTube',
      description: 'Meu perfil do Youtube para vocês seguirem!',
      url: 'https://www.youtube.com/channel/UCOEbxH89cnNGEXHPwGkUPqA',
    },
    {
      img: linkedin,
      title: 'Linkedin',
      description: 'Meu perfil do Linkedin para vocês me acompanharem por lá!',
      url: 'https://www.linkedin.com/in/alexiakattah/',
    },
    {
      img: instagram,
      title: 'Instagram',
      description: 'Meu perfil do Instagram para vocês seguirem!',
      url: 'https://www.instagram.com/alexiakattah/',
    },
  ];
  return (
    <>
      <div className="container p-4 align-items-center text-center ">
        <img src={photo} alt="" width={'100px'} className="px-2" />

        <h5>JUMF</h5>
        <p className="m-0">@Jumf</p>

        <div className="d-flex justify-content-center">
          <a href="http://instagram.com/alexiakattah" rel="noopener noreferrer">
            <div className="px-2">
              <Instagram width="20px" fill="#ffff" />
            </div>
          </a>
          <a href="http://github.com/alexiakattah" rel="noopener noreferrer">
            <div className="px-2">
              <Github width="20px" fill="#ffff" />
            </div>
          </a>
          <a
            href="https://www.youtube.com/channel/UCOEbxH89cnNGEXHPwGkUPqA"
            rel="noopener noreferrer"
          >
            <div className="px-2">
              <Youtube width="20px" fill="#ffff" />
            </div>
          </a>
        </div>
      </div>
      <div
        className="video-container container col-12 col-md-5 m-auto"
        data-aos="fade-up"
      >
        <iframe
          src="https://www.youtube.com/embed/9t0zd-7dbUs?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="container p-4 col-12 row m-auto">
        {link.map((link) => {
          return <Card links={link} />;
        })}
      </div>
      {/* <div
        className="container p-4 "
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <Form />
      </div> */}
      <div className="text-center mt-4">
        <p>Feito com jumf</p>
      </div>
    </>
  );
}
