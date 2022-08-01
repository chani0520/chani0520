import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {useQuery} from 'react-query';
import {getArticles} from '../api/articles';
import Articles from '../components/Articles';

const ArticlesScreen = () => {
  const {data} = useQuery('articles', getArticles);
  // console.log('🟥🟥🟥', {data}['data']);

  if (!data) {
    return <ActivityIndicator size="large" style={styles.spinner} />;
  }

  return <Articles articles={data} />;
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
  },
});

export default ArticlesScreen;
