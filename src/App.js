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

      <img src="/Eclipse.png" className={styles.mainImg} />
      </div>
      </Section>

    <Section ></Section>
    <div>
      <h2>Start growing your wealth with <br />Eclipse</h2>
      <p>All-in-one personal finance app that simplifies investment opportunities, expense <br/> tracking, and financial news for users..</p>
    </div>
    <div className={styles.gridContainer}>
  <ul>
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



  </ul>
    </div>

    <section></section>

    <section></section>

    <section></section>
    </main>
    <footer>
    © 2023 Inside Labs. All rights reserved.
    </footer>
    </>
  );
}
