import { useEffect } from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import MapView, { Marker } from 'react-native-maps';
import * as Animatable from 'react-native-animatable';
import { tw } from '../lib/tailwind'
import { selectRestaurant } from '../slices/restaurantSlice'
// icons import
import { Icon } from '@rneui/themed';
// import * as Animatable from 'react-native-animatable';


const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

    return (
        <SafeAreaView style={[tw`bg-[#80CCBB] relative`, { marginTop: StatusBar.currentHeight || 0, flex: 1 }]}>
            <View style={tw`z-20`}>
                <View style={tw` p-4 flex-row items-center justify-between`}>
                    <TouchableOpacity
                        style={tw`p-2`}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Icon
                            style={tw``}
                            name='close'
                            type='ant-design'
                            color={`#fff`}
                            size={28}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={tw`text-base text-white font-bold`}>Order Help</Text>
                    </View>
                </View>
                <View style={tw`bg-white mx-5 p-6 rounded-md shadow-sm`}>
                    <View style={tw`flex-row items-center`}>
                        <View style={tw``}>
                            <Text style={tw`text-lg text-gray-400 font-bold`}>Estimated Arrival</Text>
                            <Text style={tw`text-3xl font-bold`}>45-55 Minutes</Text>
                        </View>
                        <Image
                            source={{
                                uri: "https://links.papareact.com/fls/"
                            }}
                            style={tw`h-20 w-20`}
                        />
                    </View>
                    <Animatable.Text style={tw`mt-2 text-sm text-gray-400 font-bold`} animation="bounceIn" iterationCount={Infinity} direction="alternate">Your order is being prepared</Animatable.Text>
                </View>
            </View>
            <MapView 
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={tw`flex-1 -mt-10`}
                mapType="mutedStandard"
                // onRegionChange={region => console.log("Region:", region)}
            >
                <Marker 
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long,
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier='origin'
                    pinColor="#00CCBB"
                />
            </MapView>
            <View style={tw`bg-white p-5 flex-row items-center justify-between`}>
                <View style={tw`flex-row items-center`}>
                    <Image
                        source={{
                            uri: "https://links.papareact.com/wru"
                        }}
                        style={tw`h-12 w-12 bg-gray-300 p-4 rounded-full mr-3`}
                    />
                    <View style={tw``}>
                        <Text style={tw`text-base`}>Stephen Onah</Text>
                        <Text style={tw`text-gray-400`}>Your Rider</Text>
                    </View>
                </View>
                <Text style={tw`text-[#00CCBB] text-base font-bold`}>Call</Text>
            </View>
        </SafeAreaView>
    )
}

export default DeliveryScreen