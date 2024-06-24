import CarouselContainer from "@/container/CarouselContainer/CarouselContainer";
import NavigateContainer from "@/container/NavigateContainer/NavigateContainer";
import ExploreContainer from "@/container/ExploreContainer/ExploreContainer";
import ListContainer from "@/container/MainContainer/MainContainer";
import PreviewImg from "@/components/PreviewImg/PreviewImg";

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
