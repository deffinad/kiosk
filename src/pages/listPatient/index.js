import React from 'react'
import { useState } from 'react'
import { PreLoading } from '../../components/preloading'
import Navbar from '../../components/navbar'
import { useEffect } from 'react'
import { Card } from '../../components/card'
import Input from '../../components/input'
import Doctor from "../../assets/doctor.png";
import BgCard from "../../assets/card-bg.png";
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../components/button'
import CardDoctor from '../../components/card/CardDoctor'

const ListPatient = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])

    const [search, setSearch] = useState({
        pasien: '',
    })

    const [activeSidebar, setActiveSidebar] = useState(false)
    const [selectedItem, setSelectedItem] = useState('')

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
            if (search.pasien === '') {
                return item
            } else {
                return item.nama_pasien.toLowerCase().includes(search.pasien.toLowerCase())
            }
        })
        setFilterData(result)
    }

    useEffect(() => {
        setLoading(true)
        setData([
            {
                medrek: 1,
                nama_pasien: "Syachrul",
                alamat: "Jl. buah batu",
                no_telp: "085721350359",
            },
            {
                medrek: 2,
                nama_pasien: "Phonteka",
                alamat: "Jl. Pajajaran",
                no_telp: "085721350359",
            },
            {
                medrek: 3,
                nama_pasien: "Irenanda",
                alamat: "Jl. Pajajaran",
                no_telp: "085721350359",
            },
            {
                medrek: 4,
                nama_pasien: "Deffin",
                alamat: "Jl. Pajajaran",
                no_telp: "085721350359",
            },
        ])
        setTimeout(() => {
            setLoading(false)
        }, 0)
    }, [])

    useEffect(() => {
        setFilterData(data)
    }, [data, search.pasien])

    return (
        <div>
            {loading ? (
                <PreLoading title={'List Pasien'} />
            ) : (
                <>

                    <Navbar theme={'dark'} activeMenu={false} />
                    <div className="listPatient">
                        <div className="container">
                            <div className="text-header">
                                <span className="text-one">List Pasien</span>
                            </div>

                            <Card style={{ marginTop: 24, marginBottom: 24 }}>
                                <div style={{ padding: '1rem', display: "flex", flexDirection: "row", gap: 20, }}>
                                    <Input
                                        icon={faSearch}
                                        placeholder="Cari Nama Pasien"
                                        name='pasien'
                                        value={search.pasien}
                                        onChange={handleSearch}
                                        onCloseChange={() => {
                                            setSearch({ pasien: '' })
                                        }} />
                                    <div style={{ width: '25%' }}>
                                        <Button label="Cari Sekarang" style={{ marginTop: 0, marginBottom: 0 }} onClick={handleSubmitSearch} />
                                    </div>
                                </div>
                            </Card>

                            <div className='table'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Rekam Medis</th>
                                            <th>Nama</th>
                                            <th>Alamat</th>
                                            <th>No.Telp</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {filterData.map(item => (
                                            <tr onClick={() => handleSelectedItem(item.medrek)} style={activeSidebar && selectedItem === item.medrek ? { transform: 'scale(1.01)', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' } : null}>
                                                <td>{item.medrek}</td>
                                                <td>{item.nama_pasien}</td>
                                                <td>{item.alamat}</td>
                                                <td>{item.no_telp}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
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
}

export default ListPatient
