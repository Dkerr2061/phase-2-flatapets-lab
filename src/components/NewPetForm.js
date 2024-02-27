import { useState } from "react";

function NewPetForm({onAddPet}) {
  const [ newPet, setNewPet ] = useState({
    name: '',
    image: '',
    animal_type: '',
    fromPetShop: 'true'
  })

  
  function updatePetData(event) {
    setNewPet({...newPet, [event.target.name]: event.target.value})
  }
  
  function handleSubmit(event) {
    event.preventDefault()

    if(newPet.fromPetShop === 'true') {
      return  onAddPet({...newPet, fromPetShop: true})
    } else{
      return  onAddPet({...newPet, fromPetShop: false})
    }
  }

  




  return (
    <div className="new-pet-form">
      <h2>New Pet</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={updatePetData} type="text" name="name" placeholder="Pet name" value={newPet.name}/>
        <input onChange={updatePetData} type="text" name="image" placeholder="Image URL" value={newPet.image}/>
        <input onChange={updatePetData} type="text" name="animal_type" placeholder="Animal type" value={newPet.animal_type}/>
        <select name="fromPetShop" value={newPet.fromPetShop} onChange={updatePetData}>
          <option value="true">From a Pet Shop</option>
          <option value="false">From the wild</option>
        </select>
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}
  
  export default NewPetForm;