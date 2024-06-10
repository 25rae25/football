"use client";

import Link from "next/link";
import styles from "./NavigateContainer.module.css";
import { usePathname } from "next/navigation";

export default function NavigateContainer() {
  const pathname = usePathname();
  return (
    <div className={styles.naviContainer}>
      <div className={styles.naviWrapper}>
        <div className={styles.naviItem}>
          <Link href="/">소셜 매치</Link>
        </div>
        <div className={styles.naviItem}>
          <div className={styles.newWrap}>
            <Link
              style={{ color: pathname === "/about" ? "red" : "blue" }}
              href="/about"
            >
              팀
            </Link>
            <span className={styles.new}>NEW</span>
          </div>
        </div>
        <div className={styles.naviItem}>
          <Link href="/">구장 예약</Link>
        </div>
      </div>
    </div>
  );
}
