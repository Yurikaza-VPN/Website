import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function HomeEarthTwo() {
  return (
    <Player
      autoplay
      loop
      src="/animations/Animation - 1723617700224.json"
      style={{ height: "800px", width: "800px", paddingTop: 30 }}
    >
      <Controls
        visible={false}
        buttons={["play", "repeat", "frame", "debug"]}
      />
    </Player>
  );
}
