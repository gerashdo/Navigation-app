import { StyleSheet } from "react-native";


export const appStyles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 5,
    },
    bigButton: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bigButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    avatarContainer:{
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        height: 75,
        width: 75,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
        gap: 20
    },
    menuItem: {},
    menuItemText: {
        fontSize: 20,
        fontWeight: '500'
    }

})