import React, { useState, useEffect } from 'react';
import { GET } from '../helpers/requests';
import { useSearchParams } from "react-router-dom";
import SearchField from '../components/searchField/searchField';
import TopicListElement from '../components/searchResults/topicListElement';
import SimilarSearchRequests from '../components/searchResults/similarSearchRequests';
import FilterSelection from '../components/searchResults/filterSelection';
import PaginationElement from '../components/searchResults/paginationElement';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [contentType, setContentType] = useState();
  const [results, setResults] = useState();
  const [page, setPage] = useState();
  const [category, setCategory] = useState();
  const [publisher, setPublisher] = useState();


  const HITS_PER_PAGE = 20;
  
  // Extract search params from url
  useEffect(() => {
    setPage(parseInt(searchParams.get('page')), 1);
    setContentType(searchParams.get('content_type'));
    setCategory(searchParams.get('category'));
    setPublisher(searchParams.get('publisher'));
    setQuery(searchParams.get('q'));
  }, [searchParams]);

  // Request search results from backend
  useEffect(() => {
    console.log('res')
    GET(`/search/?q=${query}&count=${HITS_PER_PAGE}&page=${page}${contentType ? '&content_type=' + contentType : ''}${category ? '&category=' + category : ''}${publisher ? '&publisher=' + publisher : ''}`)
      .then(response => {
        setResults(response.data);
      })
  }, [query, page, contentType, category, publisher]);


  return (
      <div className="container mx-auto pt-16 px-3 mb-40">
        <div className="w-full max-w-xl">
          <SearchField />
          <FilterSelection
            query={query}
            contentType={contentType}
            category={category}
            publisher={publisher} 
          />
          {results &&
            <div className="mt-2 pb-1 ml-4">
              <div className="text-sm text-gray-600">{results.hitCount} results in {results.took}s</div>
              {results.correction &&
                <div className="text-gray-600">Did you mean:&nbsp;
                  <a href={`/search?q=${results.correction}${contentType ? '&content_type=' + contentType : ''}${category ? '&category=' + category : ''}${publisher ? '&publisher=' + publisher : ''}`}>
                    <span className="text-slate-800" dangerouslySetInnerHTML={{__html: results.correction_html}} />
                  </a>
                </div>
              }
            </div>
          }
        </div>
        <div className="w-full max-w-xl px-4">
          {results
            ? 
              results.hitCount
                ?
                  <div className="mt-10">
                    {results.content.map(content => <TopicListElement topic={content} />)}
                    <SimilarSearchRequests similar_search_requests={results.similar_search_requests} />
                    <PaginationElement 
                      query={query}
                      contentType={contentType}
                      category={category}
                      publisher={publisher}
                      page={page}
                      hitCount={results.hitCount}
                      HITS_PER_PAGE={HITS_PER_PAGE}
                    />
                  </div>
                :
                  <div className='mt-14'>
                    <p className='text-xl font-bold'>No results found for your query</p>
                    <p className='text-x'>Try another search requests.</p>
                  </div>
            :
              <div className="mt-6">
                <div className="pt-3">
                  <div className="text-sm"></div>
                </div>
                {Array.from({length: HITS_PER_PAGE}, (x, i) => i).map(_ => 
                  <div className="animate-pulse my-4">
                    <div className="h-3 mb-2 w-full max-w-sm bg-slate-400 rounded col-span-2"></div>
                    <div className={`h-4 w-full ${["max-w-xs", "max-w-sm", "max-w-md", "max-w-lg"][Math.floor(Math.random() * 4)]} bg-slate-400 rounded col-span-2`}></div>
                  </div>
                )}
              </div>
          }
        </div>
      </div>
  );
}

export default SearchPage;
