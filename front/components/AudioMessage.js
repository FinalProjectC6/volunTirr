import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Audio } from "expo-av";

const AudioMessage = (props) => {
  const { belongsToUser, timestamp, audio } = props;
  const [audioRecord, setAudioRecord] = useState(false);
  const [isPlaying, setIsPlaying] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    async function addSound() {
      const { sound } = await Audio.Sound.createAsync({ uri: audio.data });
      sound._onPlaybackStatusUpdate = (e) => {
        if (e.didJustFinish) {
          setIsPlaying(false);
          setIsFinished(true);
        }
      };
      setAudioRecord(sound);
    }

    addSound();
  }, []);

  return (
    <View
      style={{
        ...styles.messageContainer,
        alignItems: belongsToUser ? "flex-start" : "flex-end",
      }}
    >
      <View
        style={{
          ...styles.messageBox,
          borderTopLeftRadius: belongsToUser ? 0 : 12,
          borderTopRightRadius: belongsToUser ? 12 : 0,
          backgroundColor: belongsToUser ? "#25B4F8" : "white",
        }}
      >
        {audioRecord ? (
          isPlaying ? (
            <Pressable
              onPress={() => {
                audioRecord.pauseAsync();
                setIsPlaying(false);
              }}
            >
              <Fontisto
                name="pause"
                size={24}
                color={belongsToUser ? "white" : "#25B4F8"}
              />
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                if (isFinished) {
                  audioRecord.replayAsync();
                  setIsFinished(false);
                } else audioRecord.playAsync();
                setIsPlaying(true);
              }}
            >
              <Entypo
                name="controller-play"
                size={24}
                color={belongsToUser ? "white" : "#25B4F8"}
              />
            </Pressable>
          )
        ) : (
          <ActivityIndicator color={belongsToUser ? "white" : "#25B4F8"} />
        )}
        <View>
          <Text style={{ fontSize: 18 }}>{audio.duration}</Text>
        </View>
      </View>
      <View style={{ justifyContent: "flex-end" }}>
        <Text style={{ fontSize: 8 }}>{timestamp}</Text>
      </View>
    </View>
  );
};

export default AudioMessage;

const styles = StyleSheet.create({
  messageContainer: {
    padding: 6,
    flexDirection: "column",
  },
  messageBox: {
    padding: 24,
    maxWidth: "75%",
    borderRadius: 12,
    backgroundColor: "#25B4F8",
    color: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
