import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Button from "../../components/button";
import { Card } from "../../components/card";
import CardDoctor from "../../components/card/CardDoctor";
import Input from "../../components/input";
import Navbar from "../../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Doctor from "../../assets/doctor.png";
import BgCard from "../../assets/card-bg.png";
import { PreLoading } from "../../components/preloading";

const ListDoctor = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [dataById, setDataById] = useState({})
  const [filterData, setFilterData] = useState([])
  const [activeSidebar, setActiveSidebar] = useState(false)
  const [selectedItem, setSelectedItem] = useState('')

  const [search, setSearch] = useState({
    doctor: '',
    clinic: ''
  })


  const handleSelectedItem = (data) => {
    setSelectedItem(data.id_dokter)
    setDataById(data)
    handleSidebar()
  }

  const handleSidebar = () => {
    setActiveSidebar(!activeSidebar)
  }

  const handleSearch = (event) => {
    const { name, value } = event.target
    setSearch({
      ...search,
      [name]: value
    })
  }

  const handleSubmitSearch = () => {
    const result = data.filter(item => {
      if (search.doctor === '' && search.clinic === '') {
        return item
      } else if (search.doctor !== '' && search.clinic !== '') {
        return item.nama_dokter.toLowerCase().includes(search.doctor.toLowerCase()) && item.nama_poli.toLowerCase().includes(search.clinic.toLowerCase())
      } else if (search.doctor !== '' && search.clinic === '') {
        return item.nama_dokter.toLowerCase().includes(search.doctor.toLowerCase())
      } else if (search.doctor === '' && search.clinic !== '') {
        return item.nama_poli.toLowerCase().includes(search.clinic.toLowerCase())
      }
    })
    setFilterData(result)
  }

  useEffect(() => {
    setLoading(true)
    setData([
      {
        id_dokter: 1,
        nama_dokter: "Dr. Syachrul",
        email: "syachrul@gmail.com",
        alamat: "Jl. Buah Batu",
        no_telp: "085xxxxx",
        jenis_kelamin: "Laki-laki",
        id_poli: 1,
        nama_poli: "Poli Anak",
      },
      {
        id_dokter: 2,
        nama_dokter: "Dr. Deffin",
        email: "deffin@gmail.com",
        alamat: "Jl. Pajajaran",
        no_telp: "085xxxxx",
        jenis_kelamin: "Laki-laki",
        id_poli: 1,
        nama_poli: "Poli Jantung",
      },
    ])
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  useEffect(() => {
    setFilterData(data)
  }, [data, search.doctor && search.clinic])

  return (
    <div>
      {loading ? (
        <PreLoading title={'Jadwal Dokter'} />
      ) : (
        <>

          <Navbar theme={'dark'} activeMenu={false} />
          <div className="listDoctor">
            <div className="container">
              <div className="text-header">
                <span className="text-one">Jadwal Dokter</span>
              </div>

              <Card style={{ marginTop: 24, marginBottom: 24 }}>
                <div style={{ padding: '1rem', display: "flex", flexDirection: "row", gap: 20, }}>
                  <Input
                    icon={faSearch}
                    placeholder="Cari Nama Dokter"
                    name='doctor'
                    value={search.doctor}
                    onChange={handleSearch}
                    onCloseChange={() => {
                      setSearch({ doctor: '' })
                    }} />

                  <div className="divider"></div>

                  <Input
                    icon={faSearch}
                    placeholder="Cari Poli Klinik"
                    name='clinic'
                    value={search.clinic}
                    onChange={handleSearch}
                    onCloseChange={() => {
                      setSearch({ clinic: '' })
                    }} />

                  <div style={{ width: '50%' }}>
                    <Button label="Cari Sekarang" style={{ marginTop: 0, marginBottom: 0 }} onClick={handleSubmitSearch} />
                  </div>
                </div>
              </Card>

              <div className="row">
                {
                  filterData.map((value) =>
                    <CardDoctor data={value} onClick={() => handleSelectedItem(value)} styles={activeSidebar && selectedItem === value.id_dokter ? { transform: 'scale(1.1)', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', padding: '1rem' } : { padding: '1rem' }} />
                  )
                }
              </div>
            </div>


          </div>
          <SidebarDoctor activeSidebar={activeSidebar} onClose={() => setActiveSidebar(!activeSidebar)} data={dataById} />
        </>
      )}
    </div>
  );
};

export const SidebarDoctor = ({ activeSidebar, data, onClose }) => {
  return (
    <aside className="detailDoctor" style={activeSidebar ? { transform: 'translateX(0)' } : { transform: 'translateX(100%)' }}>
      <div>
        <div className="btn-close" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>

      <div style={{ marginTop: '50px' }}>
        <div className="carddoctor-head">
          <img src={BgCard} className="img-bg" alt="" />
          <img src={Doctor} className="img-doctor" alt="" style={{ width: '200px' }} />
        </div>

        <div className="carddoctor-body" style={{ marginTop: 20 }}>
          <span className="name">{data.nama_dokter}</span>
          <span className="desc">{data.nama_poli}</span>
        </div>
      </div>

      <div className="information">
        <div className="content">
          <span className="head">Alamat</span>
          <span className="body">{data.alamat}</span>
        </div>
        <div className="content">
          <span className="head">Email</span>
          <span className="body">{data.email}</span>
        </div>
        <div className="content">
          <span className="head">Nomer Telp</span>
          <span className="body">{data.no_telp}</span>
        </div>
        <div className="content">
          <span className="head">Jenis Kelamin</span>
          <span className="body">{data.jenis_kelamin}</span>
        </div>
      </div>
    </aside>
  )
}
export default ListDoctor;
