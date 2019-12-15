import React from 'react';
import PropTypes from 'prop-types';



const foods = [
  {
    id : 1,
    name : 'Kimchi',
    image : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.maangchi.com%2Fwp-content%2Fuploads%2F2019%2F11%2Fvegankimchi-insta.jpg&imgrefurl=https%3A%2F%2Fwww.maangchi.com%2Frecipe%2Fchaesik-kimchi&docid=1ZA_KLjvw9mQjM&tbnid=bQS-gPUYjeWqeM%3A&vet=10ahUKEwiDnr2HvLjmAhULfnAKHd7PCkQQMwiPAigAMAA..i&w=2500&h=2500&safe=off&bih=821&biw=1440&q=kimchi&ved=0ahUKEwiDnr2HvLjmAhULfnAKHd7PCkQQMwiPAigAMAA&iact=mrc&uact=8',
    rating : 5.0
  },
  {
    id : 2,
    name : 'Hamburger',
    image : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8f%2FNYC-Diner-Bacon-Cheeseburger.jpg%2F220px-NYC-Diner-Bacon-Cheeseburger.jpg&imgrefurl=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2F%25ED%2596%2584%25EB%25B2%2584%25EA%25B1%25B0&docid=s4j-ZFHTU3hORM&tbnid=eGXKudTqRhEhJM%3A&vet=10ahUKEwiBz9KQvLjmAhUPMd4KHejWD7IQMwjiASgBMAE..i&w=220&h=184&safe=off&bih=821&biw=1440&q=%ED%95%B4%EB%A9%89%EA%B1%B0&ved=0ahUKEwiBz9KQvLjmAhUPMd4KHejWD7IQMwjiASgBMAE&iact=mrc&uact=8',
    rating : 4.5
  },
  {
    id : 3,
    name : 'Kimbab',
    image : 'https://www.google.com/imgres?imgurl=http%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2016%2F04%2F08%2F1d26c0444e724bca8ed271b24da0057a1.jpg&imgrefurl=http%3A%2F%2Fwww.10000recipe.com%2Frecipe%2F6846151&docid=OEI7MIFWg2UAQM&tbnid=Xz3xQoYZw3bqEM%3A&vet=10ahUKEwjp9dOYvLjmAhWbfd4KHQeWAPwQMwjlASgAMAA..i&w=743&h=743&safe=off&bih=821&biw=1440&q=%EA%B9%80%EB%B0%A5&ved=0ahUKEwjp9dOYvLjmAhWbfd4KHQeWAPwQMwjlASgAMAA&iact=mrc&uact=8',
    rating : 3.2
  }];

function Food({name, image, rating}) {
  return(
    <div>
      <h3>I love {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name}/>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {
        foods.map(dish => (
          <Food 
          key={dish.id}
          name={dish.name}
          image={dish.image}
          rating={dish.rating}
          />
        ))
      }
    </div>
  );
}

export default App;
