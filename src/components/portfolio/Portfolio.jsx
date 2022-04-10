import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/creative.png'
import IMG2 from '../../assets/chord.png'
import IMG3 from '../../assets/employee.png'
import IMG4 from '../../assets/Katopia.png'
import IMG5 from '../../assets/weather.png'
import IMG6 from '../../assets/tech.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'CREATIVE DEV - Developer blog and social networking platform.',
    github: 'https://github.com/tybant0427/creative_dev',
    demo: 'https://glacial-ravine-72346.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'CHORD BASE - Guitar instructing app, learn to play guitar chords.',
    github: 'https://github.com/tybant0427/Chord-Base',
    demo: 'https://amber-robeck.github.io/Chord-Base/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'EMPLOYEE SCHEDULING TOOL - Maintain and track employee availability.',
    github: 'https://github.com/tybant0427/Employee-Scheduling-Tool',
    demo: 'https://shrouded-anchorage-20681.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'KATOPIA RECORDS - React website for Katopia recording studio (in progress)',
    github: 'https://github.com/tybant0427/katopia_records',
    demo: ''
  },
  {
    id: 5,
    image: IMG5,
    title: 'WEATHER DASHBOARD - Check the weather anywhere in the world',
    github: 'https://github.com/tybant0427/weather-app',
    demo: 'https://tybant0427.github.io/weather-app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'TECH BLOG - A blog page to discuss the latest news  in the tech world.',
    github: 'https://github.com/tybant0427/tech-blog',
    demo: 'https://tech-blog-tybant.herokuapp.com/ '
  }
]




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio