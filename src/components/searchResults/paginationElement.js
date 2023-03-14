import React, { useState, useEffect } from 'react';
import calculatePageList from '../../helpers/calculatePageList';
import Customizations from '../../Customizations';

function PaginationElement({ query, contentType, category, publisher, page, results }) {
  const [pageList, setPageList] = useState([]);

  useEffect(() => {
    if (!results) return;
    setPageList(calculatePageList(page, results.hitCount));
  }, [page, results])

  if (!results) return;
  if (results.hitCount === 0) return;

  return (
    <div className='mt-14'>
      <a 
        href={
          `/search?q=${query}&page=${page - 1}
            ${contentType ? '&content_type=' + contentType : ''}
            ${category ? '&category=' + category : ''}
            ${publisher ? '&publisher=' + publisher : ''}
          `
        }
        onClick={(e) => page === 1 && e.preventDefault()} 
        className={
          `rounded-l-full border px-3 py-2 font-bold 
            ${page === 1 ? "bg-slate-200 text-gray-500 cursor-not-allowed" : "hover:bg-slate-100 cursor-pointer"}
          `
        }
      >
        Back
      </a>
      {pageList.map((site_page) => 
        <a 
          href={`/search?q=${query}&page=${site_page}${contentType ? '&content_type=' + contentType : ''}${category ? '&category=' + category : ''}${publisher ? '&publisher=' + publisher : ''}`}
          onClick={(e) => page === site_page && e.preventDefault()} 
          className={`border-y border-r px-3 py-2 font-bold ${page === site_page ? "bg-slate-200 text-gray-500 cursor-not-allowed" : "hover:bg-slate-100 cursor-pointer"}`}
        >{site_page}</a>
      )}
      <a 
        href={`/search?q=${query}&page=${page + 1}${contentType ? '&content_type=' + contentType : ''}${category ? '&category=' + category : ''}${publisher ? '&publisher=' + publisher : ''}`}
        onClick={(e) => page === Math.ceil(results.hitCount / Customizations.settings.HitsPerPage) && e.preventDefault()} 
        className={`rounded-r-full border-y border-r px-3 py-2 font-bold ${page === Math.ceil(results.hitCount / Customizations.settings.HitsPerPage) ? "bg-slate-200 text-gray-500 cursor-not-allowed" : "hover:bg-slate-100 cursor-pointer"}`}
      >Next</a>
    </div>
  )
}

export default PaginationElement;