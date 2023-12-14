import NoteList from '../components/NoteList';
import NoteDetail from '../components/NoteDetail';

const Home: React.FC<any> = () => {
  return (
    <div className='flex-row'>
      <NoteList />
      <NoteDetail />
    </div>
  );
};
export default Home;