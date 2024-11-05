import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/header";
import FilterBtn from "./components/filter-btn/FilterBtn";
import NewsList from "./components/news-list/NewsList";
import SearchBar from "./components/search-bar/SearchBar";

function App() {
  const [category, setCategory] = useState("general");
  const handleCategoryChange = (selectedValue) => setCategory(selectedValue);
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const [query, setQuery] = useState("");

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const articles = await fetchNews(category, "us", query);
        setNews(articles);
      } catch (err) {
        setError("Failed to load news");
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [category, query]);

  return (
    <div>
      <Header />
      <SearchBar />
      <div>
        <FilterBtn
          filterName="Category:"
          filterValues={categories}
          onFilterChange={handleCategoryChange}
        />
      </div>
      <NewsList category={category} />
    </div>
  );
}

export default App;
