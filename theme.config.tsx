import { useRouter } from 'next/router';
import { useConfig, DocsThemeConfig } from 'nextra-theme-docs';
import { Logo, Head } from './components';

const vercel = 'https://embedding-playbook.vercel.app';
const description = "Este exemplo é só para mostrar o potencial para compor os diversos recursos de produtos analíticos em aplicativos que entusiasmam clientes, colegas de trabalho e amigos!";

const config: DocsThemeConfig = {
  primaryHue: 201,
  primarySaturation: 100,
  logo:
  <Logo
    src="/img/Superlogica/superlogicalogo.png"
    width='33'
    text='LG - Lugar de gente'
  />,
  footer: {
    text:
    <Logo
      src="/img/superlogica/superlogica.png"
      width='300'
    />
  },
  search: {
    placeholder: "Procurar documentação"
  },
  toc: {
    backToTop: true
  },
  project: {
    link: 'https://github.com/Tab-SE/embedding_playbook',
  },
  docsRepositoryBase: 'https://github.com/Tab-SE/embedding_playbook/tree/main/',
  useNextSeoProps() {
    const { route } = useRouter();
    // changes title on home '/' route
    if (route !== '/') {
      return {
        titleTemplate: '%s ✨ Embed Superlogica Pulse - Recursos Humanos'
      };
    } else {
      return {
        titleTemplate: 'Embed LG Pulse ✨ Home'
      };
    }
  },
  head: function useHead() {
    const { title } = useConfig();
    const imgHost = vercel;

    return (
      <>
        <Head
          title={title}
          description={description}
          imgHost={imgHost}
        />
        <link rel="icon" href={imgHost + "/svg/logo_color.svg?h=32&w=32"} type="image/svg+xml" />
        <link rel="icon" href={imgHost + "/img/superstore/lg.ico?h=32&w=32"} type="image/ico" />
        <link rel="icon" href={imgHost + "/img/superstore/superstorelogo.png?h=32&w=32"} type="image/png" />
        <link rel="icon" href={imgHost + "/svg/dark.svg?h=32&w=32"} type="image/svg+xml" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href={imgHost + "/img/superstore/superstorelogo.png?h=32&w=32"} type="image/png" media="(prefers-color-scheme: dark)" />
      </>
    );
  }
}

export default config
