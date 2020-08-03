import React from 'react'
import './HargaBuah.css'

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]

class HargaBuah extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1>Tabel Harga Buah</h1>
          <div>
            <table>
              <th className='Nama'> Nama</th>
              <th className='Harga'> Harga</th>
              <th className='Berat'> Berat</th>

              {dataHargaBuah.map(buah => {
                return (
                  <tr>
                    <td className='Nama'>{buah.nama}</td>
                    <td className='Harga'>{buah.harga}</td>
                    <td className='Berat'>{buah.berat / 1000} kg</td> 
                  </tr>
                )
              })}
            </table>
          </div>
        </div>
      </>
    )
  }
}




export default HargaBuah
