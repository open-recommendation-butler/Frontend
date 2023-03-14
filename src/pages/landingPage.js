import ProjectDescription from '../components/misc/projectDescription';
import SearchField from '../components/searchField/searchField';

function LandingPage() {
  return (
    <>
      <div className="container mx-auto px-3 h-[90vh] flex">
        <div className='my-auto w-full'>
          <h1 className="text-3xl font-bold text-center text-slate-800 mb-10">Find what feels missing</h1>
          <div className="max-w-xl mx-auto">
            <SearchField autoFocus={true} />
          </div>
        </div>
      </div>
      <ProjectDescription />
    </>
  );
}

export default LandingPage;
