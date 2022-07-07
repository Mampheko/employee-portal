import React, { useState, Fragment } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import data from "./mock-data.json";
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';

const App = () => {
const [lists, setLists] = useState(data);
const [addFormData, setAddFormData] = useState({
  Name: "",
  LastName: "",
  Email: "",
});

const [editFormData, setEditFormData] =useState({
  Name:"",
  LastName:"",
  Email:"",
});

const [editListId, setEditListId]  = useState(null);


const handleAddFormChange = (event) => {
  event.preventDefault();

  const fieldName = event.target.getAttribute('name');
  const fieldValue = event.target.value;

  const newFormData = {...addFormData};
  newFormData[fieldName] = fieldValue;

setAddFormData(newFormData);
};

const handleEditFormChange = (event) => {
  event.preventDefault();

  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;


  const newFormData = { ...editFormData };
  newFormData[fieldName] = fieldValue;

  setEditFormData(newFormData);
};

const handleAddFormSubmit =(event) => {
  event.preventDefault();

  const newList = {
    id: nanoid(),
    Name: addFormData.firstName,
    LastName: addFormData.LastName,
    Email: addFormData.Email,
  };

  const newLists = [...lists, newList];
  setLists(newLists);

};

const handleEditFormSubmit = (event) => {
  event.preventDefault();

  const editedList = {
    id: editListId,
    Name: editFormData.Name,
    LastName: editFormData.LastName,
    Email: editFormData.Email
  }

  const newLists = [...lists];

  const index = lists.findIndex((list) => list.id === editListId)

  newLists[index] = editedList;

  setLists(newLists);
  setEditListId(null)
};

const handleEditClick = (event, list) => {
  event.preventDefault();
  setEditListId(list.id);

  const formValues = {
    Name: list.Name,
    LastName: list.LastName,
    Email: list.Email,
  }
  setEditFormData(formValues);
};

const handleCancelClick = () => {
  setEditListId(null);
};

const handleDeleteClick = (editListId) => {
  const newLists = [...lists];

  const index = lists.findIndex((list) => list.id === editListId);

  newLists.splice(index, 1);

  setLists(newLists);
  setEditListId(null)
};

  return (
    <div className='app container'>
   
 
    <form onSubmit={handleAddFormSubmit}><fieldset>
    <legend>New Employee</legend>
    <div class ="form-group">
      <label for="title"></label>
    </div>

    <label for="Name">First Name:</label>
    <input type="text" name="firstName"
    id="firstName" onChange={handleAddFormChange}></input>

<label for="LastName">Last Name:</label>
    <input type="text" name="LastName"
    id="LastName" onChange={handleAddFormChange}>
    </input>

<label for="Email">Email:</label>
    <input type="email" name="Email"
    id="Email" onChange={handleAddFormChange}></input>

    <input type="submit" id="submit"
    value="Add Employee"></input>
      </fieldset>  
  </form> 
  <form onSubmit={handleEditFormSubmit}>
    
    <table>
      <thead>
      <h2>Employee List</h2>
        <tr>
        <th>Name</th>
        <th>LastName</th>
        <th>Email</th>
        <th>Actions</th>
        </tr>
    </thead>
    <tbody>
      {lists.map((list) => (
        <Fragment>
          {editListId === list.id ? (
          <EditableRow 
          editFormData={editFormData}
          handleEditFormChange={handleEditFormChange}
          handleCancelClick={handleCancelClick}
          /> 
      ):(
          <ReadOnlyRow
          list={list}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
 
          />
           )}
        </Fragment>
      ))}
    </tbody>
    </table>
    </form>

  </div>
   
 
)};

export default App;
