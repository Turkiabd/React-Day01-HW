
const CatPics = (cat) => {
  return(

    <div>
      <img src= {cat.catPic} alt ="catPic" />
      <h2> Name : {cat.catName}</h2>
      <p> Age : {cat.catAge}</p>

    </div>


  );
}

export default CatPics;