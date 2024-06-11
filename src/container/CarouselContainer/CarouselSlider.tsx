import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image
            src="https://gwmbluhqzjsorxlkmsij.supabase.co/storage/v1/object/sign/soccer/banner01.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2NjZXIvYmFubmVyMDEucG5nIiwiaWF0IjoxNzE4MDI0NjAxLCJleHAiOjE3NDk1NjA2MDF9.XyoO4qQW7im_-QZXMPxPCxz-FUM5MqK8awwUGs9l0j4&t=2024-06-10T13%3A03%3A21.172Z"
            width={1024}
            height={346}
            alt="메인사진"
          />
        </div>
        <div>
          <Image
            src="https://gwmbluhqzjsorxlkmsij.supabase.co/storage/v1/object/sign/soccer/banner02.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2NjZXIvYmFubmVyMDIucG5nIiwiaWF0IjoxNzE4MDI0Njc4LCJleHAiOjE3NDk1NjA2Nzh9.tXQzx7Z-svsJOfuEo6RFr2GqC4w42vQBwULDVvhEIf8&t=2024-06-10T13%3A04%3A38.140Z"
            width={1024}
            height={346}
            alt="메인사진"
          />
        </div>
        <div>
          <Image
            src="https://gwmbluhqzjsorxlkmsij.supabase.co/storage/v1/object/sign/soccer/banner04.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2NjZXIvYmFubmVyMDQucG5nIiwiaWF0IjoxNzE4MDg3NTc2LCJleHAiOjE3NDk2MjM1NzZ9.vprjqiaD6wqLurxCdrlbVRgfUrNRAKZo_OPJglypmcY&t=2024-06-11T06%3A32%3A57.040Z"
            width={1024}
            height={346}
            alt="메인사진"
          />
        </div>
      </Slider>
    </div>
  );
}
