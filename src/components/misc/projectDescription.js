
function ProjectDescription() {
  return (
    <div className="container mx-auto px-3 mb-20 pb-20">
      <div className="grid md:grid-cols-3 gap-4 mb-40">
        <div className="bg-slate-100 rounded-xl p-6">
          <h4 className='font-bold mb-2'>Results that are worth reading</h4>
          <p>It takes time to find the information you are looking for. This solution is optimized on finding high quality information fast.</p>
        </div>
        <div className="bg-slate-100 rounded-xl p-6">
          <h4 className='font-bold mb-2'>Search without noise</h4>
          <p>Incredibly fast, this tool let's you access information that usually get lost. Orientation instead of redundany.</p>
        </div>
        <div className="bg-slate-100 rounded-xl p-6">
          <h4 className='font-bold mb-2'>Open source state-of-the-art AI tech</h4>
          <p>This solution is a privacy first search. It uses AI tech to improve the results - without depending on your data.</p>
        </div>
      </div>

      <div className="container max-w-3xl mx-auto px-2 mb-20 pb-20">
        <h3 className="text-2xl font-bold text-center mb-12">Increase page views and reader engagement<br />with an intuitive search experience</h3>
        <div class="grid grid-cols-8">

          <div className="font-bold text-2xl text-slate-600 border-b py-3">✓</div>
          <div className="font-bold text-xl col-span-2 border-b py-3 text-slate-600">Semantic Search</div>
          <div className="col-span-5 border-b py-3">Provide the results your audience is looking for no matter which synonym they use</div>


          <div className="font-bold text-2xl text-slate-600 border-b py-3">✓</div>
          <div className="font-bold text-xl col-span-2 border-b py-3 text-slate-600">Auto<wbr />complete</div>
          <div className="col-span-5 border-b py-3">Anticipate what your audience is searching for as they type</div>

          <div className="font-bold text-2xl text-slate-600 border-b py-3">✓</div>
          <div className="font-bold text-xl col-span-2 border-b py-3 text-slate-600">Topic Modeling</div>
          <div className="col-span-5 border-b py-3">Structure your search results with AI</div>

          <div className="font-bold text-2xl text-slate-600 border-b py-3">✓</div>
          <div className="font-bold text-xl col-span-2 border-b py-3 text-slate-600">Faceted Search</div>
          <div className="col-span-5 border-b py-3">Let your audience filter the results on custom attributes - e.g. podcasts, videos and articles.</div>

          <div className="font-bold text-2xl text-slate-600 border-b py-3">✓</div>
          <div className="font-bold text-xl col-span-2 border-b py-3 text-slate-600">Boosting</div>
          <div className="col-span-5 border-b py-3">Increase revenue by boosting specific content - e.g. paid articles.</div>

          <div className="font-bold text-2xl text-slate-600 py-3">✓</div>
          <div className="font-bold text-xl col-span-2 py-3 text-slate-600">Spell<wb />check</div>
          <div className="col-span-5 py-3">Don't let spelling mistakes prevent your audience from finding what they are looking for.</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 rounded-xl bg-slate-200">
        <div className="bg-slate-300 rounded-xl p-6 relative overflow-hidden">
          <h4 className='z-10 relative text-xl font-bold mb-4'>Explore search options for your media company</h4>
          <a href="https://calendly.com/matthias_meyer/30min" target="_blank" rel="noreferrer">
            <div 
              className="z-10 relative rounded-full bg-slate-800 text-white w-fit px-8 py-2 hover:bg-slate-900"
            >Get a demo</div>
          </a>
          <svg className="z-0 absolute right-0 -bottom-5 pointer-events-none" width="169" height="180" viewBox="0 0 477 448" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="184" cy="176" r="157" stroke="#e2e8f0" strokeWidth="55"/>
            <path d="M298 269L463.5 434.5" stroke="#e2e8f0" strokeWidth="55"/>
          </svg>
        </div>
        <div className="p-6 flex">
          <img className="rounded-xl w-40 h-40 mr-4" src={process.env.PUBLIC_URL + '/MatthiasMeyerPortrait.jpg'} alt="Potrait of Matthias Meyer" />
          <div className="">
            <h4 className=''>Your contact person:</h4>
            <p className='text-xl font-bold'>Matthias Meyer</p>
            <div className='flex items-center flex-wrap'>
              <a href="mailto:openrecommendationbutler@gmail.com?subject=Request%20for%20Open%20Recommendation%20Butler">
                <div 
                  className="mr-4 mt-3 rounded-full border border-2 border-slate-800 text-slate-800 w-fit px-6 py-2 hover:bg-slate-300"
                >Mail</div>
              </a>
              <a href="https://www.linkedin.com/in/matth-meyer/" target="_blank" rel="noreferrer" className="mt-3 text-slate-800 mr-4 underline hover:underline-offset-4">LinkedIn</a>
              <a href="https://twitter.com/Matth_Meyer" target="_blank" rel="noreferrer" className="mt-3 text-slate-800 underline hover:underline-offset-4">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDescription;