import React from 'react'
import {
  View,
  Text,
  Image,
  Linking
} from 'react-native'
import { Button, Card, CardSection } from '../components'
import styles from '../styles/albumDetail'

const AlbumDetail = (props) => {
  const { album } = props
  return (
    <Card> 
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: album.thumbnail_image }}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{ uri: album.image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(album.url)}>
          Buy now
        </Button>
      </CardSection>
    </Card>
  )
}

export default AlbumDetail