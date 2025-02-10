import Button from "./Button";

function TrendCollection({ collectionName, children, className }) {
  return (
    <div className={`group relative w-fit h-fit ${className} overflow-hidden`}>
      {children}
      <Button href={`/collections/${collectionName.toLowerCase()}`}>
        {collectionName}
      </Button>
    </div>
  );
}

export default TrendCollection;
