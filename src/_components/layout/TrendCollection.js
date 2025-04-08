import Button from "../common/Button";

function TrendCollection({ collectionName, children, className }) {
  return (
    <div className={`group relative  h-fit ${className} overflow-hidden`}>
      {children}
      <Button href={`/collections/${collectionName.toLowerCase()}`}>
        {collectionName}
      </Button>
    </div>
  );
}

export default TrendCollection;
