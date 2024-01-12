import { useState, useEffect } from "react";

function Contact() {
    const [data1, setData1] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://dummyjson.com/users");
                const data = await response.json();
                setData1(data.users);
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>Age</th>
                    </tr>
                    {data1.map((item, i) => (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.age}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Contact
