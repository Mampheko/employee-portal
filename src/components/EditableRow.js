import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                <input
                type="text"
                required="required"
                placeholder="FirstName"
                name="Name"
                value={editFormData.Name}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="LastNmae"
                name="LastName"
                value={editFormData.LastName}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                type="email"
                required="required"
                placeholder="Email"
                name="Email"
                value={editFormData.Email}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                    Cancel
                    </button>
            </td>
        </tr>
    );
};

export default EditableRow