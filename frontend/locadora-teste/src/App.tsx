import Header from './components/header/header'
import './app.css'
import NewMovieForm from "./components/new-movie-form/new-movie-form"
import MovieTable from './components/movie-table/movie-table'

function App() {

  return (
    <>
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900" rel="stylesheet" />
      </head>
      <Header />
      <p style={{textAlign:"center", fontWeight:"800", margin:"25px 0"}}>Gerenciamento de filmes</p>
      <div className='responsive-container'>
        <NewMovieForm />
        <MovieTable />
      </div>
    </>
  )
}

export default App