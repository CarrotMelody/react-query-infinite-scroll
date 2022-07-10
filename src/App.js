import React from 'react';
import PeopleCard from './components/PeopleCard';
import usePeople from './hooks/usePeople';
import InfiniteScroll from 'react-infinite-scroller';
import './style.css';

export default function App() {
  const { isLoading, isError, error, data, fetchNextPage, hasNextPage } =
    usePeople();

  if (isLoading) {
    return <p>loading... </p>;
  }

  if (isError) {
    return <p>Error:{error}</p>;
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={fetchNextPage}
      hasMore={hasNextPage}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      {data.pages.map((people) =>
        people.results.map((item) => <PeopleCard key={item.name} {...item} />)
      )}
    </InfiniteScroll>
  );
}
