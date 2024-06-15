import CarouselContainer from "@/container/CarouselContainer/CarouselContainer";
import NavigateContainer from "@/container/NavigateContainer/NavigateContainer";
import ExploreContainer from "@/container/ExploreContainer/ExploreContainer";
import ListContainer from "@/container/MainContainer/MainContainer";

export default function HomePage() {
  return (
    <>
      <NavigateContainer />
      <ExploreContainer />
      <CarouselContainer />
      <ListContainer />
    </>
  );
}
