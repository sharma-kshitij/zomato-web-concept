import '../assets/styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className='home__lineDiv'>
        <div>
          <h1>Never have a bad meal</h1>
          <button className='home__seeAll'>
            <a href="/all-restaurants">See All Restaurants</a>
          </button>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio dolorum enim pariatur. Est consequatur explicabo quia vero iusto. Aliquam fugit unde eveniet rerum accusantium minima ut excepturi dolores ipsa.</h3>
          <form className='home__input' action="">
            <input placeholder="Search" type="text" />
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home