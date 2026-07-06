'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, PawPrint, LayoutTemplate, MessageSquareWarning, MousePointerClick, Wifi, FileJson, ServerOff, Info, AlertCircle, Target, Code2, GitBranch, Globe } from 'lucide-react'

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
  '9. Trabalhos Futuros',
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
    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5 overflow-y-auto text-sm" style={{ color: BROWN }}>
      
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col gap-2">
        <div className="flex items-center gap-2 border-b pb-2 mb-1">
          <span className="inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-full" style={{ background: ORANGE }}>
            <Info size={14} color="#fff" />
          </span>
          <h3 className="font-bold text-base">O Sistema</h3>
        </div>
        <p className="leading-relaxed">
          O <strong>PetFy(ndr)</strong> é uma aplicação web centralizada voltada ao gerenciamento de animais domésticos em abrigos.
        </p>
        <p className="leading-relaxed">
          Atua como uma vitrine digital integrada que aproxima pessoas interessadas em acolher ou doar das instituições responsáveis.
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col gap-2">
        <div className="flex items-center gap-2 border-b pb-2 mb-1">
          <span className="inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-full" style={{ background: ORANGE }}>
            <AlertCircle size={14} color="#fff" />
          </span>
          <h3 className="font-bold text-base">O Problema</h3>
        </div>
        <p className="leading-relaxed">
          A falta de ferramentas dedicadas faz com que abrigos dependam de redes sociais e planilhas dispersas para divulgar os animais.
        </p>
        <p className="leading-relaxed">
          Isso dificulta a consulta centralizada pelo público e inviabiliza a atualização dinâmica do status real do acervo.
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col gap-2">
        <div className="flex items-center gap-2 border-b pb-2 mb-1">
          <span className="inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-full" style={{ background: ORANGE }}>
            <Target size={14} color="#fff" />
          </span>
          <h3 className="font-bold text-base">Objetivo</h3>
        </div>
        <p className="leading-relaxed">
          Modernizar o fluxo de adoção através de uma interface clara e intuitiva, com persistência estruturada de dados via API REST.
        </p>
        <p className="leading-relaxed">
          Garantir autonomia operacional para gestores gerenciarem o ciclo de vida dos cadastros de forma eficiente.
        </p>
      </div>

    </div>
  </SlideShell>,

  // Slide 4 — Design e Usabilidade
  <SlideShell key="design" className="flex flex-col">
    <SlideTitle>2. Escolhas de Design e Usabilidade</SlideTitle>
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-y-auto" style={{ color: BROWN }}>
      
      {/* Coluna Esquerda: Tabelas e Decisões */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col">
          <h3 className="font-bold text-lg border-b pb-2 mb-3">Análise de Interfaces de Referência</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="p-2 font-semibold">Sistema</th>
                  <th className="p-2 font-semibold text-center">Adoção</th>
                  <th className="p-2 font-semibold text-center">Cadastro</th>
                  <th className="p-2 font-semibold text-center">Doação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-medium">The Animal Foundation</td>
                  <td className="p-2 text-center text-green-600 font-bold">X</td>
                  <td className="p-2 text-center text-green-600 font-bold">X</td>
                  <td className="p-2 text-center text-green-600 font-bold">X</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2 font-medium">The Petz</td>
                  <td className="p-2 text-center text-green-600 font-bold">X</td>
                  <td className="p-2 text-center text-green-600 font-bold">X</td>
                  <td className="p-2 text-center text-gray-400">-</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Pet Care</td>
                  <td className="p-2 text-center text-gray-400">-</td>
                  <td className="p-2 text-center text-green-600 font-bold">X</td>
                  <td className="p-2 text-center text-gray-400">-</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2 font-medium">PetFy (Nosso App)</td>
                  <td className="p-2 text-center text-orange-500 font-bold">X</td>
                  <td className="p-2 text-center text-orange-500 font-bold">X</td>
                  <td className="p-2 text-center text-orange-500 font-bold">X</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-right">* Baseado na análise de mercado.</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col">
          <h3 className="font-bold text-lg border-b pb-2 mb-3">Decisões Práticas de UI</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="inline-flex shrink-0 items-center justify-center w-6 h-6 rounded-full mt-0.5" style={{ background: ORANGE }}>
                <LayoutTemplate size={12} color="#fff" />
              </span>
              <div>
                <strong>Identidade Minimalista:</strong> <br />
                Tons pastéis e bordas arredondadas, transmitindo cuidado e facilitando a interação.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex shrink-0 items-center justify-center w-6 h-6 rounded-full mt-0.5" style={{ background: ORANGE }}>
                <MousePointerClick size={12} color="#fff" />
              </span>
              <div>
                <strong>Interatividade Dinâmica:</strong> <br />
                Carrosséis arrastáveis na home e selos de verificação de ONGs.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Coluna Direita: Imagem e Descrição */}
      <div className="lg:col-span-5 bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col h-full">
        <h3 className="font-bold text-lg border-b pb-2 mb-3">Resultado da Interface</h3>
        
        <div className="flex-1 w-full relative mb-4 min-h-[200px] flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="./assets/tela-principal.png" alt="Tela Principal da Aplicação" className="max-w-full max-h-full object-contain drop-shadow-sm" />
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
          <h4 className="font-semibold text-orange-900 mb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            Mudanças Encontradas
          </h4>
          <p className="text-sm text-orange-800 leading-relaxed">
            Durante o desenvolvimento, a interface abandonou os elementos estáticos iniciais em favor de um layout mais fluído. Foram adicionados <strong>cards com sombreamento (shadow)</strong> para profundidade, e o espaçamento (whitespace) foi ampliado para evitar sobrecarga de informação visual na listagem de pets.
          </p>
        </div>
      </div>
      
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
    <div className="flex-1 w-full h-full relative flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden p-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="./assets/pilha.png" alt="Arquitetura e Pilha Tecnológica" className="max-w-full max-h-full object-contain" />
    </div>
  </SlideShell>,

  // Slide 7 — Modelagem
  <SlideShell key="modelagem" className="flex flex-col">
    <SlideTitle>5. Modelagem do Sistema</SlideTitle>
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
      <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <h3 className="font-semibold text-lg mb-3" style={{ color: BROWN }}>Diagrama de Casos de Uso</h3>
        <div className="flex-1 w-full relative flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="./assets/caso-de-uso.png" alt="Diagrama de Casos de Uso" className="max-w-full max-h-[50vh] object-contain" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <h3 className="font-semibold text-lg mb-3" style={{ color: BROWN }}>Diagrama de Classes</h3>
        <div className="flex-1 w-full relative flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="./assets/diagrama-de-classes.jpeg" alt="Diagrama de Classes" className="max-w-full max-h-[50vh] object-contain" />
        </div>
      </div>
    </div>
  </SlideShell>,

  // Slide 8 — Modelo de dados
  <SlideShell key="dados" className="flex flex-col">
    <SlideTitle>6. Modelo de Dados Relacional</SlideTitle>
    <div className="flex-1 w-full h-full relative flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="./assets/modelo-de-dados.png" alt="Modelo de Dados" className="max-w-full max-h-full object-contain" />
    </div>
  </SlideShell>,

  // Slide 9 — Desempenho
  <SlideShell key="desempenho" className="flex flex-col">
    <SlideTitle>7. Desempenho e Aspectos de Redes Móveis</SlideTitle>
    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5 overflow-y-auto text-sm" style={{ color: BROWN }}>

      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col gap-3">
        <div className="flex items-center gap-3 border-b pb-2">
          <span className="inline-flex shrink-0 items-center justify-center w-8 h-8 rounded-full" style={{ background: ORANGE }}>
            <Wifi size={16} color="#fff" />
          </span>
          <h3 className="font-bold text-lg">Conectividade</h3>
        </div>
        <p>
          A aplicação utiliza blocos <strong>try/catch</strong> no encapsulamento das requisições assíncronas (<code>fetch</code>) para lidar com falhas de rede de forma controlada.
        </p>
        <p>
          Em vez de causar o travamento, o <em>frontend</em> processa o erro silenciosamente e exibe um feedback visual amigável informando que o servidor está offline, sem comprometer a navegação estática.
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col gap-3">
        <div className="flex items-center gap-3 border-b pb-2">
          <span className="inline-flex shrink-0 items-center justify-center w-8 h-8 rounded-full" style={{ background: ORANGE }}>
            <FileJson size={16} color="#fff" />
          </span>
          <h3 className="font-bold text-lg">Desempenho e Payloads</h3>
        </div>
        <p>
          A troca de dados com a API é feita através de cargas úteis (<em>payloads</em>) extremamente leves no formato <strong>JSON</strong>, transportando apenas as informações textuais essenciais.
        </p>
        <p>
          O uso de um <em>frontend</em> puramente estático elimina latências comuns de grandes <em>frameworks</em>, e o tráfego mais pesado da rede restringe-se exclusivamente ao download das fotografias.
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col gap-3">
        <div className="flex items-center gap-3 border-b pb-2">
          <span className="inline-flex shrink-0 items-center justify-center w-8 h-8 rounded-full" style={{ background: ORANGE }}>
            <ServerOff size={16} color="#fff" />
          </span>
          <h3 className="font-bold text-lg">Modo Offline</h3>
        </div>
        <p>
          Na versão atual (MVP), o sistema opera de forma estritamente <strong>online</strong>. Esta restrição garante a precisão em tempo real do status dos animais, evitando solicitações de adoção duplicadas.
        </p>
        <p>
          <strong>Evolução Arquitetural:</strong> Prevê-se a implementação de <em>Service Workers</em> aliados ao <em>LocalStorage</em> para armazenar o catálogo em <em>cache</em> e permitir a sincronização em segundo plano.
        </p>
      </div>

    </div>
  </SlideShell>,

  // Slide 10 — API REST
  <SlideShell key="api" className="flex flex-col">
    <SlideTitle>8. Endpoints da API REST</SlideTitle>
    <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
      <div className="overflow-x-auto overflow-y-auto max-h-[60vh]">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 sticky top-0 z-10 shadow-sm">
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-700 w-24">Método</th>
              <th className="px-4 py-3 font-semibold text-gray-700 w-1/3">Endpoint</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Descrição</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {/* Auth */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3"><span className="inline-block px-2 py-1 rounded text-xs font-bold bg-yellow-100 text-yellow-800 w-16 text-center">POST</span></td>
              <td className="px-4 py-3 font-mono text-gray-600">/api/auth/login</td>
              <td className="px-4 py-3 text-gray-600">Autentica o usuário e retorna o token JWT.</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3"><span className="inline-block px-2 py-1 rounded text-xs font-bold bg-yellow-100 text-yellow-800 w-16 text-center">POST</span></td>
              <td className="px-4 py-3 font-mono text-gray-600">/api/usuarios</td>
              <td className="px-4 py-3 text-gray-600">Cadastra um novo usuário no sistema.</td>
            </tr>
            
            {/* Pets */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3"><span className="inline-block px-2 py-1 rounded text-xs font-bold bg-blue-100 text-blue-800 w-16 text-center">GET</span></td>
              <td className="px-4 py-3 font-mono text-gray-600">/api/pets</td>
              <td className="px-4 py-3 text-gray-600">Lista todos os pets disponíveis para adoção (com paginação e filtros).</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3"><span className="inline-block px-2 py-1 rounded text-xs font-bold bg-blue-100 text-blue-800 w-16 text-center">GET</span></td>
              <td className="px-4 py-3 font-mono text-gray-600">/api/pets/:id</td>
              <td className="px-4 py-3 text-gray-600">Retorna os detalhes de um pet específico (fotos, vacinas, etc).</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3"><span className="inline-block px-2 py-1 rounded text-xs font-bold bg-yellow-100 text-yellow-800 w-16 text-center">POST</span></td>
              <td className="px-4 py-3 font-mono text-gray-600">/api/pets</td>
              <td className="px-4 py-3 text-gray-600">Cadastra um novo pet (requer permissão de abrigo).</td>
            </tr>
            
            {/* Adoções */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3"><span className="inline-block px-2 py-1 rounded text-xs font-bold bg-yellow-100 text-yellow-800 w-16 text-center">POST</span></td>
              <td className="px-4 py-3 font-mono text-gray-600">/api/adocoes</td>
              <td className="px-4 py-3 text-gray-600">Registra uma solicitação de adoção por um usuário.</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3"><span className="inline-block px-2 py-1 rounded text-xs font-bold bg-blue-100 text-blue-800 w-16 text-center">GET</span></td>
              <td className="px-4 py-3 font-mono text-gray-600">/api/adocoes/minhas</td>
              <td className="px-4 py-3 text-gray-600">Lista o histórico e status das solicitações do usuário logado.</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3"><span className="inline-block px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-800 w-16 text-center">PUT</span></td>
              <td className="px-4 py-3 font-mono text-gray-600">/api/adocoes/:id/status</td>
              <td className="px-4 py-3 text-gray-600">Atualiza o status da adoção (Em Análise, Aprovada, Rejeitada).</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </SlideShell>,

  // Slide 11 — Trabalhos Futuros
  <SlideShell key="conclusao" className="flex flex-col">
    <SlideTitle>9. Trabalhos Futuros</SlideTitle>
    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5 overflow-y-auto text-sm" style={{ color: BROWN }}>

      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col gap-2.5">
        <div className="flex items-center gap-2 border-b pb-2 mb-1">
          <span className="inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-full" style={{ background: ORANGE }}>
            <Code2 size={14} color="#fff" />
          </span>
          <h3 className="font-bold text-base">Curto Prazo</h3>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">Consolidação do Core</p>
        <ul className="list-disc pl-4 space-y-1.5 leading-relaxed">
          <li>Consolidação e acoplamento das entidades faltantes no código: <strong>Usuário</strong>, <strong>Doação</strong> e <strong>Adoção</strong>.</li>
          <li>Implementação de um sistema seguro de <strong>autenticação</strong> e controle de perfis de acesso.</li>
        </ul>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col gap-2.5">
        <div className="flex items-center gap-2 border-b pb-2 mb-1">
          <span className="inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-full" style={{ background: ORANGE }}>
            <GitBranch size={14} color="#fff" />
          </span>
          <h3 className="font-bold text-base">Médio Prazo</h3>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">Escalabilidade e Localização</p>
        <ul className="list-disc pl-4 space-y-1.5 leading-relaxed">
          <li>Evolução da arquitetura singular para um modelo <strong>multi-tenant</strong>, permitindo que múltiplos abrigos e ONGs gerenciem seus acervos de forma independente na mesma plataforma.</li>
          <li>Integração com serviços de <strong>geolocalização</strong> para facilitar o encontro de abrigos próximos ao adotante.</li>
        </ul>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col gap-2.5">
        <div className="flex items-center gap-2 border-b pb-2 mb-1">
          <span className="inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-full" style={{ background: ORANGE }}>
            <Globe size={14} color="#fff" />
          </span>
          <h3 className="font-bold text-base">Longo Prazo</h3>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">Ecossistema Social Completo</p>
        <ul className="list-disc pl-4 space-y-1.5 leading-relaxed">
          <li>Transformação da aplicação em uma rede comunitária ativa com murais de notícias, áreas de comentários e blogs de conscientização.</li>
          <li>Implementação de ferramentas de governança: emissão de <strong>relatórios de impacto social</strong> e um sistema de avaliação de abrigos parceiros.</li>
        </ul>
      </div>

    </div>
  </SlideShell>,

  // Slide 12 — Referências
  <SlideShell key="referencias" className="flex flex-col">
    <SlideTitle>10. Referências</SlideTitle>
    <div className="flex-1 overflow-y-auto text-sm mt-2" style={{ color: BROWN }}>
      <ul className="list-disc pl-6 space-y-4">
        <li>
          <strong>NODE.JS.</strong> Documentação oficial. Disponível em: <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:underline font-medium">https://nodejs.org</a>. Acesso em: 29 jun. 2026.
        </li>
        <li>
          <strong>EXPRESS.</strong> Express - framework web para Node.js. Disponível em: <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:underline font-medium">https://expressjs.com</a>. Acesso em: 29 jun. 2026.
        </li>
        <li>
          <strong>MYSQL.</strong> MySQL Documentation. Disponível em: <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:underline font-medium">https://dev.mysql.com/doc/</a>. Acesso em: 29 jun. 2026.
        </li>
        <li>
          <strong>ANTHROPIC.</strong> Claude. Inteligência artificial generativa. Utilizada para a elaboração técnica dos diagramas de Modelagem de Dados e Fluxo de Navegação. Disponível em: <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:underline font-medium">https://claude.ai</a>. Acesso em: 29 jun. 2026.
        </li>
        <li>
          <strong>GOOGLE.</strong> Gemini. Assistente virtual de Inteligência Artificial. Utilizado para suporte ao planejamento arquitetural, estruturação do projeto, pair programming e revisão da documentação. Disponível em: <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:underline font-medium">https://gemini.google.com</a>. Acesso em: 29 jun. 2026.
        </li>
        <li>
          <strong>PROJETO MARABIXOS.</strong> Perfil oficial no Instagram. Utilizado como referência visual, estudo de fluxo de resgate e definição de regras de negócio reais para a causa animal. Disponível em: <a href="https://www.instagram.com/projetomarabixos" target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:underline font-medium">https://www.instagram.com/projetomarabixos</a>. Acesso em: 29 jun. 2026.
        </li>
      </ul>
    </div>
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
