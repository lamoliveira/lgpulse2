import Image from 'next/image';

import { DisplayContextProvider } from 'components/context';
import { Demo } from 'components';

const Intro = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold mb-9'>LG Pulse</h1>
        <div className='leading-loose space-y-9'>
          <p>Descomplique sua gestão de pessoas.</p>
          <Image
            src='/img/superlogica/despesas.png'
            width='750'
            height='500'
            alt='stock photo'
          />
          <p>
          Aproveite a potência analítica do LG Pulse para analisar e visualizar dados. Este site mostra somente um pequeno recurso de produtos analíticos em aplicativos que emocionam clientes, colegas de trabalho e amigos!
          </p>
        </div>
    </div>
  )
}

const Outro = () => {
  return (
    <div className='overflow-hidden leading-loose space-y-9'>
      <Image
        src='/img/superlogica/finance.png'
        width='750'
        height='500'
        alt='stock photo'
      />
      <p>
      Além de criar representações visuais de dados, o LG - Pulse fornece os maiores benefícios, pois ajuda as pessoas a descobrir informações valiosas.
Permite que os usuários analisem dados e criem as interfaces que necessitam com velocidade e flexibilidade inigualáveis, resultando em ideias para criar valor.
Clicando nas métricas na parte superior, você pode navegar por insights preciosos e ainda interagir abaixo com o dashboard. No ícone do canto inferior direito você pode usar a inteligencia artificial para fazer perguntas sobre suas métricas. </p>
    </div>
  )
}

const HeroContent = (props) => {
  const { hideMetrics, hideSheets, snippet } = props;

  return (
    <div className='grid grid-rows lg:grid-cols-12 space-y-6'>
      <div className='lg:col-span-4 space-y-6 mr-6 mt-16'>
        <Intro />
        <div className='hidden lg:grid'>
          <Outro snippet={snippet} />
        </div>
      </div>
      <div className='lg:col-span-8'>
        <Demo
          hideMetrics={hideMetrics}
          hideSheets={hideSheets}
        />
      </div>
      <div className='grid lg:hidden'>
        <Outro
          snippet={snippet}
        />
      </div>
    </div>
  )
}

export const Hero = (props) => {
  const { children, hideMetrics, hideSheets } = props;

  return (
    <DisplayContextProvider>
      <HeroContent
        hideMetrics={hideMetrics}
        hideSheets={hideSheets}
        snippet={children}
      />
    </DisplayContextProvider>
  );
}
