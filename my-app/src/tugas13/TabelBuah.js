import React, {Component} from "react";
import './TabelBuah.css'

class Tabel extends Component {
  constructor(props){
      super(props)
      this.state ={
       dataHargaBuah :[
         {nama: "Semangka", harga: 10000, berat: 1000},
         {nama: "Anggur", harga: 40000, berat: 500},
         {nama: "Strawberry", harga: 30000, berat: 400},
         {nama: "Jeruk", harga: 30000, berat: 1000},
         {nama: "Mangga", harga: 30000, berat: 500}
       ],
       indexForm: -1,
       inputNama:"",
       inputHarga:"",
       inputBerat:""
      }

      this.handleChangeNama = this.handleChangeNama.bind(this);
      this.handleChangeHarga = this.handleChangeHarga.bind(this);
      this.handleChangeBerat = this.handleChangeBerat.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      this.handleHapus = this.handleHapus.bind(this);
  }

  handleChangeNama(event){
    this.setState({inputNama: event.target.value});
  }

  handleChangeHarga(event){
    this.setState({inputHarga: event.target.value});
  }

  handleChangeBerat(event){
    this.setState({inputBerat: event.target.value});
  }

  handleEdit(event){
    let index = event.target.value
    let nama = this.state.dataHargaBuah[index].nama
    let harga = this.state.dataHargaBuah[index].harga
    let berat = this.state.dataHargaBuah[index].berat


    this.setState({
      inputNama:nama,
      inputHarga:harga,
      inputBerat:berat,
      indexForm:index
    })
  }

  handleHapus(event){
    let index = event.target.value
    let newDaftarBuah = this.state.dataHargaBuah
    let editedDaftarBuah = newDaftarBuah[this.state.indexForm]
    newDaftarBuah.splice(index, 1)

    if (typeof editedDaftarBuah !== undefined){
      // array findIndex baru ada di ES6
      var newIndex = newDaftarBuah.findIndex((el) => el === editedDaftarBuah)
      this.setState({dataHargaBuah: newDaftarBuah, indexOfForm: newIndex})

    }else{

      this.setState({dataHargaBuah: newDaftarBuah})
    }

  }

  handleSubmit(event){
    event.preventDefault()

    let nama = this.state.inputNama;
    let harga = this.state.inputHarga;
    let berat = this.state.inputBerat;

    if (nama.replace(/\s/g,'') !== "" && harga.toString().replace(/\s/g,'') !== "" && berat.toString().replace(/\s/g,'') !== "" &&  isNaN(harga) === false  &&  isNaN(berat) === false ) {
      let newDaftarBuah = this.state.dataHargaBuah
      let index = this.state.indexForm

      if (index === -1){
        newDaftarBuah = [...newDaftarBuah, {nama:nama,berat:berat,harga:harga}]
      }else{
        newDaftarBuah[index].nama = nama
        newDaftarBuah[index].berat = berat
        newDaftarBuah[index].harga = harga
      }

      this.setState({
        dataHargaBuah: newDaftarBuah,
        inputNama: "",
        inputHarga: "",
        inputBerat: ""
      })
    }

  }

  render(){
    return (
      <>
      <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Harga</th>
          <th>Berat</th>
          <th>Aksi</th>
        </tr>
        </thead>


        <tbody>
        {
             this.state.dataHargaBuah.map((val, index)=>{
               return(
                 <tr key={index}>
                   <td>{index+1}</td>
                   <td>{val.nama}</td>
                   <td>{val.harga}</td>
                   <td>{val.berat} kg</td>
                   <td>
                        <button onClick={this.handleEdit}  value={index}>Edit</button>
                        <button onClick={this.handleHapus} value={index}>Delete</button>
                    </td>
                 </tr>
               )
             })
           }
        </tbody>
      </table>
      
        <h1>Form Daftar Buah</h1>
        <form onSubmit={this.handleSubmit}>
        <table>
          <tbody>
          <tr>
            <td>Nama Buah</td>
            <td><input type="text" value={this.state.inputNama} onChange={this.handleChangeNama}/></td>
          </tr>
          <tr>
            <td>Harga</td>
            <td><input type="text" value={this.state.inputHarga} onChange={this.handleChangeHarga}/></td>
          </tr>
          <tr>
            <td>Berat</td>
            <td><input type="text" value={this.state.inputBerat} onChange={this.handleChangeBerat}/></td>
          </tr>
          <tr >
            <td colspan="2"><button>Submit</button></td>
          </tr>

          </tbody>
          </table>
        </form>
        </>
    )
  }
}

export default Tabel
