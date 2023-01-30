import { useState, useEffect } from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native';
import { tw } from '../lib/tailwind';
// sanity client import
import appSanityClient from '../sanity-connect';
// icons import
import { Icon } from '@rneui/themed';
import RestaurantCard from './RestaurantCard';


const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        appSanityClient.fetch(`
            *[_type == "featured" && _id == $id]{
                ...,
                restaurants[]->{
                ...,
                category->,
                dish->{name}
                },
            }[0]
        `, { id }).then(data => {
            setRestaurants(data?.restaurants);
        });
    }, []);

    return (
        <View style={tw`mt-2`}>
            <View style={tw`mb-3`}>
                <View style={tw`flex-row justify-between items-center py-1`}>
                    <Text style={tw`font-bold text-lg`}>{title}</Text>
                    <Icon
                        style={tw``}
                        name='arrow-forward-sharp'
                        type='ionicon'
                        color={`#80CCBB`}
                        size={20}
                    />
                </View>
                <Text style={tw`text-xs text-gray-500`}>{description}</Text>
            </View>
            <ScrollView
                contentContainerStyle={{
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {/* Restaurant Card */}
                {restaurants?.map(restaurant => (
                    <RestaurantCard 
                        key={restaurant._id}
                        id={restaurant._id}
                        title={restaurant.name} 
                        rating={restaurant.rating}
                        genre={"Japanese"}
                        address={restaurant.address}
                        short_description={restaurant.short_description}
                        dishes={[]}
                        long={restaurant.long}
                        lat={restaurant.lat}
                        imgUrl={restaurant.image}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

export default FeaturedRow;
