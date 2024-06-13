import CarouselContainer from "@/container/CarouselContainer/CarouselContainer";
import NavigateContainer from "@/container/NavigateContainer/NavigateContainer";
import MainPage from "./(page)/main/page";
import ExploreContainer from "@/container/ExploreContainer/ExploreContainer";

export default function HomePage() {
  return (
    <>
      <NavigateContainer />
      <ExploreContainer />
      <CarouselContainer />
      <MainPage />
    </>
  );
}
