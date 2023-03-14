import Customizations from '../../Customizations';

function SearchDetails({ results }) {
  if (!results) return;
  if (!Customizations.settings.ShowSearchDetails) return;

  return (
    <div className="mt-2 pb-1">
      <div className="text-sm text-gray-600">{results.hitCount} {Customizations.literals.SearchDetailsText} {results.took}s</div>
    </div>
  )
}

export default SearchDetails;