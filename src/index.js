import React from 'react'
import ReactDOM from 'react-dom/client'

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL600_SR600,400_.jpg'
    alt='The Let Them Theory'
  />
)
const Title = () => <h2>The Let Them Theory</h2>
const Author = () => <h4>Mel RobbinsMel Robbins</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />) // need to close the bracket
