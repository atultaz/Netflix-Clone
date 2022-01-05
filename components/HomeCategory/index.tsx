import React, { useEffect, useState } from 'react';
import { Image, FlatList, Pressable } from 'react-native';
import { Text } from '../../components/Themed';
import MovieItem from '../../components/MovieItem';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getCategory } from '../../src/graphql/queries';
import { listMovies } from './query';

import { Storage } from 'aws-amplify';

import styles from './styles';
import { Category, Movie, CategoryMovie } from '../../src/models';
import { DataStore } from '@aws-amplify/datastore';

interface HomeCategoryProps {
  category: Category;
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      var movy = true;
      const result = await API.graphql(graphqlOperation(listMovies));
      for (var x of result.data.listMovies.items) {
        let cat = [];
        for (var y of x.categories.items) {
          cat.push(y.categoryID);
        }

        if (cat.includes(category.id)) {
          setMovies((movies) => [x, ...movies]);
          // setMovies(x);
        }
      }
      console.log(result.data.listMovies.items);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieItem movie={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default HomeCategory;
