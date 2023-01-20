import { View, TextInput } from 'react-native'
import { tw } from '../lib/tailwind';
// icons import
import { Icon } from '@rneui/themed';
import {  } from 'react-native';


const SearchFilter = () => {
  return (
    <View style={tw`my-2 flex-row items-center`}>
        <View style={tw`flex-1 flex-row items-center bg-gray-200 p-3`}>
            <Icon
                style={tw``}
                name='search-outline'
                type='ionicon'
                color={`#fb923c`}
                size={20}
            />
            <TextInput 
                style={tw`ml-2`}
                placeholder='Restuarants and cuisines'
            />
        </View>
        <View style={tw`ml-2`}>
            <Icon
                style={tw``}
                name='options-outline'
                type='ionicon'
                color={`#fb923c`}
                size={25}
            />
        </View>
    </View>
  )
}

export default SearchFilter