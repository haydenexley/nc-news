const Header = ({user: [userData] = []}) => {
  if (userData){
    return (
    <div>
        <h1 id="header-title">NC NEWS</h1>
        <h2>Hi there, {userData.name}</h2>
      </div>
    )
  } else {
    return (
      <div>
        <h1 id="header-title">NC NEWS</h1>
      </div>
    )
  }

}

export default Header
