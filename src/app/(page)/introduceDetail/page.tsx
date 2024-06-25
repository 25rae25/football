import IntroduceDetailContainer from "@/container/IntroduceDetailContainer/IntroduceDetailContainer";

type Props = {
  params: { id: number };
};

export default function IntroduceDetailPage({ params }: Props) {
  const teamId = params.id;
  return <IntroduceDetailContainer teamId={teamId} />;
}
