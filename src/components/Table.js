import React, { useState, useEffect } from "react";
import { getList } from "../services/getList";
const Table = () => {
    const [tableData, updatedData] = useState([]);

    useEffect(() => {
        let dataLoad = true;
        getList().then((items) => {
            if (dataLoad) {
                updatedData(items);
            }
        });
        return () => (dataLoad = false);
    }, []);

    return (
        <div className="overFlow">
            <table>
                <tbody>
                    <tr>
                        <th>Company ID</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Content</th>
                    </tr>
                    {tableData.length &&
                        tableData.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
