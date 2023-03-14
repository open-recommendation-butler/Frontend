import Customizations from '../Customizations';

function calculatePageList(page, hitCount) {
  let start = 1;
  let end = 5;
  if (page < (Math.ceil(hitCount / Customizations.settings.HitsPerPage) - 2)) {
    if (page < 3) {
      if (Math.ceil(hitCount / Customizations.settings.HitsPerPage) < 5) {
        end = Math.ceil(hitCount / Customizations.settings.HitsPerPage);
      }
    } else {
      end = page + 2;
      start = page - 2;
    }
  } else {
    end = Math.ceil(hitCount / Customizations.settings.HitsPerPage);
    if (page < 5) {
      start = 1;
    } else {
      start = end - 5;
    }
  }
  return Array.from({length: end - start + 1}, (x, i) => i + start);
}

export default calculatePageList;