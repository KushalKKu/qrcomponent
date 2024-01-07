import qrimg from './images/image-qr-code.png'
import './App.css';

function App() {
  return (
<>
<div className="container ">
<div className="card text-center" style={{width: "18rem"}}>
  <img src={qrimg} className="card-img-top" alt="qr-img"/>
  <div className="card-body">
    <h5 className="card-title ">Improve your front-end skills by building projects</h5>
    <p className="card-text"> Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
  </div>
</div>
</div>

</>
  );
}

export default App;
