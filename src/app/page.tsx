import CarouselContainer from "@/container/CarouselContainer/CarouselContainer";
import NavigateContainer from "@/container/NavigateContainer/NavigateContainer";
import MainPage from "./(page)/main/page";

export default function HomePage() {
  return (
    <>
      <NavigateContainer />
      <CarouselContainer />
      <MainPage />
    </>
  );
}
