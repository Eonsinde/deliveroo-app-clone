import { useMemo, useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { tw } from '../lib/tailwind'
import { selectCartItems, selectCartTotal } from '../slices/cartSlice';
import { selectRestaurant } from '../slices/restaurantSlice';
// icons import
import { Icon } from '@rneui/themed';
import { urlFor } from '../sanity-connect';


const CartScreen = () => {
    const navigation = useNavigation();

    const [groupedItemsInCart, setGroupedItemsInCart] = useState([]);

    const cartItems = useSelector(selectCartItems);
    const restaurant = useSelector(selectRestaurant);
    const cartTotal = useSelector(selectCartTotal);


    useMemo(() => {
        const groupedItems = cartItems.reduce((results, item) => {
            (results[item.id] = (item.id in results) ? results[item.id] : []).push(item);
            return results;
        }, {});

        setGroupedItemsInCart(groupedItems);
    }, [cartItems]);

    console.log("groupedItemsInCart:", groupedItemsInCart);

    return (
        <SafeAreaView style={[tw`relative`, { marginTop: StatusBar.currentHeight || 0, flex: 1 }]}>
            {/* header */}
            <View style={tw`bg-white p-4 flex-row items-center justify-between shadow-md`}>
                <View>
                    <Text style={tw`text-lg font-bold`}>Cart</Text>
                    <Text>{restaurant.title}</Text>
                </View>
                <TouchableOpacity
                    style={[tw`p-2 rounded-full`, { backgroundColor: "#80CCBB" }]}
                    onPress={navigation.goBack}
                >
                    <Icon
                        style={tw``}
                        name='close'
                        type='ant-design'
                        color={`#fff`}
                        size={20}
                    />
                </TouchableOpacity>
            </View>
            {/* time info */}
            <View style={tw`my-4 p-4 bg-white flex-row items-center justify-between`}>
                <View style={tw`flex-row items-center`}>
                    <Image 
                        source={{ uri: 'https://links.papareact.com/wru' }}
                        style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
                    />
                    <Text style={tw`ml-2`}>Deliver in 50 - 75 min</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: '#80CCBB' }}>Change</Text>
                </TouchableOpacity>
            </View>
            {/* contents */}
            <ScrollView style={tw`bg-white py-4 px-4`}>
                {Object.entries(groupedItemsInCart).map(([key, items]) => (
                    <View key={key} style={tw`py-2 flex-row items-center justify-between`}>
                        <View style={tw`flex-row items-center`}>
                            <Text style={{ color: '#80CCBB' }}>{items.length} x</Text>
                            <Image 
                                source={{
                                    uri: urlFor(items[0]?.image).url()
                                }}
                                style={tw`ml-2 h-12 w-12 rounded-full`}
                            />
                            <Text style={tw`ml-2 `}>{items[0]?.name}</Text>
                        </View>
                        <View style={tw`flex-row items-center`}>
                            <Text>${items[0]?.price}</Text>
                            <TouchableOpacity style={tw`ml-2`}>
                                <Text style={{ color: '#80CCBB' }}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={tw`bg-white`}>

            </View>
        </SafeAreaView>
    )
}

export default CartScreen