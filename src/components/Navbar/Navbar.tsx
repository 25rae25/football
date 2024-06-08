"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <div>Logo</div>
        <div className={styles.searchWrap}>
          <div>
            <label id="search"></label>
            <input
              type="search"
              id="search"
              placeholder="지역, 구장, 팀 이름으로 찾기"
              maxLength={100}
              className={styles.searchbar}
            />
          </div>
          <div>이미지</div>
        </div>
      </div>
    </div>
  );
}
