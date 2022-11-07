import config from '../config.json'

function HomePage() {
    return (
        <div>
            <Menu/>
            <Header/>
            <Timeline/>
        </div>
    )
  }
  
  export default HomePage

  function Menu(){
    return (
        <div>Menu</div>
    )
  }

  function Header(){
    return (
        <div>
            <img src="banner" />
            <img src={`https://github.com/${config.github}.png`} />
            {config.name}
            {config.job}
        </div>
    )
  }

  function Timeline(){
    return (
        <div>Timeline</div>
    )
  }