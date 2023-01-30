import { View, Text, Image, TouchableOpacity } from 'react-native'
import { urlFor } from '../sanity-connect';
import { tw } from '../lib/tailwind';


const CategoryCard = ({ title, imgUrl }) => {

  return (
    <TouchableOpacity style={tw`relative mr-2`}>
      <View 
        style={tw`absolute top-0 left-0 z-1 h-full w-full bg-neutral-500/30`}
      >
        </View>
      <Image 
        source={{
          uri: urlFor(imgUrl).url()
        }}
        style={tw`bg-gray-200 h-20 w-20 rounded`}
      />
      <Text style={tw`absolute bottom-1 left-1 z-2 text-white font-bold`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard