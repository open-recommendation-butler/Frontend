function calculatePageList(page, hitCount, HITS_PER_PAGE) {
  let start = 1;
  let end = 5;
  if (page < (Math.ceil(hitCount / HITS_PER_PAGE) - 2)) {
    if (page < 3) {
      if (Math.ceil(hitCount / HITS_PER_PAGE) < 5) {
        end = Math.ceil(hitCount / HITS_PER_PAGE);
      }
    } else {
      end = page + 2;
      start = page - 2;
    }
  } else {
    end = Math.ceil(hitCount / HITS_PER_PAGE);
    if (page < 5) {
      start = 1;
    } else {
      start = end - 5;
    }
  }
  return Array.from({length: end - start + 1}, (x, i) => i + start);
}

export default calculatePageList;