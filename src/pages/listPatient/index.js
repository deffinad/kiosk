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

const ListPatient = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [dataById, setDataById] = useState({})
    const [search, setSearch] = useState({
        pasien: '',
    })
    const [activeSidebar, setActiveSidebar] = useState(false)
    const [selectedItem, setSelectedItem] = useState('')

    const handleSelectedItem = (data) => {
        setSelectedItem(data.medrek)
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
                email: "syahrul@gmail.com",
                alamat: "Jl. buah batu",
                no_telp: "085721350359",
            },
            {
                medrek: 2,
                nama_pasien: "Phonteka",
                email: "phonteka@gmail.com",
                alamat: "Jl. Pajajaran",
                no_telp: "085721350359",
            },
            {
                medrek: 3,
                nama_pasien: "Irenanda",
                email: "irenanda@gmail.com",
                alamat: "Jl. Pajajaran",
                no_telp: "085721350359",
            },
            {
                medrek: 4,
                nama_pasien: "Deffin",
                email: "deffinjr890@gmail.com",
                alamat: "Jl. Pajajaran",
                no_telp: "085721350359",
            },
        ])
        setTimeout(() => {
            setLoading(false)
        }, 3000)
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
                                            <tr onClick={() => handleSelectedItem(item)} style={activeSidebar && selectedItem === item.medrek ? { transform: 'scale(1.01)', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' } : null}>
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
                        <SidebarPatient activeSidebar={activeSidebar} onClose={() => setActiveSidebar(!activeSidebar)} data={dataById} />
                    </div>
                </>
            )}
        </div>
    );
}

const SidebarPatient = ({ activeSidebar, onClose, data }) => {
    useEffect(() => {
        console.log(data)
    }, [])
    return (
        <aside className="detailDoctor" style={activeSidebar ? { transform: 'translateX(0)' } : { transform: 'translateX(100%)' }}>
            <div>
                <div className="btn-close" onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>

            <div className="information" style={{ marginTop: 20 }}>
                <span style={{ fontSize: 20, marginBottom: 10, fontWeight: 'bold' }}>Data Pribadi</span>
                <div className="content">
                    <span className="head">Rekam Medis</span>
                    <span className="body">{data.medrek}</span>
                </div>
                <div className="content">
                    <span className="head">Nama Lengkap</span>
                    <span className="body">{data.nama_pasien}</span>
                </div>
                <div className="content">
                    <span className="head">Alamat</span>
                    <span className="body">{data.alamat}</span>
                </div>
                <div className="content">
                    <span className="head">Email</span>
                    <span className="body">{data.email}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <div className="content" style={{ flex: 1 }}>
                        <span className="head">Nomer Telp</span>
                        <span className="body">085xxxxx</span>
                    </div>
                    <div className="content" style={{ flex: 1 }}>
                        <span className="head">Jenis Kelamin</span>
                        <span className="body">Laki-laki</span>
                    </div>
                </div>

                <span style={{ fontSize: 20, marginTop: 20, marginBottom: 10, fontWeight: 'bold' }}>Data Pemeriksaan</span>
                <div className="content">
                    <span className="head">Tanggal Pemeriksaan</span>
                    <span className="body">2023/05/12</span>
                </div>
                <div className="content">
                    <span className="head">Nama Dokter</span>
                    <span className="body">Dr. Syahrul Ardiansyah</span>
                </div>
                <div className="content">
                    <span className="head">Diagnosa</span>
                    <span className="body">Kanker</span>
                </div>
                <div className="content">
                    <span className="head">Jaminan</span>
                    <span className="body">BPJS</span>
                </div>
                <div className="content">
                    <span className="head">Keterangan</span>
                    <span className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                </div>
                <div className="content">
                    <span className="head">Status</span>
                    <span className="body">Selesaikan administrasi</span>
                </div>
            </div>
        </aside>
    )
}

export default ListPatient
