import { SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { tw } from '../lib/tailwind';
// components import 
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';


const HomeScreen = () => {
  return (
    <SafeAreaView style={[tw`p-3 bg-white`, { marginTop: StatusBar.currentHeight || 0, flex: 1 }]}>
        {/* Header  */}
        <Header />
        {/* Search */}
        <SearchFilter />
        {/* body */}
        <ScrollView>
          
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen