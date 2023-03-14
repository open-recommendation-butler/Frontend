import Customizations from '../../Customizations';

function LoadingPlaceholder({results}) {
  if (results) return;

  return (
    <div className="mt-6">
      <div className="pt-3">
        <div className="text-sm"></div>
      </div>
      {Array.from({length: Customizations.settings.HitsPerPage}, (x, i) => i).map(index => 
        <div className="animate-pulse my-4" key={index}>
          <div className="h-3 mb-2 w-full max-w-sm bg-slate-400 rounded col-span-2"></div>
          <div className={`h-4 w-full ${["max-w-xs", "max-w-sm", "max-w-md", "max-w-lg"][Math.floor(Math.random() * 4)]} bg-slate-400 rounded col-span-2`}></div>
        </div>
      )}
    </div>
  )
}

export default LoadingPlaceholder;