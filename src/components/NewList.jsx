import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from "./NewsItem.jsx";
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`; 
        const respone = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2025-02-16&sortBy=publishedAt${query}&apiKey=6d2a8dda301d4c37aab928d46dd6446a`, );
        setArticles(respone.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>
  }
  if(!articles){
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewList;