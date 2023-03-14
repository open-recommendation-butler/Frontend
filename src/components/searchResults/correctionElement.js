import Customizations from '../../Customizations';

function CorrectionElement({ results }) {
  if (!results) return;
  if (!Customizations.settings.ShowCorrectionElement) return;
  if (!results.correction) return;

  return (
    <div className="text-gray-600">{ Customizations.literals.CorrectionElementText }&nbsp;
      <a href={`/search?q=${results.correction}`}>
        <span className="text-slate-800" dangerouslySetInnerHTML={{__html: results.correction_html}} />
      </a>
    </div>
  )
}

export default CorrectionElement;