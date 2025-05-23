"use client"
import React from "react";
import assets from "@/assets/index";
import Image from 'next/image';
import Link from "next/link";
import { useState } from 'react';
import { useNavigate } from "@/services/navigate";
import { AppRouteEnums } from "@/enums/route.enum";

import styles from "./styles.module.css";

type Props = {
};

const TopMenu: React.FC<Props> = (props) => {
  const navigateService = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const goToHome = () => {
    navigateService.navigate(AppRouteEnums.HOME)
  }

  const goToGiaiDB = () => {
    navigateService.navigate(AppRouteEnums.SPECIAL_PRIZE)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" onClick={goToHome}>
          <Image src={assets("logo")} alt=""/>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Image src={assets("bars")} alt="" className={styles.bars} onClick={toggleMenu}/>
        <div className={`${styles.dropdownBase} ${isOpen ? styles.dropdownContent : styles.displayNone}`}>
          <Link href="/special-prize" className={styles.link} onClick={goToGiaiDB}>Giải ĐB</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>
      </div>
      <div className={styles.authLinks}>
        <Link href="/login" className={styles.link}>Login</Link>
        <Link href="/register" className={styles.link}>Register</Link>
      </div>
    </nav>
  );
}

export default TopMenu;
