import React, { useState, useEffect } from 'react';
import { GET } from '../helpers/requests';
import { useSearchParams } from "react-router-dom";
import SearchField from '../components/searchField/searchField';
import TopicListElement from '../components/searchResults/topicListElement';
import SimilarSearchRequests from '../components/searchResults/similarSearchRequests';
import FilterSelection from '../components/searchResults/filterSelection';
import PaginationElement from '../components/searchResults/paginationElement';
import Customizations from '../Customizations';
import SearchDetails from '../components/searchResults/searchDetails';
import CorrectionElement from '../components/searchResults/correctionElement';
import NoResultsElement from '../components/searchResults/noResultsElement';
import LoadingPlaceholder from '../components/searchResults/loadingPlaceholder';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [contentType, setContentType] = useState();
  const [results, setResults] = useState();
  const [page, setPage] = useState();
  const [category, setCategory] = useState();
  const [publisher, setPublisher] = useState();
  
  // Extract search params from url
  useEffect(() => {
    setPage(parseInt(searchParams.get('page') ? searchParams.get('page') : 1));
    setContentType(searchParams.get('content_type'));
    setCategory(searchParams.get('category'));
    setPublisher(searchParams.get('publisher'));
    setQuery(searchParams.get('q'));
  }, [searchParams]);

  // Request search results from backend
  useEffect(() => {
    if (!(query && page)) return;
    GET(`/search/?q=${query}&count=${Customizations.settings.HitsPerPage}&page=${page}${contentType ? '&content_type=' + contentType : ''}${category ? '&category=' + category : ''}${publisher ? '&publisher=' + publisher : ''}`)
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
          <div className='px-4'>
            <SearchDetails
              results={results}
            />
            <CorrectionElement
              results={results}
            />
          </div>
          <div className="mt-10 px-4">
            {results && results.content.map(content => <TopicListElement topic={content} />)}
            <SimilarSearchRequests results={results} />
            <PaginationElement 
              query={query}
              contentType={contentType}
              category={category}
              publisher={publisher}
              page={page}
              results={results}
            />
            <NoResultsElement
              results={results}
            />
            <LoadingPlaceholder
              results={results}
            />
          </div>
        </div>
      </div>
  );
}

export default SearchPage;