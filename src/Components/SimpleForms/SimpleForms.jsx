

const SimpleForms = () => {

    const handaleSubmit= e =>{
        e.preventDefault()
        console.log(e.target.name.value)

        console.log(e.target.email.value)

        console.log('from submited')
    }

    return (
        <div>
            <form onSubmit={handaleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="text" name="phone" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForms;