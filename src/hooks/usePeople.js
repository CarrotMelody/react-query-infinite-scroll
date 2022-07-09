import { useInfiniteQuery } from 'react-query';

const apiUrl = 'https://swapi.dev/api/people?page=1';

const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export default function usePeople() {
  return useInfiniteQuery(
    'people',
    ({ pageParam = apiUrl }) => fetchData(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => lastPage.next,
    }
  );
}
