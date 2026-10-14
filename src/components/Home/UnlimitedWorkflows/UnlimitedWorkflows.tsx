import styles from "./UnlimitedWorkflows.module.css";

export interface UnlimitedWorkflowsProps {
  /** Text */
  unlimitedWorkflows: string;
}

export function UnlimitedWorkflows(props: UnlimitedWorkflowsProps) {
  return (
    <div className={styles.unlimitedWorkflows}>
      <div className={styles.unlimitedWorkflows2}>
        <div className={styles.icon49} aria-hidden={"true"}>
          <div className={styles.div219}>
            <span
              className={styles.icon48}
              data-framecoded-svg="true"
              aria-hidden="true"
              dangerouslySetInnerHTML={{
                __html:
                  '<svg viewBox="0 0 20 20" preserveAspectRatio="none" width="100%" height="100%" style="fill: rgb(26, 26, 26); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg-655499785_539" style="fill: rgb(26, 26, 26); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
              }}
            />
          </div>
        </div>
        <div className={styles.planFeatureText6}>
          <p className={styles.unlimitedWorkflows3} dir={"auto"}>
            {props.unlimitedWorkflows}
          </p>
        </div>
      </div>
    </div>
  );
}
