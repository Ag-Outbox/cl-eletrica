import React from 'react';
import { CircularGallery, GalleryItem } from './circular-gallery';

export const electricalProjectsData: GalleryItem[] = [
  {
    common: 'Cocatrel — Armazém e Loja',
    binomial: 'Ilicínea — MG',
    desc: 'Instalação elétrica completa: infraestrutura, distribuição de força e iluminação industrial.',
    photo: {
      url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      text: 'Armazém Cocatrel com infraestrutura elétrica industrial',
      by: 'Pereira & Pereira',
    },
  },
  {
    common: 'Lagotela — Planta Industrial',
    binomial: 'Três Pontas — MG',
    desc: 'Execução de instalações industriais da planta fabril, do quadro geral aos pontos de carga.',
    photo: {
      url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      text: 'Instalação em planta industrial Lagotela',
      by: 'Pereira & Pereira',
    },
  },
  {
    common: 'Subestação de Média Tensão 13.8kV',
    binomial: 'Subestações & Cabines',
    desc: 'Montagem de transformadores, cubículos blindados e conexão homologada com concessionária.',
    photo: {
      url: 'https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&w=800&q=80',
      text: 'Subestação transformadora e cubículo MT',
      by: 'Pereira & Pereira',
    },
  },
  {
    common: 'Linhas de Barramento Blindado (Busway)',
    binomial: 'Distribuição de Alta Potência',
    desc: 'Montagem de linhas de barramento blindado para distribuição de grandes cargas com segurança.',
    photo: {
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      text: 'Barramentos blindados busway em indústria',
      by: 'Pereira & Pereira',
    },
  },
  {
    common: 'Painéis QGBT & CCM Inteligentes',
    binomial: 'Comando & Automação',
    desc: 'Instalação e interligação de painéis elétricos, QGBTs e centros de controle de motores.',
    photo: {
      url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
      text: 'Painel QGBT e centro de controle de motores',
      by: 'Pereira & Pereira',
    },
  },
  {
    common: 'Malha de Aterramento & SPDA',
    binomial: 'Proteção Estrutural NR-10',
    desc: 'Execução de malhas de aterramento equipotencial e proteção contra descargas atmosféricas.',
    photo: {
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      text: 'Aterramento e SPDA para plantas industriais',
      by: 'Pereira & Pereira',
    },
  },
];

const CircularGalleryDemo: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 text-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <span className="text-xs font-bold tracking-widest uppercase text-sky-700">Portfólio</span>
        <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Obras Já Realizadas</h2>
        <p className="text-slate-600 mt-3 max-w-xl mx-auto">
          Gire o carrossel circular para visualizar as principais obras entregues pela Pereira &amp; Pereira.
        </p>
      </div>
      <div className="w-full h-[540px]">
        <CircularGallery items={electricalProjectsData} radius={560} />
      </div>
    </div>
  );
};

export default CircularGalleryDemo;
