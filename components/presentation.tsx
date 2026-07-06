'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, PawPrint } from 'lucide-react'

const CREAM = 'rgb(249, 241, 230)'
const BROWN = 'rgb(58, 35, 28)'
const ORANGE = 'rgb(210, 131, 67)'

const sumarioItens = [
  '1. Introdução',
  '2. Escolhas de Design e Usabilidade',
  '3. Protótipo da Interface',
  '4. Arquitetura e Pilha Tecnológica',
  '5. Modelagem do Sistema',
  '6. Modelo de Dados Relacional',
  '7. Desempenho e Aspectos de Redes Móveis',
  '8. Endpoints da API REST',
  '9. Conclusão e Trabalhos Futuros',
  '10. Referências',
]

function SlideShell({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={`absolute inset-0 pl-16 md:pl-24 pr-6 md:pr-12 py-6 md:py-8 ${className}`}
      style={{ background: CREAM }}
    >
      {children}
    </section>
  )
}

function SlideTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-bold mb-4 text-balance"
      style={{ color: BROWN, fontSize: 27 }}
    >
      {children}
    </h2>
  )
}

function Placeholder({
  label,
  className = '',
}: {
  label?: string
  className?: string
}) {
  return (
    <div className={`placeholder-box flex items-center justify-center ${className}`}>
      {label ? (
        <span className="opacity-50 px-4 text-center" style={{ color: BROWN, fontSize: 16 }}>
          {label}
        </span>
      ) : null}
    </div>
  )
}

const slides: React.ReactNode[] = [
  // Slide 1 — Capa
  <section
    key="capa"
    className="absolute inset-0 pl-16 md:pl-24 pr-6 md:pr-12 py-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
    style={{ background: 'linear-gradient(135deg, rgb(58, 35, 28), rgb(74, 44, 34))' }}
  >
    <div className="flex-1 flex flex-col items-start justify-center max-w-md">
      <div className="flex items-center gap-3 mb-3">
        <span
          className="inline-flex items-center justify-center w-11 h-11 rounded-full"
          style={{ background: ORANGE }}
        >
          <PawPrint size={24} color="#fff" aria-hidden="true" />
        </span>
        <p className="font-semibold" style={{ color: ORANGE, fontSize: 26 }}>
          PetFy
        </p>
      </div>
      <h1
        className="font-bold leading-tight text-balance"
        style={{ color: '#fff', fontSize: 36 }}
      >
        PetFy(ndr)
      </h1>
      <p className="mt-3" style={{ color: CREAM, fontSize: 18 }}>
        Plataforma web para adoção responsável e gestão de doações em abrigos deanimais
      </p>
      <p
        className="mt-5 opacity-90"
        style={{ color: CREAM, fontWeight: 500, fontSize: 15 }}
      >
        Apresentado por: Luiz Antônio Machado • 2026
      </p>
    </div>
    <div className="relative shrink-0 z-10">
      <div
        className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden ring-8 shadow-xl"
        style={{ ['--tw-ring-color' as string]: ORANGE }}
      >
        <Image
          src="/images/golden-retrievers.png"
          alt="Dois golden retrievers sentados sorrindo para a câmera em fundo neutro"
          width={288}
          height={288}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  </section>,

  // Slide 2 — Sumário
  <SlideShell key="sumario" className="overflow-auto">
    <SlideTitle>Sumário</SlideTitle>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
      {sumarioItens.map((item) => (
        <div
          key={item}
          className="rounded-2xl px-4 py-2.5 shadow-sm"
          style={{ background: '#fff' }}
        >
          <span style={{ color: BROWN, fontWeight: 500, fontSize: 16 }}>{item}</span>
        </div>
      ))}
    </div>
  </SlideShell>,

  // Slide 3 — Introdução
  <SlideShell key="introducao" className="flex flex-col">
    <SlideTitle>1. Introdução</SlideTitle>
    <Placeholder label="Espaço reservado para o conteúdo" className="flex-1" />
  </SlideShell>,

  // Slide 4 — Design e Usabilidade
  <SlideShell key="design" className="flex flex-col">
    <SlideTitle>2. Escolhas de Design e Usabilidade</SlideTitle>
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Placeholder label="Tabela comparativa" />
      <Placeholder label="Decisões de UI" />
    </div>
  </SlideShell>,

  // Slide 5 — Protótipo
  <SlideShell key="prototipo" className="flex flex-col">
    <SlideTitle>3. Protótipo da Interface</SlideTitle>
    <Placeholder label="Telas e wireframes" className="flex-1" />
  </SlideShell>,

  // Slide 6 — Arquitetura
  <SlideShell key="arquitetura" className="flex flex-col">
    <SlideTitle>4. Arquitetura e Pilha Tecnológica</SlideTitle>
    <Placeholder
      label="Diagrama cliente-servidor (Node.js, Express, MySQL)"
      className="flex-1"
    />
  </SlideShell>,

  // Slide 7 — Modelagem
  <SlideShell key="modelagem" className="flex flex-col">
    <SlideTitle>5. Modelagem do Sistema</SlideTitle>
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Placeholder label="Diagrama de Casos de Uso" />
      <Placeholder label="Diagrama de Classes" />
    </div>
  </SlideShell>,

  // Slide 8 — Modelo de dados
  <SlideShell key="dados" className="flex flex-col">
    <SlideTitle>6. Modelo de Dados Relacional</SlideTitle>
    <div className="flex-1 w-full h-full relative flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/Assets/Modelo de Dados.png" alt="Modelo de Dados" className="max-w-full max-h-full object-contain" />
    </div>
  </SlideShell>,

  // Slide 9 — Desempenho
  <SlideShell key="desempenho" className="flex flex-col">
    <SlideTitle>7. Desempenho e Aspectos de Redes Móveis</SlideTitle>
    <Placeholder
      label="Conectividade, payloads JSON e modo offline"
      className="flex-1"
    />
  </SlideShell>,

  // Slide 10 — API REST
  <SlideShell key="api" className="flex flex-col">
    <SlideTitle>8. Endpoints da API REST</SlideTitle>
    <div className="flex-1 flex flex-col gap-2.5">
      <Placeholder className="h-10" />
      <Placeholder className="flex-1" />
    </div>
  </SlideShell>,

  // Slide 11 — Conclusão
  <SlideShell key="conclusao" className="flex flex-col">
    <SlideTitle>9. Conclusão e Trabalhos Futuros</SlideTitle>
    <div className="flex-1 grid grid-rows-2 gap-3">
      <Placeholder label="Resultados alcançados" />
      <Placeholder label="Limitações e trabalhos futuros" />
    </div>
  </SlideShell>,

  // Slide 12 — Referências
  <SlideShell key="referencias" className="flex flex-col">
    <SlideTitle>10. Referências</SlideTitle>
    <Placeholder label="Lista de referências bibliográficas" className="flex-1" />
  </SlideShell>,
]

