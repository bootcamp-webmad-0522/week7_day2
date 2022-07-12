const SimpleList = () => {

    const drinks = ['Coca-cola', 'Agua', 'Cervemocho', 'Jagger']

    return (
        <>
            <h1>Lista simple</h1>
            <ul>

                {
                    drinks.map((elm, idx) => {
                        return <li key={idx}>{elm}</li>
                    })
                }

            </ul>
        </>
    )
}

export default SimpleList