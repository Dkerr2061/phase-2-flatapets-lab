import Pet from "./Pet";

function PetList({pet, onDeleteButton, onUpdatePet}){
    const displayPets = pet.map( petItem => {
        return <Pet key={petItem.id} petItem={petItem} onDeleteButton={onDeleteButton} onUpdatePet={onUpdatePet}/>
    })
    return (
        <ul className="pet-list">
            {displayPets}
        </ul>
    );
}

export default PetList;