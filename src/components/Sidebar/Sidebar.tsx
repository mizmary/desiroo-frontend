import { Button } from "@components/Button/Button"
import styles from "./Sidebar.module.scss"
import Logo from "@assets/Logo.svg"
import { useNavigate } from "react-router"

type TMenuOption = {
  title: string
  icon: string
  route: string
}

type Props = {
  options: TMenuOption[]
}

export function Sidebar({ options }: Props) {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <img
          src={Logo}
          alt="Desiroo logo"
          className={styles.logo}
        />
        <div className={styles.optionsContainer}>
          {options.map((option) => (
            <Button
              key={option.route}
              variant="tertiary"
              leftIcon={option.icon}
              size="large"
              className={styles.options}
              onClick={() => navigate(option.route)}
            >
              {option.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
