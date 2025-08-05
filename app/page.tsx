import MyLinks from "./components/MyLinks";
import Nav from "./components/Nav";


export default function Home() {
  return (
    <div className="flex justify-between mt-20 p-12">
      <Nav/>
      <MyLinks/>
    </div>
  );
}
