import Link from "next/link";
import { capitalize, createPathName } from "./helpers";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { deleteData, getAllData } from "@/_utils/shoppingCardIndexedDb";

function ShoppingProductInfo({
  data,
  OpenModalBtnref,
  setOpenEditComponent,
  setDisplayedProducts,
}) {
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
        <button
          onClick={async () => {
            await deleteData(data.id);
            const dataAfterDelete = await getAllData();
            setDisplayedProducts(dataAfterDelete);
          }}
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
}

export default ShoppingProductInfo;
