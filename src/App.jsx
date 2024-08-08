import './App.css'

function App() {
  

  return (
    <>
      <div class="container">
        <Background />
        <Hero />
        <Category />
        <Menu />
        <Reservation />
        <Footer />
      </div>
    </>
  )
}

function Background() {
  return (
    <div className="background">
      <img src="images/hero-bg.png" alt="" />
    </div>
  )
}

function Hero() {
  return (
    <div className="hero">
    <img src="images/dine.svg" alt="dine-logo" />
    <h1>Exquisite dining 
    since 1989</h1>
    <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
    <a href="#">BOOK A TABLE</a>
  </div>
  )
}

function Category() {
  return (
    <div className="category">
    <div className="category-box">
      <div className="category-img">
        <img className="mobil" src="images/enjoy-place.png" />
        <img className="tablet" src="images/enjoy-place-tablet.png" alt="" />
        <img className="desktop" src="images/enjoy-place-desktop.png" alt="" />
      </div>
      <div className="category-text">
        <img className="path" src="images/line.png" alt="path" />
        <h2>Enjoyable place
        for all the family</h2>
        <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
      </div>
    </div>
    <div className="category-box row-reverse">
      <div className="category-img">
        <img className="mobil" src="images/localy-food.png" />
        <img className="tablet" src="images/localy-food-tablet.jpg" />
        <img className="desktop" src="images/local-food-desktop.png" alt="" />
        <img className="liner" src="images/liner.png" alt="" />
      </div>
      <div className="category-text">
        <img src="images/line.png" alt="path" />
        <h2>The most locally sourced food</h2>
        <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
      </div>
    </div>
  </div>
  )
}

function Menu(){
  return (
    <div className="menu">
      <div className="menu-content">

      <div className="menu-text-container">
        <img className="path" src="images/path.png" alt="" />

        <div className="menu-text">
          <h2>A few highlights from our menu</h2>
          <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
        </div>
      </div>
      <div className="menu-box-container">
        <div className="menu-box">

          <div className="menu-box-img">
            <img src="images/Seared-Salmon-Fillet.jpg"/>
            <img className="menu-path-img" src="images/menu-path.png" alt=""/>
          </div>

          <div className="menu-box-text">
            <h3>Seared Salmon Fillet</h3>
            <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
          </div>

        </div>

        <div className="menu-box">

          <div className="menu-box-img">
            <img src="images/Rosemary-Filet-Mignon.jpg"/>
            <img className="menu-path-img" src="images/menu-path.png" alt=""/>
          </div>

          <div className="menu-box-text">
            <h3>Rosemary Filet Mignon</h3>
            <p>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
          </div>

        </div>

        <div className="menu-box">

          <div className="menu-box-img">
            <img src="images/Summer-Fruit-Chocolate-Mousse.jpg"/>
            <img className="menu-path-img" src="images/menu-path.png" alt=""/>
          </div>

          <div className="menu-box-text">
            <h3>Summer Fruit Chocolate Mousse</h3>
            <p>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

function Reservation(){
  return(
    <div className="reservation">
    <h2>Ready to make a reservation?</h2>
    <a href="#">BOOK A TABLE</a>
  </div>
  )
}

function Footer(){
  return(
    <div className="footer">

      <div className="footer-box">
        <div className="footer-logo">
          <img src="images/dine.svg" alt="dine-logo" />
        </div>

        <div className="footer-location">
          <p>Marthwaite, Sedbergh</p>
          <p> Cumbria </p>
          <p> +00 44 123 4567</p>
        </div>

        <div class="footer-times">

          <p>OPEN TIMES </p>
          <p> MON - FRI: 09:00 AM - 10:00 PM </p>
          <p> SAT - SUN: 09:00 AM - 11:30 PM</p>
          
        </div>
      </div>
    </div>
  )
}


export default App
