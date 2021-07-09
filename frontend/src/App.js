import React, { useState } from 'react';
import Movies from './containers/Movies/Movies';
import SearchBlock from './containers/SearchBlock/SearchBlock';

function App() {
  const [searchBlockVisible, setSearchBlockVisibility] = useState(false);

  return (
    <main className="p-2 md:p-4 flex-grow block overflow-x-hidden bg-base-100 text-base-content h-screen">
      <div className="navbar mb-2 shadow-lg bg-neutral-focus text-neutral-content rounded-box">
        <div className="flex-1 px-2 mx-2">
          <span className="text-lg font-bold">MovieDB</span>
        </div>

        <div className="flex-none">
          <button className="btn btn-square btn-ghost" onClick={() => setSearchBlockVisibility(!searchBlockVisible)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>{' '}
            </svg>
          </button>
        </div>
      </div>
      <SearchBlock visible={searchBlockVisible}></SearchBlock>
      <Movies searchBlockVisible={searchBlockVisible}></Movies>
    </main>
  );
}

export default App;
