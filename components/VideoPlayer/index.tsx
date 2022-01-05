import React, { useRef, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Video } from 'expo-av';
import { Episode } from '../../types';
import styles from './styles';
import { Playback } from 'expo-av/build/AV';
import { Storage } from 'aws-amplify';

interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props;
  const [videoURL, setVideoURL] = useState('');

  const [status, setStatus] = useState({});
  const video = useRef<Playback>(null);

  useEffect(() => {
    if (episode.video.startsWith('http')) {
      setVideoURL(episode.video);
      return;
    }
    Storage.get(episode.video).then(setVideoURL);
  }, [episode]);

  useEffect(() => {
    if (!video) {
      return;
    }
    (async () => {
      await video?.current?.unloadAsync();
      await video?.current?.loadAsync({ uri: videoURL }, {}, false);
    })();
  }, [videoURL]);

  console.log(videoURL);

  if (videoURL === '') {
    return null;
  }

  return (
    <Video
      ref={video}
      style={styles.video}
      source={{
        uri: episode.video,
      }}
      posterSource={{
        uri: episode.poster,
      }}
      posterStyle={{
        resizeMode: 'cover',
      }}
      usePoster={false}
      useNativeControls
      resizeMode='contain'
      rate={1.0}
      isMuted={false}
      volume={1.0}
      shouldPlay
      isLooping
      playsInSilentLockedModeIOS={true}
      onPlaybackStatusUpdate={(status) => setStatus(() => status)}
    />
  );
};

export default VideoPlayer;
