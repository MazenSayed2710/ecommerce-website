import { getSliderData } from "@/lib/data-service";
import SliderCleint from "./SliderCleint";

async function Slider() {
  const { sliderData } = await getSliderData();

  return (
    <div>
      <SliderCleint sliderData={sliderData} />
    </div>
  );
}

export default Slider;
