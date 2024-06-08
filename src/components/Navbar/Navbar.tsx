"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <div>Logo</div>
        <div>
          <div>
            <div className={styles.searchbar}>SearchBar</div>
            <div>이미지</div>
          </div>
        </div>
      </div>
    </div>
  );
}
