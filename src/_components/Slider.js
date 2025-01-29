import { getSliderData } from "@/app/_lib/data-service";
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
