import UpdateDetails from "./UpdateDetails";


function Presidents({presidents}){
    const presidentDetails = presidents.map((president)=>{
        return(
            <div key={president.id}>
                <img src={president.image} alt={president.name}/>
                <h3>{president.name}</h3>
                <p>Born on: {president.birthday}</p>
                <p>{president.number}th President of the United States</p>
                <UpdateDetails president={president}/>
            </div>
        )
    })
    return(
        <div>
            {presidentDetails}
        </div>
    )

}


export default Presidents;