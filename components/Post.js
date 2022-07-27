import React, { useState } from 'react'
import { View, StyleSheet, Text , Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios'
import moment from 'moment'

const Post = ({post}) => {
    const [like, setLike] = useState(post.noOfLikes)
    const [clicked, setClicked] = useState(false)

    const removeLike = () => {
        setLike(like-1)
        
    }
    const addLike = () => {
        setLike(like+1)
        
    }

    const handleClick = () => {
        if(clicked === true){
            removeLike()
            axios.patch(`http://localhost:5000/api/tasks/likes/${post._id}`, {
                noOfLikes: like
            })

        } else {
            addLike()
            axios.patch(`https://mukboard.herokuapp.com/api/tasks/likes/${post._id}`, {
                noOfLikes: like
            })
    
        }

        setClicked(!clicked)
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerNames}>
                    <Text style={styles.name}>{post.title}</Text>
                    <Text style={styles.createdAt}>@{moment(post.createdAt, "YYYYMMDD").fromNow()}</Text>
                </View>   
            </View>
            <View style={styles.content}>
                <Text style={styles.contentText}>{post.content}</Text>
                <Image style={styles.image} source={{ uri: post.imageUrl }} />
            </View>

            {/* Footer */}
            <View style={styles.footerContainer}>
                <View style={styles.likes}>
                    <Ionicons name={clicked ? 'heart' : 'heart-outline'} color='green' size={20} onPress={handleClick}/>
                    <Text style={styles.likesText}>{like}</Text>
                </View>
                <View>
                    <Ionicons name='share-social-sharp' color='green' size={20} />
                </View>
            </View>
    </View>
    )
};

export default Post

const styles = StyleSheet.create({
    container : {
        paddingBottom: 10, 
        borderBottomColor: 'gray',
        borderBottomWidth: 0.1,
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 5,
        marginVertical: 5
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,   
        paddingHorizontal: 10,       
    },
    headerNames: {
        flexDirection: 'row',    
    },
    name: {
        marginRight: 5,
        fontWeight: 'bold', 
    },
    username: {
        marginRight: 5, 
        color: 'grey',
    },
    createdAt: {
        marginRight: 5, 
        color: 'grey',
    },
    content: {
        marginTop: 5,
        lineHeight: 18,
        height: 400,
    },
    contentText: {
        marginLeft: 10,
        lineHeight: 18,
    },
    image: {
        // backgroundColor: 'yellow',
        resizeMode: 'cover',
        flex: 1,
        aspectRatio: 1,
        borderRadius: 5,
        width: "100%"
    },
    footerContainer: {
        // backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    likes: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    likesText: {
        marginLeft: 5,
        paddingTop: 2,
    },
});