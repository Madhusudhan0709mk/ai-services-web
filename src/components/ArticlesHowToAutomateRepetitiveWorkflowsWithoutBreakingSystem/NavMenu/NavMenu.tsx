import styles from "./NavMenu.module.css";
import Link from "next/link";
export function NavMenu() {
  return (
    <nav className={styles.navMenu}>
      <div className={styles.home}>
        <Link
          href={"/"}
          className={styles.navLink6}
          data-highlight={"true"}
          tabIndex={"0"}
          data-framecoded-trigger={"h1j9dax3"}
        >
          <div className={styles.home2}>
            <p className={styles.home3} dir={"auto"} data-framecoded-state={"h1j9dax3s0_0"}>
              Home
            </p>
          </div>
          <div
            className={styles.line7}
            aria-label={"Line decoration"}
            data-framecoded-state={"h1j9dax3s1"}
          ></div>
        </Link>
      </div>
      <div className={styles.aboutUs}>
        <Link
          href={"/about"}
          className={styles.navLink7}
          data-highlight={"true"}
          tabIndex={"0"}
          data-framecoded-trigger={"h1me71k1"}
        >
          <div className={styles.aboutUs2}>
            <p className={styles.aboutUs3} dir={"auto"} data-framecoded-state={"h1me71k1s0_0"}>
              About us
            </p>
          </div>
          <div
            className={styles.line8}
            aria-label={"Line decoration"}
            data-framecoded-state={"h1me71k1s1"}
          ></div>
        </Link>
      </div>
      <div className={styles.pricing4}>
        <Link
          href={"/#pricing"}
          className={styles.navLink8}
          data-highlight={"true"}
          tabIndex={"0"}
          data-framecoded-trigger={"hesjm4n"}
        >
          <div className={styles.pricing5}>
            <p className={styles.pricing6} dir={"auto"} data-framecoded-state={"hesjm4ns0_0"}>
              Pricing
            </p>
          </div>
          <div
            className={styles.line9}
            aria-label={"Line decoration"}
            data-framecoded-state={"hesjm4ns1"}
          ></div>
        </Link>
      </div>
      <div className={styles.articles4}>
        <Link
          href={"/articles"}
          className={styles.navLink9}
          data-highlight={"true"}
          tabIndex={"0"}
          data-framecoded-trigger={"h1by7gfd"}
        >
          <div className={styles.articles5}>
            <p className={styles.articles6} dir={"auto"} data-framecoded-state={"h1by7gfds0_0"}>
              Articles
            </p>
          </div>
          <div
            className={styles.line10}
            aria-label={"Line decoration"}
            data-framecoded-state={"h1by7gfds1"}
          ></div>
        </Link>
      </div>
      <div className={styles.articlesDetails}>
        <Link
          href={"/articles/how-to-automate-repetitive-workflows-without-breaking-system"}
          className={styles.navLink10}
          data-highlight={"true"}
          data-framer-page-link-current={"true"}
          tabIndex={"0"}
          data-framecoded-trigger={"ht8vd1a"}
        >
          <div className={styles.articlesDetails2}>
            <p
              className={styles.articlesDetails3}
              dir={"auto"}
              data-framecoded-state={"ht8vd1as0_0"}
            >
              Articles Details{" "}
            </p>
          </div>
          <div
            className={styles.line11}
            aria-label={"Line decoration"}
            data-framecoded-state={"ht8vd1as1"}
          ></div>
        </Link>
      </div>
    </nav>
  );
}
