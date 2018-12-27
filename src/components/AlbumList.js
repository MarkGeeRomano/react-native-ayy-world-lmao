import React from 'react'
import { ScrollView } from 'react-native'
import { AlbumDetail } from '../components'

class AlbumList extends React.Component {
  constructor() {
    super()
    this.state = { albums: [] }
  }

  async componentDidMount() {
    try {
      const { _bodyText: data } = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
      this.setState(() => ({ albums: JSON.parse(data) }))
    } catch (err) {
      console.log(err)
    }
  }

  renderAlbums() {
    return this.state.albums.map((album) => <AlbumDetail key={album.title} album={album} />)
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList