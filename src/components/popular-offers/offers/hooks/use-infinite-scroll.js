import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback, useRef } from 'react';

import axios from '../../../utils/axios';

export const MAX_RESTAURANTS = 10;

const createRequest = (accessToken) => (page) =>
  axios.get(`/restaurants/all?page=${page}&perPage=${MAX_RESTAURANTS}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

const useInfiniteScroll = () => {
  const request = createRequest(null);

  const observer = useRef();

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['restaurants'],
    ({ pageParam = 1 }) => request(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const { restaurants } = lastPage?.data || {};
        const isNextPage = restaurants?.length === MAX_RESTAURANTS;
        const nextPage = allPages.length + 1;
        return isNextPage ? nextPage : undefined;
      },
    }
  );

  const lastRestaurant = useCallback(
    (node) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(async (entries) => {
        const element = entries[0];
        if (element.isIntersecting && hasNextPage) {
          await fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  const restaurants = data?.pages
    .map((page) => page.data.restaurants)
    .reduce((prevValue, currentValue) => prevValue.concat(currentValue));

  return [restaurants, lastRestaurant];
};

export default useInfiniteScroll;
