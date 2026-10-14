import styles from "./LogoNav.module.css";
import { Image } from "../../../ui/Image";
import Link from "next/link";
export function LogoNav() {
  return (
    <nav className={styles.logoNav} name={"Navber"} data-border={"true"}>
      <div className={styles.logo2} data-border={"true"}>
        <div className={styles.logoWrapper}>
          <Link href={"/"} className={styles.logo}>
            <div className={styles.logo3}>
              <Image
                className={styles.logo4}
                src={"/assets/Y2b8ZOomm2Mka9GOqbzVlr8tok-abcb92ebe4.svg"}
                alt={"logo"}
                width={132}
                height={26}
                srcSet={
                  "/assets/Y2b8ZOomm2Mka9GOqbzVlr8tok-19ea1b8c31.svg 66w, /assets/Y2b8ZOomm2Mka9GOqbzVlr8tok-3f6745ad68.svg 132w, /assets/Y2b8ZOomm2Mka9GOqbzVlr8tok-f9bc628445.svg 264w"
                }
                sizes={"(max-width: 132px) 100vw, 132px"}
                priority
              />
            </div>
          </Link>
        </div>
        <nav className={styles.navLinkGroup}>
          <div className={styles.about}>
            <Link
              href={"/about"}
              className={styles.navLink}
              data-highlight={"true"}
              tabIndex={"0"}
              data-framecoded-trigger={"h1ro8n0w"}
            >
              <div className={styles.about2}>
                <p className={styles.about3} dir={"auto"} data-framecoded-state={"h1ro8n0ws0_0"}>
                  About
                </p>
              </div>
              <div
                className={styles.line}
                aria-label={"Line decoration"}
                data-framecoded-state={"h1ro8n0ws1"}
              ></div>
            </Link>
          </div>
          <div className={styles.features}>
            <Link
              href={"/#feature"}
              className={styles.navLink2}
              data-highlight={"true"}
              tabIndex={"0"}
              data-framecoded-trigger={"h1ll0uam"}
            >
              <div className={styles.features2}>
                <p className={styles.features3} dir={"auto"} data-framecoded-state={"h1ll0uams0_0"}>
                  Features
                </p>
              </div>
              <div
                className={styles.line2}
                aria-label={"Line decoration"}
                data-framecoded-state={"h1ll0uams1"}
              ></div>
            </Link>
          </div>
          <div className={styles.pricing}>
            <Link
              href={"/#pricing"}
              className={styles.navLink3}
              data-highlight={"true"}
              tabIndex={"0"}
              data-framecoded-trigger={"h1cpb1tq"}
            >
              <div className={styles.pricing2}>
                <p className={styles.pricing3} dir={"auto"} data-framecoded-state={"h1cpb1tqs0_0"}>
                  Pricing
                </p>
              </div>
              <div
                className={styles.line3}
                aria-label={"Line decoration"}
                data-framecoded-state={"h1cpb1tqs1"}
              ></div>
            </Link>
          </div>
          <div className={styles.articles}>
            <Link
              href={"/articles"}
              className={styles.navLink4}
              data-highlight={"true"}
              data-framer-page-link-current={"true"}
              tabIndex={"0"}
              data-framecoded-trigger={"h2hhmh4"}
            >
              <div className={styles.articles2}>
                <p className={styles.articles3} dir={"auto"} data-framecoded-state={"h2hhmh4s0_0"}>
                  Articles
                </p>
              </div>
              <div
                className={styles.line4}
                aria-label={"Line decoration"}
                data-framecoded-state={"h2hhmh4s1"}
              ></div>
            </Link>
          </div>
          <div className={styles.contact}>
            <Link
              href={"/contact"}
              className={styles.navLink5}
              data-highlight={"true"}
              tabIndex={"0"}
              data-framecoded-trigger={"h1pi8mbh"}
            >
              <div className={styles.contact2}>
                <p className={styles.contact3} dir={"auto"} data-framecoded-state={"h1pi8mbhs0_0"}>
                  Contact
                </p>
              </div>
              <div
                className={styles.line5}
                aria-label={"Line decoration"}
                data-framecoded-state={"h1pi8mbhs1"}
              ></div>
            </Link>
          </div>
        </nav>
        <div className={styles.getStarted}>
          <Link
            href={"/contact"}
            className={styles.getStartedLink}
            data-highlight={"true"}
            data-reset={"button"}
            tabIndex={"0"}
            data-framecoded-trigger={"h1p890mi"}
            data-framecoded-state={"h1p890misroot"}
          >
            <div className={styles.getStarted2}>
              <div
                className={styles.startYourGrowthStrategy}
                data-framecoded-state={"h1p890mis0_0"}
              >
                <p className={styles.getStarted3} dir={"auto"}>
                  Get Started
                </p>
              </div>
              <div
                className={styles.startYourGrowthStrategy2}
                data-framecoded-state={"h1p890mis0_1"}
              >
                <p className={styles.getStarted4} dir={"auto"}>
                  Get Started
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.icon} data-highlight={"true"} tabIndex={"0"}>
          <div className={styles.bottom}></div>
          <div className={styles.top}></div>
        </div>
      </div>
    </nav>
  );
}
