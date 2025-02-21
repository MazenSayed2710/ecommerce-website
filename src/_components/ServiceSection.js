import ServiceBox from "./ServiceBox";
import { IoMdCar } from "react-icons/io";
import { CgSupport } from "react-icons/cg";
import { GiReturnArrow } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import SectionName from "./SectionName";

function ServiceSection() {
  return (
    <div className="max-w-[1200px] p-5 m-auto">
      <SectionName description="Why Choose Us?">Our Services</SectionName>
      <div className="grid sm:grid-cols-4 gap-5 grid-cols-1 ">
        <ServiceBox
          title="FREE SHIPPING"
          text="Free shipping on all US order or order above $100"
        >
          <IoMdCar />
        </ServiceBox>
        <ServiceBox
          title="SUPPORT 24/7"
          text="Contact us 24 hours a day, 7 days a week"
        >
          <CgSupport />
        </ServiceBox>
        <ServiceBox
          title="30 DAYS RETURN"
          text="Simply return it within 30 days for an exchange."
        >
          <GiReturnArrow />
        </ServiceBox>
        <ServiceBox
          title="100% PAYMENT SECURE"
          text="We ensure secure payment with PEV"
        >
          <MdPayment />
        </ServiceBox>
      </div>
    </div>
  );
}

export default ServiceSection;
