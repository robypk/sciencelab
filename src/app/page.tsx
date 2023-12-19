import Banner from "@/Components/Banner";
import Physics from "@/Components/Physics";

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
