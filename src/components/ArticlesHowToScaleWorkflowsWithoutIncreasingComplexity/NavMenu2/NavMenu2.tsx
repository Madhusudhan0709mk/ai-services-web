import styles from "./NavMenu2.module.css";
import Link from "next/link";
export function NavMenu2() {
  return (
    <nav className={styles.navMenu2}>
      <div className={styles.features4}>
        <Link
          href={"/#feature"}
          className={styles.navLink11}
          data-highlight={"true"}
          tabIndex={"0"}
          data-framecoded-trigger={"h1nfi8wv"}
        >
          <div className={styles.features5}>
            <p className={styles.features6} dir={"auto"} data-framecoded-state={"h1nfi8wvs0_0"}>
              Features
            </p>
          </div>
          <div
            className={styles.line12}
            aria-label={"Line decoration"}
            data-framecoded-state={"h1nfi8wvs1"}
          ></div>
        </Link>
      </div>
      <div className={styles.careers}>
        <Link
          href={"/#Careers"}
          className={styles.navLink12}
          data-highlight={"true"}
          tabIndex={"0"}
          data-framecoded-trigger={"h1g3v175"}
        >
          <div className={styles.careers2}>
            <p className={styles.careers3} dir={"auto"} data-framecoded-state={"h1g3v175s0_0"}>
              Careers
            </p>
          </div>
          <div
            className={styles.line13}
            aria-label={"Line decoration"}
            data-framecoded-state={"h1g3v175s1"}
          ></div>
        </Link>
      </div>
      <div className={styles.howItWorks}>
        <Link
          href={"/#works"}
          className={styles.navLink13}
          data-highlight={"true"}
          tabIndex={"0"}
          data-framecoded-trigger={"h1ym0zwc"}
        >
          <div className={styles.howItWorks2}>
            <p className={styles.howItWorks3} dir={"auto"} data-framecoded-state={"h1ym0zwcs0_0"}>
              How it works
            </p>
          </div>
          <div
            className={styles.line14}
            aria-label={"Line decoration"}
            data-framecoded-state={"h1ym0zwcs1"}
          ></div>
        </Link>
      </div>
      <div className={styles.contact4}>
        <Link
          href={"/contact"}
          className={styles.navLink14}
          data-highlight={"true"}
          tabIndex={"0"}
          data-framecoded-trigger={"h1lu4k72"}
        >
          <div className={styles.contact5}>
            <p className={styles.contact6} dir={"auto"} data-framecoded-state={"h1lu4k72s0_0"}>
              Contact
            </p>
          </div>
          <div
            className={styles.line15}
            aria-label={"Line decoration"}
            data-framecoded-state={"h1lu4k72s1"}
          ></div>
        </Link>
      </div>
    </nav>
  );
}
