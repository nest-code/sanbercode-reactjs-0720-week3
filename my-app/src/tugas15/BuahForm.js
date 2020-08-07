import React, {useContext, useState} from "react"
import {BuahContext} from "./BuahContext"
import axios from "axios";

const BuahForm = () =>{

  const [
    dataHargaBuah, setDataHargaBuah,
    inputName, setInputName,
    inputPrice, setInputPrice,
    inputWeight, setInputWeight,
    selectedId, setSelectedId,
    statusForm, setStatusForm
  ] = useContext(BuahContext)

  const handleDelete = (event) => {
    let idBuah = parseInt(event.target.value)

    let newDataHargaBuah = dataHargaBuah.filter(item => item.id !== idBuah)
    axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
      .then(res=>{
        console.log(res);
      })

      setDataHargaBuah([...newDataHargaBuah])
  }


  const handleChange = (event) =>{
    let typeOfInput = event.target.name
    switch (typeOfInput) {
      case "inputName":
        {
          setInputName(event.target.value);
          break;
        }
      case "inputPrice":
      {
        setInputPrice(event.target.value);
        break;
      }
      case "inputWeight":
      {
        setInputWeight(event.target.value);
        break;
      }
      default:
      {break;}
    }
  }

  const handleSubmit = (event) =>{

    event.preventDefault()

    let name = inputName
    let price = inputPrice
    let weight = inputWeight

    if (name.replace(/\s/g,'') !== "" && price.toString().replace(/\s/g,'') !== "" && weight.toString().replace(/\s/g,'') !== ""){
      if (statusForm === "create"){
        axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight})
        .then(res => {
            setDataHargaBuah([...dataHargaBuah, {id: res.data.id, nama: name, harga: price, berat: weight}])
        })
      }else if(statusForm === "edit"){
        axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, {name, price, weight})
        .then(res => {
            let dataBuah = dataHargaBuah.find(el=> el.id === selectedId)
            dataBuah.nama = name
            dataBuah.harga = price
            dataBuah.berat = weight
            setDataHargaBuah([...dataHargaBuah])
        })
      }

      setStatusForm("create")
      setSelectedId(0)
      setInputName("")
      setInputPrice("")
      setInputWeight("")
    }
  }

  return(
    <>
      <div>
      <h1>Form Data Buah</h1>
      <form onSubmit={handleSubmit}>
        <table border= "1">
            <tbody>
            <tr>
                <td>Nama Buah</td>
                <td> 
                    <input name="inputName" type="text" value={inputName} onChange={handleChange}/>
                </td>
            </tr>
            <tr>
                <td>Harga</td>
                <td> 
                    <input name="inputPrice" type="text" value={inputPrice} onChange={handleChange}/>
                </td>
            </tr>
            <tr>
                <td>Berat</td>
                <td> 
                    <input name="inputWeight" type="text" value={inputWeight} onChange={handleChange}/>
                </td>
            </tr>
            <tr>
                <td colSpan="2"> <button >Submit</button></td>
            </tr>
            </tbody>
          </table>

      </form>
    </div>
    </>
  )

}

export default BuahForm
