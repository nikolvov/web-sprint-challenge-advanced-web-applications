import React, { useEffect, useState } from "react";
import { fetchColorService } from '../services/fetchColorService'

import Color from './Color';
import EditMenu from './EditMenu';

const ColorList = (props) => {
  const { colors, editing, toggleEdit, saveEdit, deleteColor } = props;
  const [ editColor, setEditColor] = useState({ color: "", code: { hex: "" }});

  useEffect(() => {
    fetchColorService()
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="colors-wrap">
      <p id="color_title">colors</p>
      <ul>
        {colors.map(color => <Color key={color.id} setEditColor={setEditColor} color={color} toggleEdit={toggleEdit} deleteColor={deleteColor}/>)}
      </ul>
      
      {editing && <EditMenu editColor={editColor} setEditColor={setEditColor} toggleEdit={toggleEdit} saveEdit={saveEdit}/>}
    </div>
  );
};

export default ColorList;