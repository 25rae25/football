"use client";

import * as S from "./ReserveStyles";

export default function Reserve() {
  const banner = [
    "https://gwmbluhqzjsorxlkmsij.supabase.co/storage/v1/object/sign/soccer/ydp_sky_A_goal.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2NjZXIveWRwX3NreV9BX2dvYWwuanBlZyIsImlhdCI6MTcxODU5OTY5OCwiZXhwIjoxNzUwMTM1Njk4fQ.wIN6B_fHBKvMA2BV1hbWY9R2Lrb-2wmCuwKvelQkCsE&t=2024-06-17T04%3A48%3A18.164Z",
    "https://gwmbluhqzjsorxlkmsij.supabase.co/storage/v1/object/sign/soccer/ydp_sky_A_coner.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2NjZXIveWRwX3NreV9BX2NvbmVyLmpwZWciLCJpYXQiOjE3MTg1OTk5MjQsImV4cCI6MTc1MDEzNTkyNH0.tBjpS20ebfMg47-irq-qGaEbIiONT7Lw_SR3r90tFJw&t=2024-06-17T04%3A52%3A04.149Z",
  ];

  return (
    <S.ReserveWrap>
      <S.ReserveHeader></S.ReserveHeader>
      <S.ReserveBody>
        <div>
          <ul>
            <li>
              {banner.map((item) => (
                <S.ReserveImage
                  key={item}
                  src={item}
                  width={1024}
                  height={448}
                  alt="구장사진"
                />
              ))}
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
