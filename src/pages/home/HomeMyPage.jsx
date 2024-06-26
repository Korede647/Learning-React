

const MyPage = () => {
    let name = "Korede";

  return (
    
    <div>
      <h1>My Darling Pearl</h1>
      {name ? <h2>Hello Dear {name}</h2> : <h2>Hey there</h2>}
    </div>
  )
}



export default MyPage;