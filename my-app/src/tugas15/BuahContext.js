import React, { useState, createContext } from "react";
import axios from "axios"

export const BuahContext = createContext();

export const BuahProvider = props => {
  const [dataHargaBuah, setDataHargaBuah] = useState(null);
  const [inputName, setInputName] = useState("")
  const [inputPrice, setInputPrice] = useState("")
  const [inputWeight, setInputWeight] = useState("")
  const [selectedId, setSelectedId]  =  useState(0)
  const [statusForm, setStatusForm]  =  useState("create")
  if (dataHargaBuah === null){
    axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
      .then(res => {
        setDataHargaBuah(res.data.map(item=>{ return {id: item.id, nama: item.name, harga: item.price, berat: item.weight}} ))
      })
  }
  return (
    <BuahContext.Provider value={[
      dataHargaBuah, setDataHargaBuah,
      inputName, setInputName,
      inputPrice, setInputPrice,
      inputWeight, setInputWeight,
      selectedId, setSelectedId,
      statusForm, setStatusForm
    ]}>
      {props.children}
    </BuahContext.Provider>
  );
};