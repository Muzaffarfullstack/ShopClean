import Intro from "../components/Intro";
import Cart from "../components/Cart";

function Home() {
  return (
    <div className="wrapper sm:overflow-hidden">
      <Intro />
      <Cart />
    </div>
  );
}

export default Home;
