import styles from "./UnlimitedTeamMembers.module.css";

export interface UnlimitedTeamMembersProps {
  /** Text */
  unlimitedTeamMembers: string;
}

export function UnlimitedTeamMembers(props: UnlimitedTeamMembersProps) {
  return (
    <div className={styles.unlimitedTeamMembers}>
      <div className={styles.unlimitedTeamMembers2}>
        <div className={styles.icon73} aria-hidden={"true"}>
          <div className={styles.div250}>
            <span
              className={styles.icon72}
              data-framecoded-svg="true"
              aria-hidden="true"
              dangerouslySetInnerHTML={{
                __html:
                  '<svg viewBox="0 0 20 20" preserveAspectRatio="none" width="100%" height="100%" style="fill: rgb(26, 26, 26); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg-655499785_539" style="fill: rgb(26, 26, 26); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
              }}
            />
          </div>
        </div>
        <div className={styles.planFeatureText13}>
          <p className={styles.unlimitedTeamMembers3} dir={"auto"}>
            {props.unlimitedTeamMembers}
          </p>
        </div>
      </div>
    </div>
  );
}
