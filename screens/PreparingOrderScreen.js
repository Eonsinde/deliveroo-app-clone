import { useEffect } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { tw } from '../lib/tailwind'
import * as Animatable from 'react-native-animatable';


const PreparingOrderScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery");
        }, 3000);
    }, []);

    return (
        <SafeAreaView style={[tw`relative items-center justify-center`, { marginTop: StatusBar.currentHeight || 0, flex: 1, backgroundColor: '#80CCBB' }]}>
            {/* <Animatable.Image
                source={{ uri: 'https://links.papareact.com/fls/' }}
                animation='slideInUp'
                iterationCount={1}
                style={{height: '10', width: '10'}}
                useNativeDriver={true}
            /> */}
            <View style={tw`rounded-full overflow-hidden`}>
                <Image 
                    source={{
                        uri: 'https://links.papareact.com/fls/'
                    }}
                    style={[tw`border-2 rounded`, {height: 250, width: 250}]}
                />
            </View>
            <Animatable.Text style={tw`mt-2 text-base text-white font-bold`} animation="slideInUp" iterationCount={5} direction="alternate">Waiting for restaurant to accept your order</Animatable.Text>
        </SafeAreaView>
    )
}

export default PreparingOrderScreen