import { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { tw } from '../lib/tailwind';
// sanity client import
import appSanityClient from '../sanity-connect';
// components import 
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';


const HomeScreen = () => {
  const x = 1 === 1;
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    appSanityClient.fetch(`
      *[_type == "featured"]{
        ...,
        restaurants->{
          category->,
          dish->{name}
        },
      }
    `).then((data) => {
      setFeaturedCategories(data);
    });
    
  }, []);


  return (
    <SafeAreaView style={[tw`py-3 px-4 bg-white`, { marginTop: StatusBar.currentHeight || 0, flex: 1 }]}>
        {/* Header  */}
        <Header />
        {/* Search */}
        <SearchFilter />
        {/* body */}
        <ScrollView
          contentContainerStyle={{
            paddingVertical: 10
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* categories */}
          <Categories />

          {/* Featured Rows */}
          {featuredCategories?.map((category) => (
            <FeaturedRow
              id={category._id}
              key={category._id}
              title={category.name}
              description={category.short_description}
            />
          ))}
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen