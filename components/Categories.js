import { useState, useEffect } from 'react'
import { ScrollView, Text } from 'react-native'
// sanity client import
import appSanityClient from '../sanity-connect';
import CategoryCard from './CategoryCard'


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    appSanityClient.fetch(`
      *[_type == "category"]{
        ...,
      }
    `).then(data => {
      setCategories(data);
    });
  }, []);

  // console.log("Categories:", categories);

  return (
    <ScrollView
      contentContainerStyle={{

      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map(category => (
        <CategoryCard key={category._id} title={category.name} imgUrl={category.image} />
      ))}
    </ScrollView>
  )
}

export default Categories