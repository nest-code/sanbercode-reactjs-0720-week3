import React, {useState, useEffect} from 'react';
import axios from "axios";
import './TabelBuah.css'

const TableBuah = () => {
    const [dataHargaBuah, setDataHargaBuah] = useState(null)
    
    const [inputName, setInputName]      = useState("")
    const [inputPrice, setInputPrice]    = useState("")
    const [inputWeight, setInputWeight]  = useState("")
    const [selectedId, setSelectedId]    = useState(0)
    
    const [statusForm, setStatusForm]    = useState("create")

    useEffect( () => {
        if (dataHargaBuah === null){
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
            setDataHargaBuah(res.data.map(item=>{ return {id: item.id, nama: item.name, harga: item.price, berat: item.weight}} ))
            })
        }
    }, [dataHargaBuah])

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

    return (
        <>
    <div>
        <h1>Tabel Harga Buah</h1>
        <table border="1">
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
                        <button name = "buttonEdit"   onClick={handleEdit} value={tab.id}>Edit</button>
                        <button name = "buttonDelete" onClick={handleDelete} value={tab.id}>Delete</button>
                    </td>
                </tr>
            )
            })}
            </tbody>
        </table>
    </div>


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
export default TableBuah;
