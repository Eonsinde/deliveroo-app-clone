import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import Currency from 'react-currency-format';
import { urlFor } from '../sanity-connect';
import { tw } from '../lib/tailwind';
// icons import
import { Icon } from '@rneui/themed';
import { addToBasket, selectCartItemsWithId, removeFromBasket } from '../slices/cartSlice';


const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector(state => selectCartItemsWithId(state, id));
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  }

  const removeProductFromCart = () => {
    if (!items.length > 0) return;
    
    dispatch(removeFromBasket({ id }))
  }

  return (
    <>
    <TouchableOpacity 
      onPress={() => setIsPressed(true)}
      style={tw`p-4 border ${isPressed && 'border-b-0'} border-gray-200/30 flex-row justify-between items-center`}
    >
      <View>
        <Text style={tw`text-base`}>{name}</Text>
        <Text style={tw`text-sm text-gray-400`}>{description}</Text>
        <Text style={tw`text-gray-400`}>
          {price}
          {/* <Currency.CustomCurrencyFormat value={price} /> */}
        </Text>
      </View>
      <View>
        <Image 
          source={{
            uri: urlFor(image).url()
          }}
          style={[tw`h-20 w-20`, { borderWidth: 2, borderColor:'#F3F3F4' }]}
        />
      </View>
    </TouchableOpacity>

    {isPressed && (
      <View style={tw`flex-row items-center py-3 px-4`}>
        <TouchableOpacity 
          onPress={removeProductFromCart}
          disabled={!items.length}
          style={tw`${!items.length ? 'bg-green-300/10' : 'bg-green-300/30'} p-1 rounded-full`}
        >
          <Icon
            style={tw``}
            name='minus'
            type='ant-design'
            color={`#80CCBB`}
            size={20}
          />
        </TouchableOpacity>
        <Text style={tw`ml-4`}>{items.length}</Text>
        <TouchableOpacity 
          onPress={addProductToCart}
          style={tw`ml-4 bg-green-300/30 p-1 rounded-full`}
        >
          <Icon
            style={tw``}
            name='plus'
            type='ant-design'
            color={`#80CCBB`}
            size={20}
          />
        </TouchableOpacity>
      </View>
    )}
    </>
  )
}

export default DishRow