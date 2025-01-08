import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    author: 'Mel Robbins',
    title: 'The Let Them Theory',
    img: 'https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL600_SR600,400_.jpg',
  },
  {
    author: 'Eckhart Tolle',
    title: 'A New Earth',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71IiqoxaNhL._AC_UL600_SR600,400_.jpg',
  },
  {
    author: 'Martha Beck',
    title: 'Beyond Anxiety',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81kfZ4lt4FL._AC_UL600_SR600,400_.jpg',
  },
]

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author } = book
        return <Book img={img} title={title} author={author} />
      })}
    </section>
  )
}

const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />) // need to close the bracket
