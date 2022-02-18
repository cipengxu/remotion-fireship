import { Audio, Sequence, Series, staticFile, Video } from "remotion";
import { View } from "react-native";

import { WeatherMap } from "./components/WeatherMap/WeatherMap";
import { Flipbook } from "./Flipbook";
import { HdTo4k } from "./helpers/hd-to-4k";
import { UsingJavaScript } from "./UsingJavaScript";
import { Reactive } from "./Reactive";
import { CANVAS } from "./components/Canvas";

const audio = staticFile("/audio.wav");
const video = staticFile("/videos/video.mov");
const usingJS = staticFile("/videos/using-javascript.mov");
const flipbook = staticFile("/videos/flipbook.mov");
const videoInReact = staticFile("/videos/video-in-react.mov");
const introducingRemotion = staticFile("/videos/introducing-remotion.mov");

export const Remotion = () => {
  return (
    <>
      <Series>
        <Series.Sequence durationInFrames={100}>
          <Video src={video} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={170 + 80}>
          <UsingJavaScript />
        </Series.Sequence>
        <Series.Sequence durationInFrames={110}>
          <Video src={usingJS} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={90}>
          <Video src={flipbook} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={180}>
          <Flipbook />
        </Series.Sequence>
        <Series.Sequence durationInFrames={90}>
          <Reactive />
        </Series.Sequence>
        <Series.Sequence durationInFrames={90}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#282C34",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Video src={videoInReact} height={CANVAS.height} />
          </View>
        </Series.Sequence>
        <Series.Sequence durationInFrames={42}>
          <Video src={introducingRemotion} height={CANVAS.height} />
        </Series.Sequence>
      </Series>
      <Sequence from={1250} durationInFrames={200}>
        <HdTo4k>
          <WeatherMap />
        </HdTo4k>
      </Sequence>
      <Audio src={audio} />
    </>
  );
};
