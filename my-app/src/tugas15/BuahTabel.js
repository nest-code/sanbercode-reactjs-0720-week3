import React, {useContext} from "react"
import {BuahContext} from "./BuahContext"
import axios from "axios"

const BuahTable = () =>{
  const [
  dataHargaBuah, setDataHargaBuah,
  inputName, setInputName,
  inputPrice, setInputPrice,
  inputWeight, setInputWeight,
  selectedId, setSelectedId,
  statusForm, setStatusForm] = useContext(BuahContext)

  const handleDelete = (event) => {
    let idBuah = parseInt(event.target.value)

    let newDataHargaBuah = dataHargaBuah.filter(item => item.id !== idBuah)
    axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
      .then(res=>{
        console.log(res);
      })

      setDataHargaBuah([...newDataHargaBuah])
  }
  const handleEdit = (event) =>{
    let idBuah = parseInt(event.target.value)
    let buah = dataHargaBuah.find(x=> x.id === idBuah)
    setInputName(buah.nama)
    setInputPrice(buah.harga)
    setInputWeight(buah.berat)
    setSelectedId(idBuah)
    setStatusForm("edit")
  }
  return(
    <>
    <div>
      <h1>Tabel Harga Buah</h1>
      <table id="tableBuah">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {dataHargaBuah !== null && dataHargaBuah.map((tab,index)=> {
          return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{tab.nama}</td>
              <td>{tab.harga}</td>
              <td>{tab.berat/1000} kg</td>
              <td>
                <button name = "buttonEdit" onClick={handleEdit} value={tab.id}>Edit</button>
                <button name = "buttonDelete" onClick={handleDelete} value={tab.id}>Delete</button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
    </>
  )

}

export default BuahTable
