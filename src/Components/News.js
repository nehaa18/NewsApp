import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(30);
    console.log("UpdateNews");
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=db1c2a3e8e794cc6857c06070d312e95&page=${page}&pageSize=${props.pageSize}`;
    let response = await fetch(apiUrl);
    let parsedData = await response.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    document.title=`${capitalizeFirstLetter(props.category)} - Daily Dose`
    updateNews();
    // eslint-disable-next-line
  }, [props.country, props.category, props.pageSize]);

  const fetchMoreData = async () => {
    setIsLoadingMore(true);
    const nextPage = page + 1;
    setPage(nextPage);
    console.log("Fetching more data");
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=db1c2a3e8e794cc6857c06070d312e95&page=${nextPage}&pageSize=${props.pageSize}`;
    let response = await fetch(apiUrl);
    let parsedData = await response.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setIsLoadingMore(false);
    console.log(parsedData);
  };

  return (
    <>
      <h1 className="text-center" style={{margin: '35px 0px', marginTop: '90px'}}>Daily Dose - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
      {loading ? (
        <Spinner />
      ) : (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={isLoadingMore && <Spinner />}
        >
          <div className="container">
            <div className="row my-3">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 30) : ""}
                      description={element.description ? element.description.slice(0, 80) : ""}
                      imageUrl={element.urlToImage ? element.urlToImage : "https://images.news18.com/ibnlive/uploads/2023/11/vijaypat-singhania-1-2023-11-ca965d001dbd62e9aeb1f1fa3537cb5d-16x9.jpg?impolicy=website&width=1200&height=675"}
                      newsUrl={element.url}
                      author={element.author ? element.author : "Unknown"}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      )}
    </>
  );
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string
}

export default News;
