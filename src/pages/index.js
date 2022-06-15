import React from 'react'
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Home = ({ data }) => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="site">
            <a href="base-index.html">
              <img src="/images/logo.svg" alt="ESSENTIALS" />
            </a>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="base-index.html">TOP</a></li>
              <li><a href="base-about.html">ABOUT</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="hero">
        <figure>
          <GatsbyImage 
            image={data.hero.childImageSharp.gatsbyImageData} 
            style={{ height: "100%" }}
            alt=""
          />
        </figure>
        <div className="catch">
          <h1>There is no love sincerer than<br /> the love of food.</h1>
          <p>食物を愛するよりも誠実な愛はない ― バーナード・ショー</p>
        </div>
        <div className="wave">
          <img src="/images/wave.svg" alt="" />
        </div>
      </section>
      <section className="food">
        <div className="container">
          <h2 className="bar">Food <span>Essence</span></h2>
          <div className="details">
            <div className="detail">
              <figure>
                <GatsbyImage 
                  image={data.fruit.childImageSharp.gatsbyImageData} 
                  style={{ height: "100%" }}
                  alt=""
                />
              </figure>
              <h3>フルーツ</h3>
              <p>FRUIT</p>
              <p>甘くてすっぱくておいしい果実たち。<br />旬のフルーツを満喫します。</p>
            </div>
            <div className="detail">
              <figure>
                <GatsbyImage 
                  image={data.grain.childImageSharp.gatsbyImageData} 
                  style={{ height: "100%" }}
                  alt=""
                />
              </figure>
              <h3>穀物</h3>
              <p>GRAIN</p>
              <p>食事の基本となる穀物。<br />毎日の活動のエネルギー源になります。</p>
            </div>
            <div className="detail">
              <figure>
                <GatsbyImage 
                  image={data.beverage.childImageSharp.gatsbyImageData} 
                  style={{ height: "100%" }}
                  alt=""
                />
              </figure>
              <h3>飲み物</h3>
              <p>BEVERAGE</p>
              <p>リラックスするのに欠かせない飲み物。<br />お気に入りの一杯はありますか？</p>
            </div>
          </div>
        </div>
      </section>
      <section className="photo">
        <h2 className="sr-only">Photo</h2>
        <figure>
          <GatsbyImage 
            image={data.berry.childImageSharp.gatsbyImageData} 
            style={{ height: "100%" }}
            alt=""
          />
        </figure>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="site">
            <a href="base-index.html">
              <img src="images/logo-w.svg" alt="ESSENTIALS" />
              <p>おいしい食材と食事を探求するサイト</p>
            </a>
          </div>
          <ul className="sns">
            <li>
              <a href="https://twitter.com/">
                <i className="fab fa-twitter" />
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/">
                <i className="fab fa-facebook-square" />
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <li>
              <a href="http://instagram.com/">
                <i className="fab fa-instagram" />
                <span className="sr-only">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export const query = graphql`
  query {
    hero: file(relativePath: {eq: "hero.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    fruit: file(relativePath: {eq: "fruit.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    grain: file(relativePath: {eq: "grain.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    beverage: file(relativePath: {eq: "beverage.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    berry: file(relativePath: {eq: "berry.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    pattern: file(relativePath: {eq: "pattern.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`


export default Home
