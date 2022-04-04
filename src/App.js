import Dashboard from "./components/Dashboard";

function App() {
    const visitProfile = ()=>{
      window.location.href="https://www.frontendmentor.io/profile/kirtymeena"
    }
    const visitWebsite=()=>{
      window.location.href="https://www.frontendmentor.io/home"
    }
  return (
    <div className="App">
        <Dashboard/>
        <footer>
        <p>Challenge by <span onClick={visitWebsite}>Frontend Mentor</span>. Coded by <span onClick={visitProfile}>Kirty Meena</span></p>.
        </footer>
    </div>
  );
}

export default App;
