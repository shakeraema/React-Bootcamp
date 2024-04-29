import React from 'react'

const User = ({img,name,age,hobbies,children}) => {
    return(
        <div>
            <img src={img} alt={name}/>
            <h1>{name}</h1>
            <div>
                <h3>Personal Information : </h3>
                <h4>Age : {age}  </h4>
                <h4>Hobbies: {hobbies.map((hobby,index) => (
                    <li key={index}>{index+1} -- {hobby}</li>
                ))}</h4>
                
                <h5>{children}</h5>
            </div>
        </div>
    )
}





const PropsTest = () => {
    return (
      <User 
          name="Shakera"
          img="https://www.istockphoto.com/vector/pottery-workshop-ceramics-vase-flower-pot-interior-character-potters-wheel-gm1340887184-420813181="
          age={22}
          hobbies={["Sleeping", "Drawing", "Singing"]}
      >
          <p>This paragraph is not included in props </p>

          <p>This is p2 </p>

          <h2>para 3</h2>
      </User>
    )
  }


export default propsTest
