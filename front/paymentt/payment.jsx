import React, { useState } from 'react';
import { View, Button, StyleSheet, Linking } from 'react-native';
import axios from 'axios';
import { IP } from '../ip.json';
import { useNavigation } from '@react-navigation/native';

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
            <View style={styles.buttonContainer}>
                <Button title="Proceed to Payment" onPress={()=>pay()} />
            </View>
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
});

export default Payment;
