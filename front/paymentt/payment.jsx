import React, { useState } from 'react';
import { View, Button, StyleSheet, Linking , TouchableOpacity ,Text,Dimensions} from 'react-native';
import axios from 'axios';
import { IP } from '../ip.json';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("screen");

const Payment = ({route}) => {
    const [total, setTotal] = useState(7000);
    const navigation = useNavigation();
    const {pack} = route.params
    console.log(route.params);
    const pay = async () => {
        try {
            const response = await axios.post(`http://${IP}:3000/payment/pay/4/${pack.id}`, { amount: 500  });
            const { result } = response.data;
            if (result && result.link) {
                console.log('Payment link:', result.link);
                Linking.openURL(result.link);
            } else {
                console.log('Error: Invalid response data structure');
            }
        } catch (error) {
            if (error.response) {
           
                console.log('Server responded with non-2xx status:', error.response.status);
                console.log('Response data:', error.response.data);
            } else if (error.request) {
                
                console.log('Request made but no response received:', error.request);
            } else {
                
                console.log('Error during request setup:', error.message);
            }
            console.log('Error config:', error.config);
        }
    };

    return (
        <View style={styles.container}>
      < Text >amazing choices </Text>  
      < Text >this is what the pakage about </Text>
      < Text >amazing choices </Text>
      < Text >amazing choices </Text>

        <TouchableOpacity style={styles.payment} onPress={pay}>
          <Text style={styles.buttText}>Proceed to Payment</Text>
        </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginVertical: 20,
    },
    payment: {
        backgroundColor: "#25B4F8",
        width: width * 0.75,
        height: height * 0.05,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      },
      buttText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      }
});

export default Payment;
