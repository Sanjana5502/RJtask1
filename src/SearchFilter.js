import React, { useState } from 'react';

const SearchFilter = () => {
  const [searchText, setSearchText] = useState('');
  const [records, setRecords] = useState(['C','C++','JAVA','PHP','NODE.JS','REACT.JS','HTML','CSS','JAVASCRIPT','RUBY','MONGODB','SQL','DATABASE','BOOTSTRAP','NETWORKING','PYTHON']);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredRecords = records.filter((record) =>
    record.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h5>Search Item Here</h5>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleSearch}
      />
      <ul>
        {filteredRecords.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
