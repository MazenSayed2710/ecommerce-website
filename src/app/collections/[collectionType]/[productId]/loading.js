import Skeleton from "react-loading-skeleton";

function loading() {
  return (
    <div className="max-w-[1200px] m-auto p-5">
      <div className={"py-4"}>
        <div className="flex flex-col sm:flex-row gap-5 h-full">
          <div className="w-1/2 grid grid-cols-[15%_85%] gap-3">
            <div className="flex flex-col gap-3">
              {Array.from({ length: 4 }, (_, i) => i + 1).map((i) => (
                <Skeleton width={80} height={80} key={i} />
              ))}
            </div>
            <div className="relative h-full">
              <Skeleton width="100%" height="600px" />
            </div>
          </div>
          <div className="sm:w-1/2 flex flex-col gap-5 ">
            <div className="grid gap-5">
              <Skeleton width="20%" height={25} />

              <Skeleton width="10%" height={25} />
              <Skeleton width="80%" count={4} height={25} />
            </div>

            <div>
              <p className="font-bold uppercase mb-4 text-custom-black">
                <Skeleton width="20%" height={25} />
              </p>
              <div className="flex gap-3 mb-4">
                {Array.from({ length: 3 }, (_, i) => i + 1).map((i) => (
                  <Skeleton width={20} height={20} circle key={i} />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-5 mb-3 w-full  min-h-[56px] ">
              <Skeleton width={120} height={40} className="rounded-md" />
              <Skeleton width={150} height={40} className="rounded-md" />
              <Skeleton width={50} height={50} circle />
              <Skeleton width={50} height={50} circle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loading;
