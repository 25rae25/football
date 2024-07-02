import ReserveContainer from "@/container/ReserveContainer/ReserveContainer";

type Props = {
  params: { id: number };
};

export default function ReservePage({ params }: Props) {
  const gameId = params.id;

  return <ReserveContainer gameId={gameId} />;
}
