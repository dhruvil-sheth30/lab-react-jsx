import './App.css';
function App(imgData) {
  const images = imgData.imgData;

  return (
    <div>
      <h1>Kalvium Gallary</h1>
      <div id='images'>
        {images.map((image) => (
          <img key={image.id} src={image.img} alt="" />
      ))}
      </div>
    </div>
  );
}

export default App;
