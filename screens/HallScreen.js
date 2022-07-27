import { StyleSheet, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Post from '../components/Post';

const HallScreen = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [backendData, setBackendData] = useState([])

    useEffect(() => {
        axios.get("https://mukboard.herokuapp.com/api/tasks/hall")
        .then( res => {
        console.log(res.data)
        const data = res.data.posts
        console.log(data)
        setBackendData(data)
        console.log(backendData)
        })
        .catch(err => console.log(err))
        .finally(setLoading(false))
    }, [])
    return (
        <SafeAreaView style={styles.container}>
             {isLoading ? (
          <ActivityIndicator />
         ) : (
            <FlatList 
              data={backendData} 
              keyExtractor={(item) => item._id}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={
                ({item}) => <Post post={item} />}
            />
         )}
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        width: "100%"
    }
})

export default HallScreen;
