import { createUrlName } from "@/_components/helpers";
import ProductCardDetails from "@/_components/ProductCardDetails";
import { getProductById } from "@/app/_lib/data-service";
import Skeleton from "react-loading-skeleton";
export const generateMetadata = async ({ params }) => {
  const productId = (await params).productId.split("-")[0];
  const product = await getProductById(productId);
  return {
    title: `${createUrlName(product.name)} | Kalles Shopify`,
  };
};
async function page({ params }) {
  const productId = (await params).productId.split("-")[0];
  const product = await getProductById(productId);
  return (
    <div className="py-4 max-w-[1200px] m-auto p-5">
      <div className="flex flex-col sm:flex-row gap-5 h-full">
        <div className="sm:w-1/2 w-full grid sm:grid-cols-[15%_85%] gap-3">
          <div className="flex sm:flex-col gap-3 sm:row-start-auto row-start-2">
            {Array.from({ length: 4 }, (_, i) => i + 1).map((i) => (
              <Skeleton width={80} height={80} key={i} />
            ))}
          </div>
          <div className="h-full">
            <Skeleton width="100%" height="600px" />
          </div>
        </div>
        <div className="sm:w-1/2 flex flex-col gap-5">
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

          <div className="grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 gap-5 items-center">
            <Skeleton width={120} height={40} />
            <div className="flex items-center gap-5 mb-3 w-full  min-h-[56px] sm:col-start-3">
              <Skeleton width={50} height={50} circle />
              <Skeleton width={50} height={50} circle />
            </div>
            <div className="col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-1">
              <Skeleton width="100%" height={40} />
            </div>
            <div className="row-start-3 sm:row-start-auto sm:col-span-3 col-span-2">
              <Skeleton width="100%" height={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
