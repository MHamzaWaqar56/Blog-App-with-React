import React, { useState } from 'react';
import BlogList from '../../Components/Home/BlogList/BlogLists';
import Header from '../../Components/Home/Headers/Header';
import SearchBar from '../../Components/Home/SearchBar/SearchBaar';
import { blogList } from '../../Config/data';
import EmptyList from '../../Components/Common/EmptyList';

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };


  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div>
    
      <Header />

      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />


      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
