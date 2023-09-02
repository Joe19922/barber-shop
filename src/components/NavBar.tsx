import { Show } from "@chakra-ui/react";
import NavBarMenu from "./NavBarMenu";
import Logo from "./Logo";
import styles from "./styles/NavBar.module.css";

interface NavItem {
  label: string;
  route: string;
}

interface Props {
  items: NavItem[];
}

function NavBar({ items }: Props) {
  return (
    <>
      <Show below="lg">
        <div className={styles.Header}>
          <div className={styles.SContainer}>
            <div className={styles.Logo}>
              <Logo />
            </div>
            <div>
              <NavBarMenu items={items} />
            </div>
          </div>
        </div>
      </Show>
      <Show above="lg">
        <div className={styles.Header}>
          <div className={styles.NavLinks}>
            {items.map((item, index) =>
              item.label !== "Logo" ? (
                <a
                  className={styles.AnchorNavLinks}
                  href={item.route}
                  key={index}
                >
                  {item.label}
                </a>
              ) : (
                <Logo />
              )
            )}
          </div>
        </div>
      </Show>
    </>
  );
}

export default NavBar;
