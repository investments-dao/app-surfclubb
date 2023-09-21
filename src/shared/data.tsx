import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconComponents,
  IconDownload,
  IconHeadset,
  IconHelp,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconRocket,
  IconRss,
} from '@tabler/icons-react';
import {
  AnnouncementProps,
  CallToActionProps,
  ComparisonProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialProps,
} from './types';



import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import heroImg from '~/assets/images/hero.jpg';
import hero2Img from '~/assets/images/hero2.jpg';
import modelosImg from '~/assets/images/modelos.jpg';
import modIndivImg from '~/assets/images/modIndiv.jpg';
import modDobleImg from '~/assets/images/modDoble.jpg';
import gasImg from '~/assets/images/gas.jpg';
import investmentsdaoLogo from '~/assets/images/investmentsdao.svg';
import daosurfclubbLogo from '~/assets/images/daosurfclubb.svg';
import surfclubbLogo from '~/assets/images/surfclubb.jpg';


// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NUEVOS MODELOS',
  callToAction: {
    text: 'Ultimos modelos de new-wave ola artificial »',
    href: '/modelos',
  },
  callToAction2: {
    text: 'Follow @surfclubbcom on Twitter',
    href: 'https://twitter.com/intent/user?screen_name=surfclubbcom',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Pages',
      icon: IconChevronDown,
      links: [
        {
          label: 'Equipo',
          href: '/about',
        },
        {
          label: 'Modelos',
          href: '/modelos',
        },
        {
          label: 'Precios',
          href: '/pricing',
        },
        {
          label: 'FAQs',
          href: '/faqs',
        },
        {
          label: 'Politica de Privacidad',
          href: '/privacy',
        },
        {
          label: 'Terms & Condiciones',
          href: '/terms',
        },
      ],
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Contacto',
      href: '/contact',
    },
  ],
  actions: [
    {
      text: 'Download',
      href: 'https://github.com/Dao-Surfclubb/new-wave/',
      targetBlank: true,
      btnType: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Hero data
export const heroData: HeroProps = {
  title: (
    <>
      Surf <span className="hidden md:inline"> Olas</span> <span>Artificiales</span>
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 dark:decoration-white decoration-wavy decoration-1 underline-offset-2">
         NEGOCIO exclusivo e innovador en tu zona.
        </span>{' '}
          Diseñamos y vendemos a precios sin competencia, <em> -Olas artificiales</em> <em> -Máquinas de surf </em> -Piscinas de surf  <em> -Surf Indoor </em>
      </span>{' '}
      .
    </>
  ),
  callToAction: {
    text: 'Detalles Tecnicos',
    href: '/',
    icon: IconDownload,
    targetBlank: true,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Modelos',
    href: '/modelos',
  },
  image: {
    src: heroImg,
    alt: 'Hero Surfclubb',
  },
};

// Hero2 data
export const hero2Data: HeroProps = {
  title: 'Las grandes empresas las hacen grandes personas',
  subtitle:
    'Vivamus venenatis, lectus a pellentesque placerat, felis tellus ultrices eros, et aliquam sapien nibh sed sem. Fusce ut ante eget purus viverra malesuada. Morbi eget mi maximus, ultricies urna eget, tristique lorem. Fusce cursus venenatis quam, a blandit lectus vulputate id. Praesent id interdum orci, vitae condimentum dui. Fusce pulvinar ante eget mattis semper. Suspendisse in diam massa.',
  callToAction: {
    text: 'Ver Puestos ',
    href: 'https://www.linkedin.com/',
    targetBlank: true,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Contacto',
    href: '/contact',
  },
  image: {
    src: hero2Img,
    alt: 'Hero Surfclubb',
  },
};

// Modelos data
export const modelosData: HeroProps = {
  title: 'Modelos Estandar, de Generador de Olas Artificiales:',
  subtitle:
    'Podemos fabricar el generador olas artificiales o la piscina de olas artificiales que mejor se adapte a sus necesidades.',
  callToAction: {
    text: 'Individual',
    href: '/modelos/individual',
    targetBlank: true,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Doble',
    href: '/modelos/doble',
  },
  image: {
    src: modelosImg,
    alt: 'Modelos Surfclubb',
  },
};

// Modelos1 data
export const modelos1Data: ContentProps = {
  header: {
    title: 'Modelo Individual',
    subtitle: 'Modelo estandar individual.',
    highlight: 'Modelos New-Wave',
  },
  content:
    'Además de trabajar con usted para realizar un diseño óptimo del SurfClub-Indoor.',
  items: [
    {
      title: '-Dimensiones.',
      description:
        '12m x 4m + 2m pasillos laterales + Escalera según diseño.',
    },
    {
      title: '-Superficie',
      description:
        'acabado 12m x 6m + Entrada.',
    },
    {
      title: 'Materiales empleados en la fabricación',
      description:
        'Perfilería y chapa metálica  2 mm-Acero inoxidable y acero galvanizado -Lona pvc 650 gr/m2 resistencia al fuego -Sistema eléctrico.',
    },
    {
      title: 'Requerimientos Técnicos Ola estática.',
      description:
        'Capacidad del tanque es de 30.000 litros de agua = +30.000Kg. Altura mínima necesaria para el funcionamiento es de 6 m. ideal para un local comercial de doble altura. Las dimensiones mínimas de entrada en el acceso será de 3 m de ancho.',
    },
  ],
  image: {
    src: modIndivImg,
    alt: 'mod. Individual',
  },
  isReversed: false,
  isAfterContent: false,
};

// Modelos2 data
export const modelos2Data: ContentProps = {
  header: {
    title: 'Modelo Doble',
    subtitle: 'Modelo estandar doble.',
    highlight: 'Modelos New-Wave',
  },
  content:
    'Modelo Doble',
  items: [
    {
      title: '-Dimensiones.',
      description:
        '12m x 8m + 2m pasillos laterales + Escalera según diseño.'
      },
    {
      title: '-Superficie',
      description:
        'acabado 12m x 10m + Entrada',  
    },
    {
      title: 'Materiales empleados en la fabricación',
      description:
        'Perfilería y chapa metálica  2 mm-Acero inoxidable y acero galvanizado -Lona pvc 650 gr/m2 resistencia al fuego -Sistema eléctrico.'
    },
    {
      title: 'Requerimientos Técnicos Ola estática.',
      description:
        'Capacidad del tanque es de 30.000 litros de agua = +30.000Kg. Altura mínima necesaria para el funcionamiento es de 6 m. ideal para un local comercial de doble altura. Las dimensiones mínimas de entrada en el acceso será de 3 m de ancho.',
    },
    
  ],
  image: {
    src: modDobleImg,
    alt: 'Modelo Doble Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data
export const stepsData: StepsProps = {
  title: 'Puesta en Marcha del nuevo negocio.',
  items: [
    {
      title: 'Paso 1',
      description:
        'Pedido',
      icon: IconArrowDown,
    },
    {
      title: 'Paso 2',
      description:
        'Periodo de Fabricación y Transporte',
      icon: IconArrowDown,
    },
    {
      title: 'Paso 3',
      description:
        'Puesta en Marcha',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
      icon: IconCheck,
    },
  ],
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
};

// SocialProof data
export const socialProofData: SocialProofProps = {
  images: [
    {
      link: 'https://investments-dao.com/',
      src: investmentsdaoLogo,
      alt: 'Investments-Dao Logo',
    },
    {
      link: 'https://dao.surfclubb.com/',
      src: daosurfclubbLogo,
      alt: 'Dao.Surfclubb Logo',
    },
    {
      link: 'https://surfclubb.com/',
      src: surfclubbLogo,
      alt: 'Surfclubb Logo',
    },
  ],
};

// FAQS data
export const faqsData: FAQsProps = {
  header: {
    title: 'Preguntas y Respuestas frecuentes',
    subtitle:
      'Estas son algunas de las preguntas mas habituales recibidas.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: '¿Quiénes somos y qué hacemos?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: '¿Qué valores y principios guían nuestro trabajo?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: '¿Cuál es nuestra experiencia?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: '¿Cómo es nuestro equipo?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: '¿Cómo nos relacionamos con la comunidad?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: '¿Qué canales de soporte ofrecemos?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// FAQS data 2
export const faqsData2: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Estas son algunas de las preguntas mas habituales recibidas.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: '¿Qué necesito para empezar?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: '¿Cómo instalar la plantilla CSS NextJS + Tailwind?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: "What's something that you completely don't understand?",
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: "What's an example of when you changed your mind?",
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'What is something that you would really like to try again?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'If you could only ask one question to each person you meet, what would that question be?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// FAQS3 data
export const faqs3Data: FAQsProps = {
  header: {
    title: 'Preguntas frecuentes sobre precios',
    subtitle: '¿Tienes mas preguntas?',
    // highlight: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: '¿Que es una Piscina de Surf?',
      description: `Es una de tantas maneras que emplean nuestros clientes para hablar de nuestras máquinas de olas artificiales.`,
    },
    {
      title: '¿Como funciona un simulador de surf?',
      description: ` Con nuestro desarrollo tecnológico hemos conseguido unas potentes bombas, capaces de proyectar una capa de agua a gran velocidad. 
      Este flujo constante de agua provoca un efecto de «hidroplaneo» entre la superficie inclinada y la tabla donde suben los usuarios. 🤷‍♂️`,
    },
    {
      title: "¿Fabrican las atracciones de surf o es un revendedor?",
      description: `Si. Somos unos de los pocos fabricantes a nivel Mundial. 
      Todas nuestras maquinas están fabricadas por nosotros. 
      <a href="https://surfclubb.com/comparativa entre fabicantes"></a>Pinche este enlace si desea ver una comparativa entre fabricantes.`,
    },
    {
      title: "¿Tenéis maquinas de olas artificiales en stock?",
      description: `Normalmente no disponemos de stock. Fabricamos bajo pedido en firme.`,
    },
    {
      title: '¿Tenéis instalaciones en alquiler?',
      description: `No disponemos de instalaciones en alquiler.`,
    },
    {
      title: '¿Puede ser instalada en una Nave Industrial?',
      description: `Si. Eso es una gran idea. El peso por metro cuadrado es de +/- 1.200 Kg/m2`,
    },
  ],
  callToAction: {
    text: 'Contacto',
    href: '/contact',
    btnText: 'uppercase',
    btnType: 'primary',
  },
};

// FAQS4 data
export const faqs4Data: FAQsProps = {
  header: {
    title: 'Preguntas y respuestas por Equipo-Surfclubb',
    subtitle:
      'Estas son algunas de las preguntas mas habituales recibidas.',
    highlight: 'FAQS',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'General',
        href: '/tab1',
      },
      items: [
        {
          title: '¿Que es una Piscina de Surf?',
          description: `Es una de tantas maneras que emplean nuestros clientes para hablar de nuestras máquinas de olas artificiales.`,
        },
        {
          title: '¿Como funciona un simulador de surf?',
          description: ` Con nuestro desarrollo tecnológico hemos conseguido unas potentes bombas, capaces de proyectar una capa de agua a gran velocidad. 
          Este flujo constante de agua provoca un efecto de «hidroplaneo» entre la superficie inclinada y la tabla donde suben los usuarios. 🤷‍♂️`,
        },
        {
          title: "¿Fabrican las atracciones de surf o es un revendedor?",
          description: `Si. Somos unos de los pocos fabricantes a nivel Mundial. 
          Todas nuestras maquinas están fabricadas por nosotros. 
          <a href="https://surfclubb.com/comparativa entre fabicantes"></a>Pinche este enlace si desea ver una comparativa entre fabricantes.`,
        },
        {
          title: "¿Tenéis maquinas de olas artificiales en stock?",
          description: `Normalmente no disponemos de stock. Fabricamos bajo pedido en firme.`,
        },
        {
          title: '¿Tenéis instalaciones en alquiler?',
          description: `No disponemos de instalaciones en alquiler.`,
        },
        {
          title: '¿Puede ser instalada en una Nave Industrial?',
          description: `Si. Eso es una gran idea. El peso por metro cuadrado es de +/- 1.200 Kg/m2`,
        },
      ],
    },
    {
      link: {
        label: 'Planes, precios y pagos',
        href: '/tab2',
      },
      items: [
        {
          title: '¿Se pueden mover las piscinas de olas artificiales?',
          description: `Si. Estos modelos se pueden mover. Aunque se necesitan bastante mano de obra, grúa y camiones. Si lo desea podemos fabricar el modelo móvil.`,
        },
        {
          title: '¿Cuanto tiempo se necesita para fabricar un generador de olas?',
          description: 'Desde la firma del contrato hasta el puerto de Barcelona, aproximadamente 3 meses.',
        },
        {
          title: '¿Porque es un gran negocio montar un Surfclub?',
          description: `Porque con nuestro simulador de surf con olas artificiales sorprenderás tanto al público en general 
          como a tu competencia creando un centro de ocio capaz de generar un rápido retorno de la inversión.`,
        },
        {
          title: '¿Cuantas personas pueden subir en una hora?',
          description: `El dueño del SURF-CLUB tiene sus reglas. 
          Nuestra experiencia nos dice que el promedio sobre la tabla es de 20 segundos. 1h= 3600seg/20=180 olas. 
          Entonces cada hora un grupo de 10-12 personas.`,
        },
        {
          title: '¿Es seguro practicar surf o body en olas artificiales?',
          description: `Nuestras maquinas están diseñadas pensando en absorber el impacto de las caídas. 
          Siempre recomendamos a los dueños del surf-club a crear (Reglas e Instrucciones). 
          Asesoramos en todo momento.`,
        },
        {
          title: '¿Cuanto vale una piscina de olas artificiales?',
          description: `Los rangos de precios para nuestros modelos estándar van desde 90.000€ hasta 400.000€`,
        },
      ],
    },
    {
      link: {
        label: 'Otras',
        href: '/tab3',
      },
      items: [
        {
          title: ' ¿Cuanto consume una maquina de olas artificiales?',
          description: `En nuestras instalaciones empleamos motores de 90 Kw. Entonces el consumo es de 90 Kw/h`,
        },
        {
          title: 'Teneis algún video',
          description: `Puedes ver https://www.youtube.com/@surfclubbcom `,
        },
        {
          title: '¿Donde fabrican?',
          description: `Gerona, España`,
        },
        {
          title: '¿Podeis desplazaros?',
          description: `Si. según acuerdo entre las partes.`,
        },
      ],
    },
  ],
};

// CallToAction data
export const callToActionData: CallToActionProps = {
  title: 'Surf con Olas Artificiales',
  subtitle:
    'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/Dao-Surfclubb/new-wave',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Get template',
      description: 'Aliquam sodales est lectus, quis.',
      href: 'https://github.com/Dao-Surfclubb/new-wave',
    },
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};

// CallToAction2 data
export const callToActionData2: CallToActionProps = {
  title: '¿Aún tienes preguntas?',
  subtitle:
    'Estaremos encantados de ayudarte a tomar la mejor decisión.',
  callToAction: {
    text: 'Contacto',
    href: '/contact',
    btnType: 'primary',
  },
};

// Feature data
export const featuresData: FeaturesProps = {
  header: {
    title: (
      <>
        Lo que obtienes con <span className="whitespace-nowrap">Surfclubb</span>
      </>
    ),
    subtitle:
      'Un Equipo con lo mejores profesionales actualmente en el mercado.',
    highlight: 'Caracteristicas',
  },
  items: [
    {
      title: 'Inversión.',
      description:
        'Invierte en un increíble negocio en el que todo el mundo disfrutará, aunque estén lejos del Mar y del clima adecuado.',
      icon: IconBrandTailwind,
      link: {
        label: '=>',
        href: '/',
      },
    },
    {
      title: 'Seguridad',
      description:
        'Garantizamos una innovadora experiencia deportiva tanto para profesionales como para principiantes.',
      icon: IconComponents,
      link: {
        label: '=>',
        href: '/',
      },
    },
    {
      title: 'Mantenimiento',
      description:
        'Ofrecemos soporte con el fin de mantener su centro en óptimas condiciones de funcionamiento.',
      icon: IconListCheck,
      link: {
        label: '=>',
        href: '/',
      },
    },
    {
      title: 'Fabricación',
      description:
        'Dejarás impresionado a la competencia por el reto que supone divertir a usuarios y público.',
      icon: IconRocket,
      link: {
        label: '=>',
        href: '/',
      },
    },
    {
      title: 'Productos',
      description:
        'Hemos creado una innovadora atracción para surfear olas artificiales tanto para niños como para adultos.',
      icon: IconArrowsRightLeft,
      link: {
        label: '=>',
        href: '/',
      },
    },
    {
      title: 'Detalles técnicos',
      description:
        'Ponemos a su servicio todo nuestro conocimiento para que no sólo el generador de olas, si no todo su centro de surf sea lo más rentable posible.',
      icon: IconBulb,
      link: {
        label: '=>',
        href: '/',
      },
    },
  ],
};

// Feature2 data
export const featuresData2: FeaturesProps = {
  header: {
    title: 'Centro de soporte', 
    subtitle: '¿Busca algo en particular?',
  },
  items: [
    {
      title: '¿Tiene alguna pregunta?',
      description: 'Ver nuestras preguntas frecuentes',
      icon: IconHelp,
      link: {
        href: '/faqs',
      },
    },
    {
      title: 'Chatea con nosotros',
      description: 'Chat en vivo con nuestro equipo de soporte',
      icon: IconMessages,
      link: {
        href: '/',
      },
    },
    {
      title: 'Consigue ayuda',
      description: 'Habla con nuestro equipo hoy',
      icon: IconHeadset,
      link: {
        href: '/',
      },
    },
  ],
};

// Feature data 3
export const featuresData3: FeaturesProps = {
  header: {
    title: 'Services',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Ready-to-use Components',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: IconComponents,
    },
    {
      title: 'Best Practices',
      description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
      icon: IconListCheck,
    },
    {
      title: 'Excellent Page Speed',
      description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
      icon: IconRocket,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Open to new ideas and contributions',
      description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
      icon: IconBulb,
    },
  ],
};

// Content data
export const contentData: ContentProps = {
  header: {
    title: 'SURF INDOOR',
    subtitle: 'Nuestra experiencia a la hora de planificar y ajustar la instalación, garantizan los mejores resultados.',
    highlight: 'surfear en el interior',
  },
  content:
    'Además de trabajar con usted para realizar un diseño óptimo del SurfClub-Indoor.',
  items: [
    {
      title: 'DISEÑO Y PLANIFICACIÓN DEL SURF INDOOR',
      description:
        'Nuestro equipo le asesorará en todas las fases del proyecto, con el fin de garantizar la mejor ola artificial para su infraestructura.',
    },
    {
      title: 'INSTALACIÓN DE LA MÁQUINA DE OLAS ARTIFICIALES PARA SURFEAR',
      description:
        'Nuestro personal le guiará durante las diferentes fases de su instalación, supervisando la obra civil y la construcción general del proyecto.',
    },
    {
      title: 'MANTENIMIENTO DEL GENERADOR DE OLAS ESTÁTICAS',
      description:
        'Garantizamos los servicios de soporte técnico y mantenimiento especializados y necesarios para asegurar el correcto estado de los elementos importantes de la instalación.',
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content2 data
export const content2Data: ContentProps = {
  content:
    'Ofrecemos una gama completa de servicios de asistencia y soporte con el fin de mantener su NEW WAVE / OLAS ARTIFICIALES PARA SURFEAR en óptimas condiciones de funcionamiento..',
  items: [
    {
      title: 'Especializados en diseño de interiores "Nave Industrial"',
    },
    {
      title: 'Construcción de instalaciones deportivas',
    },
    {
      title: 'Experiencia en el tratamiento de agua',
    },
    {
      title: 'Podemos ofrecer las mejores soluciones, para su piscina de olas artificiales.',
    },
    {
      title: 'El coste de mantenimiento no supone un importe relevante dentro de la cuenta de explotación.',
    },
    {
      title: 'Las labores de mantenimiento preventivo más frecuentes son sencillas  y pueden ser realizadas por el personal de su negocio.',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};



// Team data
export const teamData: TeamProps = {
  header: {
    title: 'Somos un pequeño equipo apasionado, que nos dedicamos a desarrollar nuevos e innovadores negocios.',
    subtitle:
      'Una organización joven y dinámica apasionada de los deportes. ¡Un equipo multicultural de todo el mundo! Venimos de diversos orígenes y aportamos diferentes personalidades, experiencias y habilidades al trabajo.',
    // highlight: 'Team',
  },
  teams: [
    {
      name: 'Investments-Dao',
      occupation: 'Socio',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Investments-Dao',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Joanna Matusiak',
      occupation: 'CEO CoFounder',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Joanna Matusiak',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Dao.Surfclubb',
      occupation: 'socio & Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Dao.Surfclubb',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Manuel Calatrava',
      occupation: 'CoFounder',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Manuel Calatrava',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    }, 
  ],
};

// Testimonial data
export const testimonialData: TestimonialProps = {
  header: {
    title: 'Que dicen los clientes sobre nosotros',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
    // highlight: 'Testimonial',
  },
  testimonials: [
    {
      name: 'Tayla Kirsten',
      occupation: 'Marketing Manager',
      comment:
        'Suspendisse mollis ante turpis, ut fermentum nulla finibus ac.',
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Silver Jordan',
      occupation: 'Senior Marketer',
      comment:
        'Mauris semper enim dolor, ac dictum sapien sor in ornare mattis.',
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Kelsey Arden',
      occupation: 'Co-Founder & CEO',
      comment:
        'Sed malesuada rhon varius venenatis ttimpoimgarti imperdiet ipsum.',
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
  ],
};

// Pricing data
export const pricingData: PricingProps = {
  header: {
    title: 'Precios según pedido',
    subtitle:
      'Una oportunidad de poder disfrutar la práctica de este deporte, 24 horas al día durante todos los días del año. Nuestras PISCINAS OLAS ARTIFICIALES como podrán apreciar se trata de lo último en el sector turismo y el ocio',
    // highlight: 'Pricing',
  },
  prices: [
    {
      title: 'Presupuesto',
      value: 120,
      period: 'por Unidad',
      texts: ['Precio', 'Condiciones de pago', 'Condiciones de transporte', 'Garantia',],
      callToAction: {
        text: 'A descontar precio final',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'Individual',
      value: 0,
      period: 'por Unidad',
      texts: ['Diseño', 'Construcción', 'Puesta a Punto', 'Garantia',],
      callToAction: {
        text: 's/pedido',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'Doble',
      value: 0,
      period: 'por Unidad',
      texts: ['Diseño', 'Construcción', 'Puesta a Punto', 'Garantia',],
      callToAction: {
        text: 's/pedido',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Comparison data
export const comparisonData: ComparisonProps = {
  header: {
    title: "What's available for each plan?",
    subtitle:
      'Morbi ut imperdiet ex. Nullam sed tincidunt purus. Donec finibus dui at odio dictum facilisis. Maecenas ut orci quis nisi congue maximus. Sed quis augue sapien.',
    // highlight: 'Comparison',
  },
  columns: [
    {
      title: 'compare plans',
      items: [
        {
          title: 'In vitae finibus',
        },
        {
          title: 'Cras sollicitudin',
        },
        {
          title: 'Suspendisse',
        },
        {
          title: 'Vestibulum ornare',
        },
        {
          title: 'In hendrerit',
        },
        {
          title: 'Ut pharetra',
        },
      ],
    },
    {
      title: 'basic',
      items: [
        {
          title: 'Free 7-day trial',
        },
        {
          title: 'Limited',
        },
        {
          title: '$29',
        },
        {
          title: false,
        },
        {
          title: false,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'standard',
      items: [
        {
          title: 'Free 15-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$69',
        },
        {
          title: false,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'premium',
      items: [
        {
          title: 'Free 30-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$199',
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
  ],
};

// Stats
export const statsData: StatsProps = {
  items: [
    {
      title: 13269,
      description: 'Downloads',
    },
    {
      title: 24.8,
      description: 'Stars',
    },
    {
      title: 1767.77,
      description: 'Forks',
    },
    {
      title: 484000,
      description: 'Users',
    },
  ],
};

// Contact data
export const contactData: ContactProps = {
  header: {
    title: 'Ponerse en contacto',
    subtitle: 'Equipo-Surfclubb',
    highlight: 'Contacto',
  },
  content:
    'Si desea mas información no dude en ponerse en contacto con nosotros',
  items: [
    {
      title: 'Dirección',
      description: ['17300 Blanes', 'Girona, España'],
      icon: IconMapPin,
    },
    {
      title: 'Contacto',
      description: ['Mobile: +34 669 494 825', 'Mail: surfclubb@protonmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Horario',
      description: ['Lunes - Viernes: 08:00 - 17:00', 'Sabado y Domingo: cerrado'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Hablamos?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'nombre',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'email',
        placeholder: 'email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Escriba su mensaje...',
    },
    btn: {
      title: 'Enviar Mensaje',
      type: 'submit',
    },
  },
};

// Contact2 data
export const contact2Data: ContactProps = {
  header: {
    title: 'Ponerse en contacto',
    subtitle: 'Equipo-Surfclubb',
    highlight: 'Contacto',
  },
  content:
    'Si desea mas información no dude en ponerse en contacto con nosotros',
  items: [
    {
      title: 'Dirección',
      description: ['17300 Blanes', 'Girona, España'],
      icon: IconMapPin,
    },
    {
      title: 'Contacto',
      description: ['Mobile: +34 669 494 825', 'Mail: surfclubb@protonmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Horario',
      description: ['Lunes - Viernes: 08:00 - 17:00', 'Sabado y Domingo: cerrado'],
      icon: IconClock,
    },
  ],
  form: {
    title: '¿Necesitas ayuda? Abrir Ticket',
    description:
      ' Nuestro equipo de soporte se comunicará con usted lo antes posible por correo electrónico. Gracias por ponerse en contacto con nosotros Equipo-Surfclubb.',
    inputs: [
      {
        type: 'text',
        label: 'Nombre',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'Nombre',
      },
      {
        type: 'text',
        label: 'Apellidos',
        name: 'lastName',
        placeholder: 'Apellidos',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        placeholder: 'Email address',
      },
    ],
    radioBtns: {
      label: '¿Cuál es el motivo de su contacto?',
      radios: [
        {
          label: 'General ',
        },
        {
          label: 'Ayuda tecnica',
        },
        {
          label: 'Reclamaciones',
        },
        {
          label: 'Otros',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'Como podemos ayudar?',
      name: 'textarea',
      placeholder: 'Escribe tu mensaje...',
    },
    checkboxes: [
      {
        label: '¿Has leído nuestra política de privacidad?',
        value: '',
      },
      {
        label: '¿Quieres recibir actualizaciones mensuales por correo electrónico?',
        value: '',
      },
    ],
    btn: {
      title: 'Enviar Mensaje',
      type: 'submit',
    },
  },
};

// Footer data
export const footerData: FooterProps = {
  title: 'Surfclubb',
  links: [
    {
      label: 'Terminos y Condiciones',
      href: '/terms',
    },
    {
      label: 'Politica de Privacidad',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Productos',
      links: [
        {
          label: 'Caracteristicas',
          href: '/',
        },
        {
          label: 'Seguridad',
          href: '/',
        },
        {
          label: 'Equipo',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Precios',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'Equipo',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Tienda/Shop',
          href: 'https://dao.surfclubb.com/tienda/?v=04c19fa1e772',
        },
      ],
    },
  ],
  socials: [
    { label: 'Youtube', icon: IconBrandYoutube, href: 'https://www.youtube.com/c/surfclubbcom' },
    { label: 'Twitter', icon: IconBrandTwitter, href: 'https://twitter.com/surfclubbcom' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/Dao-Surfclubb/new-wave' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(/logo.svg)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://surfclubb.com/">
        {' '}
        Equipo-Surfclubb
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Condiciones',
      href: '/terms',
    },
    {
      label: 'Politica de Privacidad',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Dirección',
      texts: ['17300 Blanes, Gerona, España'],
    },
    {
      title: 'Telefono',
      texts: ['Oficina: +34 669 494 825', 'Móvil: +34 669 494 825'],
    },
    {
      title: 'Email',
      texts: ['Oficina: surfclubb@protonmail.com', 'Site: https://surfclubb.com'],
    },
  ],
  socials: [
    
    { label: 'Youtube', icon: IconBrandYoutube, href: 'https://www.youtube.com/c/surfclubbcom' },
    { label: 'Twitter', icon: IconBrandTwitter, href: 'https://twitter.com/surfclubbcom' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/Dao-Surfclubb/new-wave' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(/logo.svg)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://surfclubb.com/">
        {' '}
        Equipo-Surfclubb
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};
