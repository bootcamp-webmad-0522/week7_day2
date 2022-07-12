import './App.css'
import MoviesList from './components/MoviesList/MoviesList';
import ProjectsList from './components/ProjectsList/ProjectsList';
import SimpleList from './components/SimpleList/SimpleList';


function App() {
  return (
    <div className='App'>
      <MoviesList />
      <hr />
      <ProjectsList />
      <hr />
      <SimpleList />
    </div>
  );
}

export default App;
