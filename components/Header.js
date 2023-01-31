import { View, Text, Image } from 'react-native'
import { tw } from '../lib/tailwind';
// icons import
import { Icon } from '@rneui/themed';


const Header = () => {
  return (
    <View style={tw`my-2 flex-row items-center justify-between`}>
      <View style={tw`flex-row items-center`}>
          <Image 
            source={{ uri: 'https://links.papareact.com/wru' }}
            style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
          />
          <View style={tw`ml-3`}>
              <Text style={tw`font-bold text-gray-400 text-xs `}>Deliver Now!</Text>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`font-bold text-xl`}>Current Location</Text>
                <Icon
                  style={tw``}
                  name='chevron-down-sharp'
                  type='ionicon'
                  color={`#80CCBB`}
                  size={20}
                />
              </View>
          </View>
      </View>
      <View>
          <Icon
            style={tw``}
            name='person-outline'
            type='ionicon'
            color={`#80CCBB`}
            size={35}
          />
      </View>
    </View>
  )
}

export default Header