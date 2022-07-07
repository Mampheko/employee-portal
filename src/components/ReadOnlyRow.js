import React  from "react";

const ReadOnlyRow = ({ list, handleEditClick, handleDeleteClick }) => {
    return(
        <tr>
        <td>{list.Name}</td>
        <td>{list.LastName}</td>
        <td>{list.Email}</td>
        <td>
            <button type="button"
             onClick={(event) => handleEditClick(event, list)}
            >
                Edit
                </button>
                <button type="button"
                 onClick={(event) => handleDeleteClick(list.id)}>
                    Delete
                    </button>
        </td>
       </tr>
    );
};


export default ReadOnlyRow;
