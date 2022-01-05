// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, CategoryMovie, Movie, Season, Episode } = initSchema(schema);

export {
  Category,
  CategoryMovie,
  Movie,
  Season,
  Episode
};