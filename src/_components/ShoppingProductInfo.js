import Link from "next/link";
import { capitalize, createPathName } from "./helpers";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { deleteData, getAllData } from "@/_utils/shoppingCardIndexedDb";
import {
  getUserShoppingCardAction,
  setUserShoppingCardAction,
} from "@/lib/actions";
import toast from "react-hot-toast";

function ShoppingProductInfo({
  data,
  OpenModalBtnref,
  setOpenEditComponent,
  setDisplayedProducts,
  session,
}) {
  const handleDelete = async () => {
    if (session.user) {
      const products = await getUserShoppingCardAction(session.user.email);
      console.log(products);
      const dataAfterDelete = products.filter(
        (product) => data.id !== product.id
      );
      console.log(session.user.email, dataAfterDelete);
      await setUserShoppingCardAction(session.user.email, dataAfterDelete);
      setDisplayedProducts(dataAfterDelete);
    } else {
      await deleteData(data.id);
      const dataAfterDelete = await getAllData();
      setDisplayedProducts(dataAfterDelete);
    }
    toast.success("Sucessfully deleted");
  };
  return (
    <div className="text-custom-white grid gap-2">
      <Link
        href={`/collections/${data.mainCategorie}/${createPathName(
          data.name,
          data.id
        )}`}
        className="font-bold text-custom-black hover:text-blue-400"
      >
        {data.name}
      </Link>
      {data.color && (
        <p>
          Color:
          <span className="font-semibold ml-1">{capitalize(data.color)}</span>
        </p>
      )}
      {data.size && (
        <p>
          Size:
          <span className="font-semibold ml-1 uppercase">{data.size}</span>
        </p>
      )}
      <div className="flex text-2xl gap-2">
        {(data.size || data.color) && (
          <button
            onClick={() => setOpenEditComponent(true)}
            ref={OpenModalBtnref}
          >
            <FaEdit />
          </button>
        )}
        <button onClick={handleDelete}>
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
}

export default ShoppingProductInfo;
