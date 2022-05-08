import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/utils.module.css';

import Layout from '../components/layout';


function Image({ src, width, height }) {
  const path = "/eurian/out/images/comic/" + src;
  return <img src={path} width={width} height={height} />;
}

// 結局全部これになるんじゃない？
function MarginAuto({ children, width, margin }) {
  return (
    <div style={{ marginBottom: margin, marginRight: 'auto', marginLeft: 'auto', maxWidth: width, textAlign: 'center' }}>
      {children}
    </div>
  );
}

function Border({ children }) {
  return (
    <div style={{ display: 'inline-block', boxSizing: 'border-box', border: '2px solid grey', margin: '0px auto', verticalAlign: 'middle' }}>
      {children}
    </div>
  );
}

function ProjectorImg() {
  return (
    <MarginAuto margin="30px" width="50px">
      <Image src="eisyaki.png" width="50" height="75" />
    </MarginAuto>
  );
};

function ComicImg({ src }) {
  return (
    <div style={{ margin: '50px auto', width: '100%', textAlign: 'center' }}>
      <Border>
        <Image src={src} className={styles.image} />
      </Border>
    </div>
  );
};

function LogoImg() {
  return (
    <MarginAuto margin="100px" width="698px">
      <Image src="logo.png" width="698" height="448"/>
    </MarginAuto>
  );
};

function BackButton() {
  return (
    <MarginAuto margin="50px" width="200px">
      <Link href="/">
        <a>
          <Image src="modoru.png" />
        </a>
      </Link>
    </MarginAuto>
  );
};

function Comment({ children, icon, reverse }) {
  return (
    <div className={styles.flex}>
      <div className={styles.flexIcon}>
        <Image src={icon} />
      </div>
      <div className={styles.flexComment}>
        {children}
      </div>
    </div>
  );
}

export default function Comic() {
  return (
    <Layout backgroundColor="#FAFAF2">
      <Head>
        <title>上京して2日で絵を買わされるワケがない！</title>
      </Head>
      <h2 className={styles.headingCenter}>オモコロ杯 2022 応募作品</h2>
      <ProjectorImg />
      <ComicImg src="01.jpg" />
      <LogoImg />
      <ComicImg src="02.jpg" />
      <ComicImg src="03.jpg" />
      <ComicImg src="04.jpg" />
      <ComicImg src="05.jpg" />
      <ComicImg src="06.jpg" />
      <ComicImg src="07.jpg" />
      <ComicImg src="08.jpg" />
      <ComicImg src="09.jpg" />
      <ComicImg src="10.jpg" />
      <ComicImg src="11.jpg" />
      <ComicImg src="12.jpg" />
      <ComicImg src="13.jpg" />
      <ComicImg src="14.jpg" />
      <Comment icon="kakedashi_chan.png" reverse={false}>描きながらいろいろ思い出しちゃったよ！春は出会いと新生活の季節だよね。<br />そんな春の香りを感じるたびに、ほろ苦い思い出として蘇ってくる…とても切ない人生の1ページです。
</Comment>
      <Comment icon="takashi_kun.png" reverse={false}>上京したの夏だろ</Comment>
      <p className={styles.fin}>~𝓕𝓲𝓷~</p>
      <BackButton />
    </Layout>
  );
}
