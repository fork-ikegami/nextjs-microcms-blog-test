import { createContext } from 'react';
import { blog, category, tag } from '@/interfaces/index';

interface Props {
  allBlogData: blog[],
  allCategoryData: category[],
  allTagData: tag[],
}

export const microCMS = createContext<Props>({
  allBlogData: [],
  allCategoryData: [],
  allTagData: [],
})