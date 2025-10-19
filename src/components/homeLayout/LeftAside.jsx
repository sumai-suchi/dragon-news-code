import { Suspense } from "react";
import Category from "../Category";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Category></Category>
      </Suspense>
    </div>
  );
};

export default LeftAside;
