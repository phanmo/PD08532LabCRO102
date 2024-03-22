import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { usePlayTrack } from "../../../service";
import { State } from "react-native-track-player";

const Lab4_3 = () => {
  const [playlist, setPlaylist] = useState([
    {
      id: "1",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      title: "Song 1",
      artist: "Artist 1",
      artwork: "https://picsum.photos/id/11/200/200",
    },
    {
      id: "2",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      title: "Song 2",
      artist: "Artist 2",
      artwork: "https://picsum.photos/id/12/200/200",
    },
  ]);

  const {
    onTogglePlayTrack,
    onSeekTo,
    onSkipToNext,
    onSkipToPrevious,
    playBackState,
    duration,
    position,
    trackTitle,
    trackArtist,
    trackArword,
  } = usePlayTrack(playlist);

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "00:00";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <View style={styles.container}>
      <Image style={styles.artwork} source={{ uri: trackArword }} />
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => onSkipToPrevious()}>
          <Image style={styles.controlButton} source={require('../../assets/icons/previous.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onTogglePlayTrack()}>
          {playBackState === State.Playing 
          ? <Image style={styles.controlButton} source={require('../../assets/icons/pause.png')}/>
          : <Image style={styles.controlButton} source={require('../../assets/icons/play.png')}/>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSkipToNext()}>
        <Image style={styles.controlButton} source={require('../../assets/icons/next.png')}/>
        </TouchableOpacity>
      </View>
      <View style={styles.progress}>
        <Text>{formatTime(position)}</Text>
        <Text>{formatTime(duration)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  artwork: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  artist: {
    fontSize: 16,
    marginBottom: 20,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  controlButton: {
    marginHorizontal: 30,
  },
  progress: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});

export default Lab4_3;

