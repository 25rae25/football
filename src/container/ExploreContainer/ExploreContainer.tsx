import Link from "next/link";

export default function ExploreContainer() {
  return (
    <div>
      <div>
        <Link href="/">
          {/* 이미지 들어갈곳 */}
          <p>얼리버드</p>
        </Link>
        <Link href="/">
          {/* 이미지 들어갈곳 */}
          <p>여자매치</p>
        </Link>
        <Link href="/">
          {/* 이미지 들어갈곳 */}
          <p>스타터</p>
        </Link>
        <Link href="/">
          {/* 이미지 들어갈곳 */}
          <p>챌린지</p>
        </Link>
        <Link href="/">
          {/* 이미지 들어갈곳 */}
          <p>시작하기</p>
        </Link>
      </div>
    </div>
  );
}
