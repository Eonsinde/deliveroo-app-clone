import { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../slices/cartSlice';
import { selectRestaurant } from '../slices/restaurantSlice';
import { tw } from '../lib/tailwind';
// icons import
import { Icon } from '@rneui/themed';


const CartBox = () => {
    const navigation = useNavigation();
    const items = useSelector(selectCartItems);
   
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('Cart')}
            style={[tw`absolute top-5 right-5 z-3 rounded-md flex-row items-center justify-between py-1 px-2`, { backgroundColor: '#80CCBB' }]}
        >
            <Icon
                style={tw``}
                name='ios-basket-outline'
                type='ionicon'
                color={`#fff`}
                size={30}
            />
            <Text style={tw`ml-1 text-white text-base`}> - {items.length}</Text>
        </TouchableOpacity>
    )
}

export default CartBox