export function Presentation() {
  const [current, setCurrent] = useState(0)
  const total = slides.length

  const goNext = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, total - 1))
  }, [total])

  const goPrev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0))
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrev])

  return (
    <main
      className="min-h-screen w-full flex flex-col items-center justify-center p-3 md:p-6"
      style={{ background: 'linear-gradient(160deg, rgb(58, 35, 28), rgb(86, 53, 40))' }}
    >
      <div className="w-full flex flex-col items-center">
        <div className="stage relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Faixa decorativa lateral */}
          <div
            className="absolute left-0 top-0 h-full flex z-20 pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-9 md:w-12 h-full paw-strip" style={{ background: ORANGE }} />
            <div className="w-6 md:w-8 h-full wavy-line" style={{ background: BROWN }} />
          </div>

          {slides[current]}
        </div>

        <nav
          className="w-full flex items-center justify-center gap-4 mt-4 z-10"
          style={{ maxWidth: 1100 }}
          aria-label="Navegação de slides"
        >
          <button
            type="button"
            onClick={goPrev}
            disabled={current === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-medium shadow disabled:opacity-40 transition-opacity"
            style={{ background: ORANGE }}
          >
            <ChevronLeft size={18} color="#fff" aria-hidden="true" />
            <span style={{ color: '#fff', fontWeight: 500, fontSize: 15 }}>Anterior</span>
          </button>
          <span
            className="font-semibold tabular-nums"
            style={{ color: CREAM }}
            aria-live="polite"
          >
            {current + 1} / {total}
          </span>
          <button
            type="button"
            onClick={goNext}
            disabled={current === total - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-medium shadow disabled:opacity-40 transition-opacity"
            style={{ background: ORANGE }}
          >
            <span style={{ color: '#fff', fontWeight: 500, fontSize: 15 }}>Próximo</span>
            <ChevronRight size={18} color="#fff" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </main>
  )
}
