import MyLinks from "./components/MyLinks";
import Nav from "./components/Nav";


export default function Home() {
  return (
    <div className="flex justify-between mt-20">
      <Nav/>
      <MyLinks/>
    </div>
  );
}
