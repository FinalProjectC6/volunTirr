import { Image, StyleSheet, View , TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'

const PhotoMessage = (props) => {
    const { photos } = props
    const [photoURIs, setPhotoURIs] = useState([])

    useEffect(() => {
        const fr = new FileReader()
        fr.onloadend = () => setPhotoURIs(uri => [...uri, fr.result])

        async function getPhotos() {
            for (const photo of photos) {
                await fetch(
                  `http://192.168.100.4:3000/chat/getfile/${photo.name}`
                )
                  .then((res) => res.blob())
                  .then((res) => fr.readAsDataURL(res));
            }
            console.log(PhotoMessage,"hhh");
        }
        getPhotos()
    }, [])
    return (
      <View>
        {photoURIs.map((uri, index) => (
          <View style={styles.photoContainer} key={index}>
            <TouchableOpacity>
              <Image source={{ uri }} key={index} style={styles.photo} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
}

export default PhotoMessage

const styles = StyleSheet.create({
    photo: {
        width: 220,
        height: 250,
        borderRadius: 10},
    photoContainer: {
        padding: 5
    }
})