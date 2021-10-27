import Item from "./Item.js"

const ItemList = (products) => {
  const items=products.products;
  return(
    <div className="products">
    { products.loading ? <h1>Loading...</h1> :
      items.map((p) => (
          <Item stock={p.stock} id={p.id} name={p.name} price={p.price} description={p.description} image={p.image}/>
        ))
    }
    </div>
  );
}

export default ItemList;

// [
//   {id: 1, name: "Pong", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "https://1z73q13h5gz932pdsz42u00q-wpengine.netdna-ssl.com/wp-content/uploads/2015/01/pong-videojuego-enfermedades-research.jpg"},
//   {id: 2, name: "Facebook", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png"},
//   {id: 3, name: "Super Mario Bros", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", image: "https://www5.minijuegosgratis.com/v3/games/thumbnails/222662_1.jpg"},
//   {id: 4, name: "Space Invaders", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", image: "https://i2.wp.com/hipertextual.com/wp-content/uploads/2020/08/hipertextual-guerra-mundos-y-star-wars-inspiraron-creador-clasico-videojuego-space-invaders-2020617006.jpg?fit=1200%2C800&ssl=1"},
//   {id: 5, name: "Pacman", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.", image: "https://cdn.pixabay.com/photo/2020/05/10/11/03/pacman-5153518_960_720.jpg"}
// ]
//
