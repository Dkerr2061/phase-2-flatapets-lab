import { useState } from "react";

function Pet({petItem, onDeleteButton, onUpdatePet}){
    const [ displayPets, setDisplayPets ] = useState(false)
    const [ updatePetName, setUpdatePetName ] = useState('')

    function toggleAnimalType() {
        setDisplayPets(displayPets => !displayPets)
    }

    function handleNameChange(event) {
        event.preventDefault()
        onUpdatePet({name: updatePetName}, petItem.id)
    }

    function handleChange(event) {
        setUpdatePetName(event.target.value)
    }

    function handleAdoptButton() {
        onDeleteButton(petItem.id)
    }
    
    
    return (
        <li className="pet">
            <img onClick={toggleAnimalType} src={petItem.image} alt={petItem.name}/> 
            <h4 className={displayPets ? 'display-animal-type' : ''}>
                {displayPets ? petItem.animal_type : petItem.name}
            </h4>
            <p>
                {petItem.fromPetShop ? 'From a Pet Shop' : 'From the wild'}
            </p>
            <button className="adopt-button" onClick={handleAdoptButton}>Adopt</button>
            <form onSubmit={handleNameChange}>
                <input className="update-name" type="text" placeholder="Change pet name here" onChange={handleChange}/>
                <button>Update Name</button>
            </form>
        </li>
    );
}

export default Pet;