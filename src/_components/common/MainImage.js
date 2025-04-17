import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
function MainImage({ activeImg }) {
  return (
    <div className="relative aspect-[1/1.3] h-full select-none">
      <InnerImageZoom
        src={activeImg}
        zoomSrc={activeImg}
        zoomType="hover"
        zoomPreload={true}
      />
    </div>
  );
}

export default MainImage;
