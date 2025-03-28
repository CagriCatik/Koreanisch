import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Einfacher Einstieg',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Starte sofort mit dem Lernen! Unser Kurs ist für Anfänger konzipiert und macht den Einstieg in die koreanische Sprache leicht und unterhaltsam.
      </>
    ),
  },
  {
    title: 'Lerne mit Struktur',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Der Kurs ist klar strukturiert – von Hangul bis zu komplexeren Grammatikthemen. Du lernst Schritt für Schritt, ohne überfordert zu werden.
      </>
    ),
  },
  {
    title: 'Kulturelles Verständnis',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Sprache ist Kultur. Lerne nicht nur Vokabeln, sondern auch Hintergründe zur koreanischen Geschichte und Alltag.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
