import styles from "./main.module.scss"

export const InProgress = () => {
  return (
    <div className={styles["overlay"]}>
      <div className={styles["container"]}>
        <span className={styles["container__title"]}>
          Этот функционал находится в разработке, совсем скоро он появится тут!
        </span>
      </div>
    </div>
  )
}
