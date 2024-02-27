import PetList from "./PetList";
import Search from './Search';
import NewPetForm from "./NewPetForm";
import { useState, useEffect } from "react";

function PetPage(){
 
    const [ pets, setPets ] = useState([])
    const [searchText, setSearchText] = useState("")

    const filteredPets = pets.filter(pet => {
         if(searchText === "") return true
        return pet.name.toLowerCase().includes(searchText.toLowerCase()) || pet.animal_type.toLowerCase().includes(searchText.toLocaleLowerCase)
    })

    useEffect(() => {
        fetch('http://localhost:4000/pets')
            .then(res => res.json())
            .then(petData => setPets(petData))
    }, [])

    function addPet(newPet) {
        fetch('http://localhost:4000/pets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...newPet})
        })
            .then(res => res.json())
            .then(newPetDAta => setPets([...pets, newPetDAta]))
    }
    
    function onSearch(event) {
        setSearchText(event.target.value)
    }

    function deleteButton(id) {
        fetch(`http://localhost:4000/pets/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if(res.ok) {
                    setPets((pets) => pets.filter(pet => {
                        return pet.id !== id
                    }))
                } else {
                    return alert('Cannot delete pet right now, try again later.')
                }
            })
    }

    function updatePet(updatedName, id) {
        fetch(`http://localhost:4000/pets/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedName)
        })
            .then(res => res.json())
            .then(newPetNameData => setPets(pets => pets.map(pet => {
                if(pet.id === newPetNameData.id) {
                    return newPetNameData
                } else {
                    return pet
                }
            })))
    }

    

    return (
        <main>
            <NewPetForm onAddPet={addPet}/>
            <Search searchText={searchText} onSearch={onSearch}/>
            <PetList pet={filteredPets} onDeleteButton={deleteButton} onUpdatePet={updatePet}/>
        </main>
    );
}

export default PetPage;