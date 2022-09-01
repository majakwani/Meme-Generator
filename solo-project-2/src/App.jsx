import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Card } from "../components/Card"
import data from '../components/data';

const cardData = data.map((card) => {
  return <Card 
  data = {card}
  star = "../src/Star.png"
  />
})

function App() {
 return (
  <div className="container">
    <Header />
    <Hero />
    <section className="cardContainer">
    {cardData}
    </section>
  </div>
 )
}

export default App
