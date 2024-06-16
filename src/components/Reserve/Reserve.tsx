"use client";

import Image from "next/image";
import * as S from "./ReserveStyles";

export default function Reserve() {
  return (
    <S.ReserveWrap>
      <S.ReserveHeader></S.ReserveHeader>
      <S.ReserveBody>
        <div>
          <ul>
            <li>
              {/* <Image></Image> */}
              <div>6vs6 3파전</div>
            </li>
            <li>10 ~ 18명</li>
            <li>풋살화/운동화</li>
          </ul>
        </div>
      </S.ReserveBody>
    </S.ReserveWrap>
  );
}
