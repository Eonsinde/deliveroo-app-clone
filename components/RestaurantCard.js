import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { urlFor } from '../sanity-connect';
import { tw } from '../lib/tailwind';
// icons import
import { Icon } from '@rneui/themed';



const RestaurantCard = ({ id, imgUrl, title, short_description, rating, genre, address, dishes, long, lat }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={tw`my-1 mr-3 bg-white shadow-md shadow-neutral-500/50`}
            onPress={() => navigation.navigate('Restaurant', { 
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
            })}
        >
            <Image 
                source={{
                    uri: urlFor(imgUrl).url()
                }}
                style={tw`h-36 w-64`}
            />
            <View style={tw`pt-1 pb-4 px-3`}>
                <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
                <View>
                    <View style={tw`flex-row items-center`}>
                        <Icon
                            style={tw``}
                            name='star'
                            type='ionicon'
                            color={`#80CCBB`}
                            size={22}
                        />
                        <Text style={tw`ml-2 text-green-500`}>
                            {rating}<Text style={tw`text-gray-500`}> - {genre}</Text>
                        </Text>
                    </View>
                    <View style={tw`flex-row items-center`}>
                        <Icon
                            style={tw``}
                            name='ios-location'
                            type='ionicon'
                            color={`gray`}
                            size={22}
                        />
                        <Text style={tw`ml-2 text-gray-500 text-xs text-gray-500`}>Nearby - {address}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default RestaurantCard;
