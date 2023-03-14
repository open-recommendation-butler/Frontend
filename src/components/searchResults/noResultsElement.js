function NoResultsElement({results}) {
  if (!results || results.hitCount > 0) return;
  
  return (
    <div className='mt-14'>
      <p className='text-xl font-bold'>No results found for your query</p>
      <p className='text-x'>Try another search requests.</p>
    </div>
  )
}

export default NoResultsElement;