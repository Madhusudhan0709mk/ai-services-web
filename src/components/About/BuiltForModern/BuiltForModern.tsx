import styles from "./BuiltForModern.module.css";

export interface BuiltForModernProps {
  /** Text */
  builtForModern: string;
}

export function BuiltForModern(props: BuiltForModernProps) {
  return (
    <div className={styles.builtForModern}>
      <div className={styles.icon17} aria-hidden={"true"}>
        <div className={styles.div81}>
          <span
            className={styles.icon16}
            data-framecoded-svg="true"
            aria-hidden="true"
            dangerouslySetInnerHTML={{
              __html:
                '<svg viewBox="0 0 20 20" preserveAspectRatio="none" width="100%" height="100%" style="fill: rgb(26, 26, 26); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg-783700618_471" style="fill: rgb(26, 26, 26); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
            }}
          />
        </div>
      </div>
      <div className={styles.planFeatureText}>
        <p className={styles.builtForModern2} dir={"auto"}>
          {props.builtForModern}
        </p>
      </div>
    </div>
  );
}
