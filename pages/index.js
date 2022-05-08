import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/utils.module.css';

import cn from 'classnames';

function Image({ src, width, height }) {
  const path = "/eurian/out/images/lp/" + src;
  return <img src={path} width={width} height={height} />;
}

function Wrapper({ children }) {
  return (<div style={{ backgroundColor: 'white'}}>{children}</div>);
}

function Hero() {
  return (<Image src="bunner.png" width="1300" height="800" />);
}

function ReadButton() {
  return (
    <div className={styles.readButtonWrapper}>
      <Link href="/comic">
        <a>
          <Image src="button_on.png" />
        </a>
      </Link>
    </div>
  );
}

function Heading({ children }) {
  return (
    <h2 className={cn(styles.headingWrapper)}>
      {children}
    </h2>
  );
}

function CheckList({ children }) {
  return (
    <ul className={styles.checkList}>
      {children}
    </ul>
  );
}

function CheckListItem({ children }) {
  return (
    <li className={cn(styles.checkListItem, styles.text)}>{children}</li>
  );
}

function Triangle() {
  return (
    <div className={styles.svgWrapper}>
      <svg width="200px" height="50px" viewBox="0 0 200 50">
        <polygon points="0,0 100,50 200,0" fill="red" />
      </svg>
    </div>
  );
}

function LogoImg() {
  return (<div className={styles.logo}><Image src="logo.png" /></div>);
}

function Author() {
  return (
    <div className={styles.lpAuthorWrapper}>
      <div className={styles.flex}>
        <div className={styles.lpIconWrapper}>
          <Image src="kakedashi_chan02.png" />
        </div>
        <p className={cn(styles.authorText, styles.text)}>かけだしちゃん (<a href="https://twitter.com/kakedashi_chan">@kakedashi_chan</a>)</p>
      </div>
    </div>
  );
}

function Voice({ src, name, summary, children }) {
  return (
    <div>
      <div className={styles.lpGreetingWrapper}>
        <div className={styles.flex}>
          <div className={styles.lpIconWrapper}>
            <Image src={src} />
          </div>
          <div className={styles.authorText}>
            <p className={styles.text}><span className={styles.voiceSummary}>{summary}</span></p>
            <p className={cn(styles.text)}>{name}</p>
          </div>
        </div>
        <div className={cn(styles.appealText, styles.text)}>{children}</div>
      </div>
    </div>
  );
}

function FAQ({ children }) {
  return (
    <div className={cn(styles.faq)}>
      { children }
    </div>
  );
}

function Question({ children }) {
  return (
    <div className={cn(styles.text, styles.question)}>Q. {children}</div>
  );
}

function Answer({ children }) {
  return (
    <div className={cn(styles.text, styles.answer)}>A. {children}</div>
  );
}

export default function Home() {
  return (
    <Layout backgroundColor="#DDEEF6">
      <Wrapper>
      <Head>
        <title>上京して2日で絵を買わされるワケがない！</title>
      </Head>
      <Hero />
        <p className={cn(styles.appealText, styles.text)}>思わずつっこまずにはいられない？？<br />ほのぼの上京エッセイ漫画をどうぞ！</p>
        <ReadButton />
        <Heading>こんなお悩みはありませんか？</Heading>
        <CheckList>
          <CheckListItem>優柔不断で困っている</CheckListItem>
          <CheckListItem>好みのタイプの異性のお願いを断れない</CheckListItem>
          <CheckListItem>特別扱いに弱い</CheckListItem>
          <CheckListItem>部屋のインテリアで悩んでいる</CheckListItem>
          <CheckListItem>さくっと漫画が読みたい</CheckListItem>
        </CheckList>
        <p className={cn(styles.appealText, styles.text)}>そんなあなたに…</p>
        <Triangle />
        <LogoImg />
        <p className={cn(styles.appealText, styles.text)}>5分でさくっと読めて、微妙に満足できる<br />ほのぼのエッセイをお楽しみください！</p>
        <ReadButton />
        <Heading>作者紹介</Heading>
        <Author />
        <p className={cn(styles.appealText, styles.text)}>漫画をTwitterにアップするアラサー<br />やたら流されるのが悩み</p>
        <Heading>読者の声</Heading>
        <p className={cn(styles.appealText, styles.text)}>＼続々とお声をいただいています！／</p>
        <Voice src="takashi_kun02.png" name="たかしくん" summary="本当に5分で読めました！">
          あっという間に5分間が経っていました。<br />
          まるで魔法の様です、本当に感謝しています！
        </Voice>
        <Voice src="kakedashi_chan02.png" name="かけだしさん" summary="身が引き締まります！">
        なかなかできない体験ですね！
流されやすい自覚があるので、
気を引き締めていきたいです！
        </Voice>
        <Voice src="engineer_chan.png" name="エンジニアさん" summary="秋葉原は私も好きだけれど">
          なんでカーテンを買いに秋葉原に行ったんですか？
        </Voice>
        <p className={styles.small}>※個人の感想です。効果を保証するものではありません</p>
        <Heading>Q&amp;A</Heading>
        <FAQ>
          <Question>エウリアンってなに？</Question>
          <Answer>ちょっと強引に会場に連れ込んで絵を売ってくる人達を揶揄した言葉らしいよ！</Answer>
        </FAQ>
        <FAQ>
          <Question>お金、コンビニでおろせなかったの？</Question>
          <Answer>はい！コンビニでお金をおろすのも初めてだったので、ただの操作ミスの可能性もありますが…<br />
          地元の銀行が対応してなかったか、時間外取引だったのかもしれません
          </Answer>
        </FAQ>
        <FAQ>
          <Question>買っておけばよかったと後悔したことは？</Question>
          <Answer>ありません！</Answer>
        </FAQ>
        <FAQ>
          <Question>最後に一言</Question>
          <Answer><span className={styles.juman}>10万円欲しい！！</span></Answer>
        </FAQ>
        <ReadButton />
      </Wrapper>
    </Layout>
  );
}
