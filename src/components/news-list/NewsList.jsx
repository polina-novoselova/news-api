import React, { useEffect, useState } from "react";
import { fetchNews } from "../../services/newsService";
import "./NewsList.css";

const NewsList = ({ category, country, language, date, source }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        console.log("Fetching news with:", {
          category,
          country,
          language,
          date,
          source,
        });
        const articles = await fetchNews(
          category,
          country,
          language,
          date,
          source
        );
        setNews(articles);
        setError(null);
      } catch (error) {
        setError("Failed to load news");
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, [category, country, language, date, source]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const filteredArticles = news.filter(
    (article) => article.title && article.urlToImage && article.description
  );

  return (
    <div className="news-container">
      {filteredArticles.map((article, index) => (
        <div key={index} className="news-item">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
            <p>Read more...</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
