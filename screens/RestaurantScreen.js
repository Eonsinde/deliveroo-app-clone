import { useEffect } from 'react'; 
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { tw } from '../lib/tailwind'
import { urlFor } from '../sanity-connect';
// icons import
import { Icon } from '@rneui/themed';
// components import
import DishRow from '../components/DishRow';
import CartBox from '../components/CartBox';
import { selectCartItems } from '../slices/cartSlice';
import { setRestaurant } from '../slices/restaurantSlice';


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
    const items = useSelector(selectCartItems);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        dispatch(setRestaurant({
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
        }));
    }, []);

    return (
        <>
        <SafeAreaView style={[tw`bg-white relative`, { marginTop: StatusBar.currentHeight || 0, flex: 1 }]}>
            {items.length > 0 && <CartBox />}

            {/* header */}
            <View style={tw`relative`}>
                <Image 
                    source={{
                        uri: urlFor(imgUrl).url()
                    }}
                    style={tw`h-56 w-full bg-gray-300`}
                />
                <TouchableOpacity
                    onPress={navigation.goBack}
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
            <ScrollView style={tw``}>
                {/* body */}
                <View style={tw`pt-3 px-4`}>
                    {/* header */}
                    <View style={tw`mb-3`}>
                        <Text style={tw`text-2xl font-bold mb-2`}>{title}</Text>
                        <View style={tw`flex-row`}>
                            <View style={tw`flex-row items-center`}>
                                <Icon
                                    style={tw``}
                                    name='star'
                                    type='ionicon'
                                    color={`gray`}
                                    size={18}
                                />
                                <Text style={tw`ml-2 text-green-500`}>
                                    {rating}<Text style={tw`text-xs text-gray-500`}> . {genre}</Text>
                                </Text>
                            </View>
                            <View style={tw`ml-2 flex-row items-center`}>
                                <Icon
                                    style={tw``}
                                    name='ios-location'
                                    type='ionicon'
                                    color={`gray`}
                                    size={18}
                                />
                                <Text style={tw`text-xs text-gray-500`}>Nearby . {address}</Text>
                            </View>
                        </View>
                        <Text style={tw`text-gray-500 mt-2`}>
                            {short_description}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={tw`flex-row items-center justify-between py-4 border-t border-b border-gray-300/20`}
                    >
                        <View style={tw`flex-row`}>
                            <Icon
                                style={tw`mr-3`}
                                name='question-circle'
                                type='font-awesome'
                                color={`gray`}
                                size={20}
                            />
                            <Text className='font-bold'>
                                Have a food allergy?
                            </Text>
                        </View>
                        <Icon
                            style={tw``}
                            name='right'
                            type='ant-design'
                            color={`#80CCBB`}
                            size={20}
                        />  
                    </TouchableOpacity>
                </View>
                {/* restaurants menu */}
                <View>
                    <Text style={tw`py-3 px-4 bg-gray-100 font-bold text-xl`}>Menu</Text>   
                    <View>
                        {dishes.map(dish => (
                            <DishRow
                                key={dish._id}
                                id={dish._id}
                                name={dish.name}
                                description={dish.short_description}
                                price={dish.price}
                                image={dish.image}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        </>
    )
}

export default RestaurantScreen