
import './App.css';
import Cardlist from "./Cardlist"
import Header from './Header'
import Buttoninput from './Buttoninput'
import Footer from './Footer.jsx'
import Content from './Content'

function App() {
  return (
    <div>
      <Header
        text='Dev@Deakin' />
      <img src="./cute.jpg" className="img" />
      <h1> Featured Articles</h1>

      <Cardlist />
      <Buttoninput
        text=" See All Tutorials"

      />
      <Footer
        text='SIGN UP FOR DAILY INSIDER' />
      <Content />


    </div>
  );
}

export default App;
