import '../assets/styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className='home__lineDiv'>
        <div>
          <h1>Never have a bad meal</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio dolorum enim pariatur. Est consequatur explicabo quia vero iusto. Aliquam fugit unde eveniet rerum accusantium minima ut excepturi dolores ipsa.</h3>
          <form className='home__input' action="">
            <input value={"Search for Restaurants..."} type="text" />
            <button>Search</button>
          </form>
        </div>

      </div>
      <div className='home__imageDiv'>
      </div>
    </div>
  )
}

export default Home