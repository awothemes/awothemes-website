import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container mx-auto">
     <header>
        <div><a href="#">AwoThemes</a></div>
        <nav>
          <ul>
            <li>Solutions</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <nav>
          <a href='#'>Join</a>
          <a href='#'>Sign UP</a>
        </nav>
     </header>
     <section>
      <div>
        <h1>SaaS Delivery Management Software</h1>
        <p>Track and optimize routes in real-time</p>
        <nav>
          <a href='#'>Get Started</a>
          <a href='#'>Watch how it works</a>
        </nav>
      </div>
      <div>
        <img src="imgs/hero-img.png"/>
      </div>
     </section>
     <section>
      <img src="imgs/logos.png"/>
     </section>
     <section>
      <h2>Solutions for every delivery</h2>
      <ul>
        <li>
          <img src='imgs/food.png'/>
          <h5>Food</h5>
          <p>Leverage agile frameworks provide a robust synopsis  high level overviews. </p>
        </li>
        <li>
          <img src='imgs/grocery.png'/>
          <h5>Grocery</h5>
          <p>Bring to the table win-win survival strategies to ensure proactive domination.</p>
        </li>
        <li>
          <img src='imgs/courier.png'/>
          <h5>Courier</h5>
          <p> Organically grow the holis world view of disruptive innovation via workplace.</p>
        </li>
        <li>
          <img src='imgs/logistics.png'/>
          <h5>Logistics</h5>
          <p>Nanotechnology immers along the information highway will close the loop .</p>
        </li>
      </ul>
     </section>
     <section>
      <h2>Delivery Business Interfcaes</h2>
      <div>
        <ul>
          <li>
            <a href='#'>Dashboard</a>
          </li>
          <li>
            <a href='#'>Customer App</a>
          </li>
          <li>
            <a href='#'>Agent App</a>
          </li>
        </ul>
        <div><img src='imgs/product-showcase.png'/></div>
        <div><img src='imgs/product-showcase.png'/></div>
        <div><img src='imgs/product-showcase.png'/></div>
      </div>
     </section>
     <section>
      <h2>All in one proof for final mile delivery solutions </h2>
      <ul>
        <li>
          <img src='imgs/solutions-icon-1.png'/>
          <h5>Real-time tracking</h5>
          <p>By adopting real time delivery tracking software, final mile delivery management has become easier.</p>
        </li>
        <li>
          <img src='imgs/solutions-icon-2.png'/>
          <h5>Proof of Delivery</h5>
          <p>The system works with the electronic and digital signatures of the recipient on receiving the delivery item.</p>
        </li>
        <li>
          <img src='imgs/solutions-icon-3.png'/>
          <h5>Real-time tracking</h5>
          <p>By adopting real time delivery tracking software, final mile delivery management has become easier.</p>
        </li>
      </ul>
     </section>
     <section>
      <h2>Frequently Asked Questions</h2>
      <div>
        <div>
          <div>What is SaaS?</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div>
          <div>What is SaaS?</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div>
          <div>What is SaaS?</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div>
          <div>What is SaaS?</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div>
          <div>What is SaaS?</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
     </section>
     <section>
      <h2>Advanced Fleet Tracking Solution Tracker</h2>
      <nav>
        <a href='#'>Get Started</a>
        <a href='#'>Watch how it works</a>
      </nav>
     </section>
     <footer>
     <div>
     <div>
          <a href="#">AwoThemes</a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div>
          <h5>Product</h5>
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Support</h5>
          <ul>
            <li>
              <a href="#">Support center</a>
            </li>
            <li>
              <a href="#">System status</a>
            </li>
            <li>
              <a href="#">Languages</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Follow us</h5>
          <ul>
            <li>
              <a href="#"><img  src='imgs/icon-fb.svg'/></a>
            </li>
            <li>
              <a href="#"><img  src='imgs/icon-tw.svg'/></a>
            </li>
            <li>
              <a href="#"><img  src='imgs/icon-instagram.svg'/></a>
            </li>
          </ul>
        </div>
     </div>
        <div>
          <div>© 2022 Saas</div>
          <div>Terms & Conditions | Privacy Policy</div>
        </div>
     </footer>
    </div>
  )
}
