import { useState } from "react";
import "./App.css";
import Image from "./components/ImageComponent/Image";
import { finish } from "./myObjects";
import { bnutagir } from "./myObjects";
import Timer from "./components/Timer/Timer";
import { product } from "./myObjects";
import Ul from "./components/bnutagir/Ul";
import VideoComponent from "./components/video/VideoComponent";
import Patver from "./components/Patver/Patver";
import { nkaragrutyun } from "./myObjects";
import Comment from "./components/Comment/Comment";
import Zakaz from "./components/Kap/Zakaz";
import PatvireqHima from "./components/Kap/PatvireqHima";
import Slider from "./components/Slider/Slider";
function App() {
  const [remaincount, setRemainCount] = useState(11);
  function changeCount() {
    if (remaincount === 0) {
      setRemainCount(0);
    } else {
      setRemainCount(remaincount - 1);
    }
  }
  return (
    <div className="container">
      <div className="App">
        <Image product={product} />
        <Patver remaincount={remaincount} changeCount={changeCount} />
        <Timer finish={finish} />
        <Ul text="Բնութագիր" bnutagir={bnutagir} />
        <VideoComponent src="https://www.youtube.com/embed/4AjzdPw8Y_0" />
        <Timer finish={finish} />
        <Patver remaincount={remaincount} changeCount={changeCount} />
        <Ul text="Նկարագրություն" bnutagir={nkaragrutyun} />
        <Slider />
        <Comment />
        <Zakaz />
        <Image product={product} />
        <Timer finish={finish} />
        <PatvireqHima remaincount={remaincount} changeCount={changeCount} />
      </div>
    </div>
  );
}

export default App;
