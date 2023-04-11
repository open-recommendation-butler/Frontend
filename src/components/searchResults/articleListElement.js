import React, { useState } from 'react';
import moment from 'moment';
import ReactAudioPlayer from 'react-audio-player';

function ArticleListElement({ article }) {
  const [showFull, setShowFull] = useState(false);

  return (
      <div className="mt-3 mb-8" key={article.id}>
        <a className="hover:underline" href={article.url} target="_blank" rel="noreferrer">
          <div className="text-sm text-gray-600 flex items-center">
            <div className='shrink text-ellipsis overflow-hidden truncate'>{article.portal} </div>
            <div className='min-w-fit'>&nbsp;|&nbsp;{moment(article.created).fromNow()} </div>
            {article.content_type === 'podcast' &&
              <>
                  &nbsp;|&nbsp;
                  <svg className="mr-1 min-w-fit" width="9" height="11" viewBox="0 0 320 396" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="103" y="30" width="117" height="200" rx="100" stroke="#475569" strokeWidth="65"/>
                    <path d="M19.013 160C18.3289 212 44.3795 316 154.055 316C263.73 316 301 227.388 301 160" stroke="#475569" strokeWidth="65"/>
                    <path d="M159 314V371" stroke="#475569" strokeWidth="65"/>
                    <path d="M53 377H261" stroke="#475569" strokeWidth="65"/>
                  </svg>
                  Podcast            
              </>

            }
          </div>
          <p>{article.title}</p>
        </a>
        {article.highlights.slice(0, showFull ? 999 : 1).map((highlight, i) =>
          <div className={`mt-1 mb-4 border-gray-200 pt-4 ${i !== 0 && "border-t"}`}>
            <p className='text-sm text-gray-800' dangerouslySetInnerHTML={{__html: highlight.highlight.slice(0,450)}} />
            {highlight.timestamp &&
              <ReactAudioPlayer
                className='mt-4'
                src={`${article.url}#t=${highlight.timestamp_in_seconds - 3}`}
                controls
                // preload='auto'
              />
            }
          </div>
        )}
        {article.highlights.length > 1 &&
          <button className='flex items-center hover:underline text-sm' onClick={() => setShowFull(!showFull)}>
            {showFull ? "Show less matches" : "Show more matches"}
            <svg className={`ml-1 transition-all duration-300 ${showFull && 'rotate-180'}`} width="9" height="7" viewBox="0 0 172 149" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M86 149L0.263502 0.499984L171.737 0.499999L86 149Z" fill="black"/>
            </svg>
          </button>
        }
      </div>
    
  )
}

export default ArticleListElement;