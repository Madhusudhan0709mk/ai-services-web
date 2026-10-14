import styles from "./UpTo.module.css";

export interface UpToProps {
  /** Text */
  upTo: string;
}

export function UpTo(props: UpToProps) {
  return (
    <div className={styles.upTo5}>
      <div className={styles.upTo52}>
        <div className={styles.icon31} aria-hidden={"true"}>
          <div className={styles.div194}>
            <span
              className={styles.icon30}
              data-framecoded-svg="true"
              aria-hidden="true"
              dangerouslySetInnerHTML={{
                __html:
                  '<svg viewBox="0 0 20 20" preserveAspectRatio="none" width="100%" height="100%" style="fill: rgb(26, 26, 26); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg-655499785_539" style="fill: rgb(26, 26, 26); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
              }}
            />
          </div>
        </div>
        <div className={styles.planFeatureText}>
          <p className={styles.upTo53} dir={"auto"}>
            {props.upTo}
          </p>
        </div>
      </div>
    </div>
  );
}
