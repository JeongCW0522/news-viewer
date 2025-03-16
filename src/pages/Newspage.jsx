import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import NewList from '../components/NewList';

const Newspage = () => {
  const params = useParams();
  const category = params.category || 'all';

  return (
    <div>
      <Categories />
      <NewList category={category} />
    </div>
  );
};

export default Newspage;