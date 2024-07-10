import Skeleton from "react-loading-skeleton";
import "./Skeleton.css";
export default function SkeletonCard() {
  return (
    <div className="card-skeleton">
      <div className="left-col">
        <Skeleton />
      </div>
      <div className="right=col">
        <Skeleton count={4} style={{ marginBottom: ".6rem" }} />
      </div>
    </div>
  );
}
