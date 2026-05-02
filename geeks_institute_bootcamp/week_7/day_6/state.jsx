function SessionBrewCounter() {
    const [brewCount, setBrewCount] = useState(0);
  
    function onBrewComplete() {
      setBrewCount(prev => prev + 1);
    }
  
    return (
      <p>Coffees brewed this session: {brewCount}</p>
    );
  }