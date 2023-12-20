import Banner from "@/app/Banner";
import Physics from "@/app/Physics";
import "./globals.css";
import CustomButton from "@/app/CustomButton";

export default function Home() {
  return (
    <div>
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
