import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    //fazer com os botoes redondinhos...ver cor
    Container: {
        flex: 1
    },
    TextContainer: {
        flex: 1,
        backgroundColor: "#26282b",
        width: '100%'
    },
    PadContainer: {
        backgroundColor: "#0e0b0b",
    },
    RowContainer: {
        flexDirection: 'row'
    },
    NumberKey: {
        width: '25%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    NumberText: {
        fontSize: 30,
        color: '#fff'
    },
    ActionKey: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderLeftColor: '#ff9035',
    },
    ActionText: {
        fontSize: 30,
        color: '#ff9035'
    },
    ClearContainer: {
        flexDirection: 'row',
        backgroundColor: "#26282b",
        justifyContent: 'space-between',
        padding: 16,
    },
    ClearButton: {
        height: 40,
        width: 100,
        borderColor: '#ff9035',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ClearButtonText: {
        fontSize: 20,
        color: '#ff9035'
    },
    MainInput: {
        fontSize: 55,
        color: '#ff9035',
        textAlign: "right",
        padding: 25,
        height: '55%',
    },
    ResultInput: {
        fontSize: 45,
        color: '#D9DBBA',
        textAlign: "right",
        padding: 25,
    }
})