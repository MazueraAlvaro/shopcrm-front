import React, { useState } from 'react';

type Props = {
  onSubmit: ({ search: string }) => string;
  textButton: string;
};

function SearchBar({ onSubmit, textButton }: Props) {
  const [search, setSearch] = useState();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ search });
  };
  return (
    <div className='hero__search__form'>
      <form onSubmit={handleSubmit}>
        <div className='hero__search__categories'>
          Todas las categorias
          {/* <span className='arrow_carrot-down' /> */}
        </div>
        <input type='text' placeholder='Que estás necesitando?' onChange={handleChange} />
        <button type='submit' className='site-btn'>
          {textButton.toLocaleUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
