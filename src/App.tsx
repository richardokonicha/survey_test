import Header from './components/Header';
import Table from './components/Table';
import useFetch from './components/useFetch';
import Search from './components/Search';

function App() {
  const data = useFetch()
  return (
    <div className='bg-background min-h-screen'>
      <Header />
      <div className='mt-16 container mx-auto px-4 flex justify-center items-center min-h-fit '>
        <div>
          <Search />
          {data && <Table data={data} />}
        </div>
      </div>
    </div>
  );
}

export default App;
