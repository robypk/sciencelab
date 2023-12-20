import Banner from "@/app/Banner";
import Physics from "@/app/Physics";
import "./globals.css";
import CustomButton from "@/app/CustomButton";

export default function Home() {
  return (
    <div>
      <div className="flex items-start justify-center font-bold text-5xl text-lime-500 shadow-black shadow-xl">
        Roby
        <CustomButton ButtonName="Robyy" />
      </div>
      <Banner />
      <div className=" p-14">
        <Physics />
      </div>
      <div className=" p-10">
        <Physics />
      </div>
    </div>
  );
}
