import client from './client';
import {Article} from './types';

export async function getArticles() {
  const response = await client.get<Article[]>('/articles');
  // console.log('🚨🚨🚨', response.data);
  return response.data;
}

export async function getArticle(id: number) {
  const response = await client.get<Article>(`/articles/${id}`);
  return response.data;
}
