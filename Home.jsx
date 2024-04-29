import React, { useState } from 'react'

function Home() {
    const [value, setValue] = useState("")
    const [result, setResult] = useState("")

    const handleSubmit = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const bodyData = {
            "email": value
        }

        try {
            const res = await fetch("http://localhost:4004/api/user/rankByEmail", {
                method: "POST",
                headers: myHeaders,
                body: bodyData
            })

            if(res) setResult(res.data)
        } catch(err) {
            throw err
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input id="email" name="email" onChange={(e) => setValue(e.target.value)} />
                <button type="submit">Submit</button>
            </form>

            <p>{result}</p>
        </>
    )
}

export default Home