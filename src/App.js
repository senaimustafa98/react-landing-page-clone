import styles from './App.module.css';
import Section from './components/Section.js';
import Button from './components/Button.js';
import Icon from './svg/icon.svg';


export default function App() {
  return (
    <>
    <header>
      <div className={styles.header}>
      <h1>Eclipse</h1>
      <nav>
        <ul>
          <li>
          <a href="/">Features</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">FAQs</a></li>
        </ul>
      </nav>
      <a href="/">Start now</a>
      </div>
    </header>
    <main>
      <Section>
      <div>
      <h1 className={styles.intro}>All-in-one Finance App <br />
        you always wanted
      </h1>
      <p>Gain control of your finances with our all-in-one finance app. Track your <br />spending, find investment opportunities, and learn.</p>
      <Button >Get Started</Button>
      </div>
      <div className={styles.wrapper}>

      <img src="/Eclipse.png" className={styles.mainImg} alt="Intro image" />
      </div>
      </Section>

    <Section >
    <div>
      <h2>Start growing your wealth with <br />Eclipse</h2>
      <p>All-in-one personal finance app that simplifies investment opportunities, expense <br/> tracking, and financial news for users..</p>
    </div>
    <div className={styles.gridDiv}>
  <ul className={styles.featureList}>
    <li className={styles.gridItem}>
  <div className={styles.iconContainer}>
    <img src={Icon} alt="Description of icon" className={styles.miniIcon} />
  </div>
  <div className={styles.textContainer}>
    <h3 className={styles.title}>Automated Expense Tracking</h3>
    <p className={styles.description}>Eclipse automatically tracks your expenses and provides a monthly report, in just a single click.</p>
  </div>
</li>
<li className={styles.gridItem}>
  <div className={styles.iconContainer}>
    <img src={Icon} alt="Description of icon" className={styles.miniIcon} />
  </div>
  <div className={styles.textContainer}>
    <h3 className={styles.title}>Investment Opportunities</h3>
    <p className={styles.description}>Eclipse provides you with the best investment opportunities in Mutual Funds and FDs.</p>
  </div>
</li>
<li className={styles.gridItem}>
  <div className={styles.iconContainer}>
    <img src={Icon} alt="Description of icon" className={styles.miniIcon} />
  </div>
  <div className={styles.textContainer}>
    <h3 className={styles.title}>Latest Financial News</h3>
    <p className={styles.description}>Eclipse provides you with the latest financial news and market trends.</p>
  </div>
</li>
<li className={styles.gridItem}>
  <div className={styles.iconContainer}>
    <img src={Icon} alt="Description of icon" className={styles.miniIcon} />
  </div>
  <div className={styles.textContainer}>
    <h3 className={styles.title}>Advance Tax Calculator
    </h3>
    <p className={styles.description}>Take the guesswork out of your tax calculations with advanced tax calculator.</p>
  </div>
</li>
<li className={styles.gridItem}>
  <div className={styles.iconContainer}>
    <img src={Icon} alt="Description of icon" className={styles.miniIcon} />
  </div>
  <div className={styles.textContainer}>
    <h3 className={styles.title}>Eclipse Education (For Users)
    </h3>
    <p className={styles.description}>Eclipse Education is a fintech blogging platform for users to learn about finance and investments.</p>
  </div>
</li>
<li className={styles.gridItem}>
  <div className={styles.iconContainer}>
    <img src={Icon} alt="Description of icon" className={styles.miniIcon} />
  </div>
  <div className={styles.textContainer}>
    <h3 className={styles.title}>Eclipse Education (For Writers)
    </h3>
    <p className={styles.description}>A fintech blogging platform for writers to showcase their work in finance and investments.</p>
  </div>
</li>


  </ul>
    </div>
    </Section>

    <Section >
    <div className={styles.blurDiv}>
      <img
    src="https://eclipsefin.netlify.app/_next/static/media/bg-pattern.5aa07776.webp"
    alt="Background pattern"
    className={styles.blurBackground}
      />
      <div className={styles.blurSection}>
      <h2>Build a head start to your finances</h2>
      <p>Eclipse is the perfect answer! Our platform enables you to create wealth, manage <br />your expenses, stay up to date with the latest financial news, and get ready for<br /> upcoming tax season.</p>
      <Button >Start now</Button>
    </div>
    </div>
    </Section>
    <Section>
    <div>
      <h2>Find a plan to power your finances</h2>
    </div>
    <div className={styles.PricingContainer}>
      <div className={styles.PricingCard}>
        <h3 className={styles.PricingPlan}>Starter</h3>
        <h4>12$ <span className={styles.monthly}>/mo</span></h4>
        <p className={styles.PricingTag}>Ideal for growing finance</p>
        <ul className={styles.PricingList}>
         <li>Automated Expense Tracking(Detail Analysis)</li>
         <li>Family Expense Tracking (4 Users Only)</li>
         <li>Latest Fintech News</li>
         <li>Investment Opportunities</li>
         <li>Advance Tax Calculator</li>
        </ul>
        <Button buttonDark>Coming Soon!</Button>
      </div>
      <div className={styles.PricingCardBasic}>
      <h3 className={styles.PricingPlan}>Basic plan</h3>
        <h4>0$ <span className={styles.monthly}>/mo</span></h4>
        <p className={styles.PricingTag}>For individuals</p>
        <ul className={styles.PricingList}>
         <li>Automated Expense Tracking</li>
         <li>Family Expense Tracking(2 Users Only)</li>
         <li>Latest Fintech News</li>
         <li>Investment Opportunities(Only showcase)</li>
         <li>Advance Tax Calculator</li>
        </ul>
        <Button large>Download Now!</Button>
      </div>
      <div className={styles.PricingCard}>
      <h3 className={styles.PricingPlan}>Pro</h3>
        <h4>32$ <span className={styles.monthly}>/mo</span></h4>
        <p className={styles.PricingTag}>Built for financially savvy</p>
        <ul className={styles.PricingList}>
         <li>Automated Expense Tracking</li>
         <li>Family Expense Tracking(6 Users Only)</li>
         <li>Latest Fintech News</li>
         <li>Personalized Investment Opportunities</li>
         <li>Tax calculation and Tax saving schemes</li>
        </ul>
        <Button buttonDark>Coming Soon!</Button>
        </div>


    </div>


    </Section>

    <section></section>
    </main>
    <footer>
    <div className={styles.footerBorder}>
      <div className={styles.links}>
      <a href="https://twitter.com/InsideLabsInc?t=dVl3FS-Kuhj6JNfL3z1HOg&s=08">placeholder </a>
      <a href="https://www.linkedin.com/company/inside-labs/">placeholder</a>
      </div>
      <span className={styles.footerText}>© 2023 Inside Labs. All rights reserved.</span>
    </div>
    </footer>
    </>
  );
}
