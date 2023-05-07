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
  const [filterData, setFilterData] = useState([])
  const [activeSidebar, setActiveSidebar] = useState(false)
  const [selectedItem, setSelectedItem] = useState('')

  const [search, setSearch] = useState({
    doctor: '',
    clinic: ''
  })


  const handleSelectedItem = (id) => {
    setSelectedItem(id)
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
        id_poli: 1,
        nama_poli: "Poli Anak",
      },
      {
        id_dokter: 2,
        nama_dokter: "Dr. Deffin",
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
                    <CardDoctor data={value} onClick={() => handleSelectedItem(value.id_dokter)} styles={activeSidebar && selectedItem === value.id_dokter ? { transform: 'scale(1.1)', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', padding: '1rem' } : { padding: '1rem' }} />
                  )
                }
              </div>
            </div>


          </div>

          <aside className="detailDoctor" style={activeSidebar ? { transform: 'translateX(0)' } : { transform: 'translateX(100%)' }}>
            <div>
              <div className="btn-close" onClick={handleSidebar}>
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </div>

            <div style={{ marginTop: '50px' }}>
              <div className="carddoctor-head">
                <img src={BgCard} className="img-bg" alt="" />
                <img src={Doctor} className="img-doctor" alt="" style={{ width: '200px' }} />
              </div>

              <div className="carddoctor-body" style={{ marginTop: 20 }}>
                <span className="name">Dr. Syachrul Ardiansyah</span>
                <span className="desc">Poli Anak</span>
              </div>
            </div>

            <div className="information">
              <div className="content">
                <span className="head">Alamat</span>
                <span className="body">Jl. Moch Yunus Gg. Siti Salsah No. 7 Bandung</span>
              </div>
              <div className="content">
                <span className="head">Email</span>
                <span className="body">syachrul@gmail.com</span>
              </div>
              <div className="content">
                <span className="head">Nomer Telp</span>
                <span className="body">085xxxxx</span>
              </div>
              <div className="content">
                <span className="head">Jenis Kelamin</span>
                <span className="body">Laki-laki</span>
              </div>
              <div className="content">
                <span className="head">Jenis Kelamin</span>
                <span className="body">Laki-laki</span>
              </div>
            </div>
          </aside>
        </>
      )}
    </div>
  );
};

export default ListDoctor;
