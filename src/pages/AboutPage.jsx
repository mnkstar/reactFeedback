import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
  <Card>
   <div className="about">
      <h1>
        About this project
      </h1>
      <p>
        This is React app  to leave feedback or a product
      </p>
      <p>Versiob: 1.0.0</p>
      <p>
        <Link to='/'>Back to Home</Link>
      </p>

   </div>

  </Card>
  )
}

export default AboutPage
