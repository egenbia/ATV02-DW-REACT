import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styles from "@/components/Menu/Menu.module.css";
import Link from "next/link";

const Menu = () => {
  const [menuIcon, setMenuIcon] = useState(<FaBars />);
  const [isActive, setIsActive] = useState(false);

  const activeMenu = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setMenuIcon(<IoClose />);
    } else {
      setMenuIcon(<FaBars />);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <span style={{ fontSize: "2rem" }}>🛸</span>
        </Link>
      </div>
      <div className={styles.menu}>
        <ul
          className={`${styles.menuItems} ${isActive ? styles.active : ""}`}
          id={styles.menuItems}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className={styles.menuBtn} id="menuBtn">
        <i id={styles.menuIcon} onClick={activeMenu}>
          {menuIcon}
        </i>
      </div>
    </nav>
  );
};

export default Menu;