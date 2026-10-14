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
        >
          <div className={styles.features5}>
            <p className={styles.features6} dir={"auto"}>
              Features
            </p>
          </div>
          <div className={styles.line34} aria-label={"Line decoration"}></div>
        </Link>
      </div>
      <div className={styles.careers}>
        <Link
          href={"/#Careers"}
          className={styles.navLink12}
          data-highlight={"true"}
          tabIndex={"0"}
        >
          <div className={styles.careers2}>
            <p className={styles.careers3} dir={"auto"}>
              Careers
            </p>
          </div>
          <div className={styles.line35} aria-label={"Line decoration"}></div>
        </Link>
      </div>
      <div className={styles.howItWorks}>
        <Link href={"/#works"} className={styles.navLink13} data-highlight={"true"} tabIndex={"0"}>
          <div className={styles.howItWorks2}>
            <p className={styles.howItWorks3} dir={"auto"}>
              How it works
            </p>
          </div>
          <div className={styles.line36} aria-label={"Line decoration"}></div>
        </Link>
      </div>
      <div className={styles.contact4}>
        <Link href={"/contact"} className={styles.navLink14} data-highlight={"true"} tabIndex={"0"}>
          <div className={styles.contact5}>
            <p className={styles.contact6} dir={"auto"}>
              Contact
            </p>
          </div>
          <div className={styles.line37} aria-label={"Line decoration"}></div>
        </Link>
      </div>
    </nav>
  );
}
