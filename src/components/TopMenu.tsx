import React from "react";
import assets from "@/assets/index";
import Image from 'next/image';
import Link from "next/link";

import styles from "./styles.module.css";

type Props = {
};

const TopMenu: React.FC<Props> = (props) => {
  return (
      <div className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.logo}><a href="#">Logo</a></div>
        </div>
        <ul className={styles.links}>
          <Link href="" className={styles.link}>Home</Link>
          <Link href="" className={styles.link}>About</Link>
          <Link href="" className={styles.link}>Services</Link>
          <Link href="" className={styles.link}>Contact</Link>
        </ul>
        <div>
          <Link href="">Login</Link>
          <Link href="">Sign Up</Link>
        </div>
      </div>
  );
}

export default TopMenu;
