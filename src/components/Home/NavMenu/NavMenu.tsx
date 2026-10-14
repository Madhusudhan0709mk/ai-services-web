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
          data-framer-page-link-current={"true"}
          tabIndex={"0"}
        >
          <div className={styles.home2}>
            <p className={styles.home3} dir={"auto"}>
              Home
            </p>
          </div>
          <div className={styles.line29} aria-label={"Line decoration"}></div>
        </Link>
      </div>
      <div className={styles.aboutUs}>
        <Link href={"/about"} className={styles.navLink7} data-highlight={"true"} tabIndex={"0"}>
          <div className={styles.aboutUs2}>
            <p className={styles.aboutUs3} dir={"auto"}>
              About us
            </p>
          </div>
          <div className={styles.line30} aria-label={"Line decoration"}></div>
        </Link>
      </div>
      <div className={styles.pricing4}>
        <Link href={"/#pricing"} className={styles.navLink8} data-highlight={"true"} tabIndex={"0"}>
          <div className={styles.pricing5}>
            <p className={styles.pricing6} dir={"auto"}>
              Pricing
            </p>
          </div>
          <div className={styles.line31} aria-label={"Line decoration"}></div>
        </Link>
      </div>
      <div className={styles.articles4}>
        <Link href={"/articles"} className={styles.navLink9} data-highlight={"true"} tabIndex={"0"}>
          <div className={styles.articles5}>
            <p className={styles.articles6} dir={"auto"}>
              Articles
            </p>
          </div>
          <div className={styles.line32} aria-label={"Line decoration"}></div>
        </Link>
      </div>
      <div className={styles.articlesDetails}>
        <Link
          href={"/articles/how-to-automate-repetitive-workflows-without-breaking-system"}
          className={styles.navLink10}
          data-highlight={"true"}
          tabIndex={"0"}
        >
          <div className={styles.articlesDetails2}>
            <p className={styles.articlesDetails3} dir={"auto"}>
              Articles Details{" "}
            </p>
          </div>
          <div className={styles.line33} aria-label={"Line decoration"}></div>
        </Link>
      </div>
    </nav>
  );
}
