import CarouselContainer from "@/container/CarouselContainer/CarouselContainer";
import MainContainer from "@/container/MainContainer/MainContainer";
import NavigateContainer from "@/container/NavigateContainer/NavigateContainer";

export default function HomePage() {
  return (
    <>
      <NavigateContainer />
      <CarouselContainer />
      <MainContainer />
    </>
  );
}
