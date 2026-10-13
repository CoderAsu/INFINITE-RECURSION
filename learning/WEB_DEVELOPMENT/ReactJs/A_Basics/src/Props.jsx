function Props(prop){

    let message;

    if(name && age){
        message = <p>Hello, I am {prop.name} and my age is {prop.age}</p>
    } else{
        message = <p>Hello, I am {prop.name} from {prop.country} and my age is {prop.age}</p>
    }

    return (
        <div>

            {message}

        </div>
    )
}

export default Props