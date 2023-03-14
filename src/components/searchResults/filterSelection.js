import React, { useState, useEffect } from 'react';
import { GET } from '../../helpers/requests';

function FilterSelection({ query, contentType, category, publisher }) {
  const [showFilters, setShowFilters] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showPublishers, setShowPublishers] = useState(false);
  const [categories, setCategores] = useState(["Any category"]);
  const [publishers, setPublishers] = useState(["Any publisher"]);

  // Load portal and category selection
  useEffect(() => {
    GET('/portal/')
      .then(response => setPublishers(publishers.concat(response.data)));
    GET('/category/')
      .then(response => setCategores(categories.concat(response.data)));
  }, []);

  return (
    <>
      <div className='flex ml-4 mr-2 mt-3 gap-2 border-b border-slate-100'>
        <a href={`/search?q=${query}`}>
          <div className={`flex items-center border-slate-400 pr-3 py-1 ${!contentType ? 'border-b-4' : 'hover:border-b-4'}`}>
            <svg className="mr-1" width="12" height="12" viewBox="0 0 477 448" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="184" cy="184" r="157" stroke="#475569" strokeWidth="75"/>
              <path d="M298 269L463.5 434.5" stroke="#475569" strokeWidth="75"/>
            </svg>
            <div className={`${!contentType ? 'font-bold text-slate-600' : ''}`}>All</div>
          </div>
        </a>
        <a href={`/search?q=${query}&content_type=article${category ? '&category=' + category : ''}${publisher ? '&publisher=' + publisher : ''}`}>
          <div className={`flex items-center border-slate-400 px-2 py-1 ${contentType === 'article' ? 'border-b-4' : 'hover:border-b-4'}`}>
            <svg className="mr-1" width="10" height="20" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="19" y="19" width="362" height="362" rx="90" stroke="#475569" strokeWidth="80"/>
              <path d="M74 123H325.5M74 199H325.5M74 276H325.5" stroke="#475569" strokeWidth="55"/>
            </svg>
            <div className={`${contentType === 'article' ? 'font-bold text-slate-600' : ''}`}>Articles</div>
          </div>
        </a>
        <a href={`/search?q=${query}&content_type=podcast${category ? '&category=' + category : ''}${publisher ? '&publisher=' + publisher : ''}`}>
          <div className={`flex items-center border-slate-400 px-2 py-1 ${contentType === 'podcast' ? 'border-b-4' : 'hover:border-b-4'}`}>
          <svg className="mr-1" width="9" height="11" viewBox="0 0 320 396" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="103" y="30" width="117" height="200" rx="100" stroke="#475569" strokeWidth="65"/>
            <path d="M19.013 160C18.3289 212 44.3795 316 154.055 316C263.73 316 301 227.388 301 160" stroke="#475569" strokeWidth="65"/>
            <path d="M159 314V371" stroke="#475569" strokeWidth="65"/>
            <path d="M53 377H261" stroke="#475569" strokeWidth="65"/>
          </svg>
            <div className={`${contentType === 'podcast' ? 'font-bold text-slate-600' : ''}`}>Podcasts</div>
          </div>
        </a>
        <div className='mb-1 ml-auto'>
          <button 
            className={`rounded-xl px-3 py-1 ${showFilters ? 'bg-slate-300 hover:bg-slate-100': 'hover:bg-slate-300'}`} 
            onClick={() => {setShowFilters(!showFilters); setShowCategories(false); setShowPublishers(false)}}
          >Filter</button>
        </div>
      </div>
      {showFilters &&
        <div className='mt-1 text-sm ml-1 flex'>
          <div className='relative'>
            <button 
              className="rounded-xl px-3 py-1 hover:bg-slate-300 flex items-center truncate text-ellipsis overflow-hidden" 
              onClick={() => {setShowCategories(!showCategories); setShowPublishers(false)}}
            >
              {category ? category : 'Any category'}
              <svg className={`ml-1 transition-all duration-300 ${showCategories && 'rotate-180'}`} width="9" height="7" viewBox="0 0 172 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M86 149L0.263502 0.499984L171.737 0.499999L86 149Z" fill="black"/>
              </svg>
            </button>
            {showCategories &&
              <div className='w-52 absolute bottom-0 translate-y-full bg-white border border-slate-200 drop-shadow-2xl rounded-2xl py-4 text-base'>
                {categories.map((c) => 
                  <a href={`/search?q=${query}${c === 'Any category' ? '' : "&category=" + c}${contentType ? '&content_type=' + contentType : ''}${publisher ? '&publisher=' + publisher : ''}`}>
                    <div className={`flex py-1 px-4 ${(category === c || (c === 'Any category' && !category)) ? 'bg-slate-300' : 'hover:bg-slate-300'}`}>
                      {c}
                    </div>
                  </a>
                )}
              </div>            
            }
          </div>
          <div className='relative'>
            <button 
              className="rounded-xl px-3 py-1 hover:bg-slate-300 flex items-center truncate text-ellipsis overflow-hidden" 
              onClick={() => {setShowPublishers(!showPublishers); setShowCategories(false)}}
            >
              {publisher ? publisher : 'Any publisher'}
              <svg className={`ml-1 transition-all duration-300 ${showPublishers && 'rotate-180'}`} width="9" height="7" viewBox="0 0 172 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M86 149L0.263502 0.499984L171.737 0.499999L86 149Z" fill="black"/>
              </svg>
            </button>
            {showPublishers &&
              <div className='w-52 absolute bottom-0 translate-y-full bg-white border border-slate-200 drop-shadow-2xl rounded-2xl py-4'>
                {publishers.map((p) => 
                  <a href={`/search?q=${query}${p === 'Any publisher' ? '' : "&publisher=" + p}${contentType ? '&content_type=' + contentType : ''}${category ? '&category=' + category : ''}`}>
                    <div className={`flex py-1 px-4 ${publisher === p || (p === 'Any publisher' && !publisher) ? 'bg-slate-300' : 'hover:bg-slate-300'}`}>
                      {p}
                    </div>
                  </a>
                )}
              </div>            
            }
          </div>
        </div>
      }
    </>
  )
}

export default FilterSelection;