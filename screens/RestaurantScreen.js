import { useRoute, useNavigation } from '@react-navigation/native'
import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native'
import { tw } from '../lib/tailwind'
import { urlFor } from '../sanity-connect';
// icons import
import { Icon } from '@rneui/themed';


const RestaurantScreen = () => {
    const { params: { 
        id,
        imgUrl, 
        title, 
        short_description, 
        rating, 
        genre, 
        address, 
        dishes, 
        long, 
        lat
    }} = useRoute();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[tw`bg-white`, { marginTop: StatusBar.currentHeight || 0, flex: 1 }]}>
            <ScrollView>
                <View style={tw`relative`}>
                    <Image 
                        source={{
                            uri: urlFor(imgUrl).url()
                        }}
                        style={tw`h-56 w-full bg-gray-300`}
                    />
                    <TouchableOpacity
                        onPress={() => {}}
                        style={tw`absolute top-5 left-5 bg-white rounded-full p-2`}
                    >
                         <Icon
                            style={tw``}
                            name='ios-arrow-back-outline'
                            type='ionicon'
                            color={`#80CCBB`}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RestaurantScreen