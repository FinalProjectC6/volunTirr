import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Message = (props) => {
    const { content, belongsToUser, timestamp } = props
    return (
        <View style={{
            ...styles.messageContainer,
            alignItems: belongsToUser ? "flex-start" : "flex-end"
        }}>
            <View style={{
                ...styles.messageBox,
                borderTopLeftRadius: belongsToUser ? 0 : 12,
                borderTopRightRadius: belongsToUser ? 12 : 0,
                backgroundColor: belongsToUser ? "#25B4F8" : "white",
                textAlign: belongsToUser ? "left" : "right"
            }}>
                <Text style={{
                    fontSize: 12,
                    lineHeight: 20,
                    color: belongsToUser ? "white" : "#53587A"
                }}>
                    {content}
                </Text>
            </View>
            <View style={{ justifyContent: "flex-end" }}>
                <Text style={{ fontSize: 8 }}>
                    {timestamp}
                </Text>
            </View>
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    messageContainer: {
        padding: 6,
        flexDirection: "column",
    },
    messageBox: {
        padding: 16,
        maxWidth: "75%",
        borderRadius: 12,
        backgroundColor: "#25B4F8",
        color: "white",
    },
})