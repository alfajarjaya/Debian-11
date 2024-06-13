import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import img_1 from '../assets/image/install/1.jpg';
import img_2 from '../assets/image/install/2.jpg';
import img_3 from '../assets/image/install/3.jpg';
import img_4 from '../assets/image/install/4.jpg';
import img_5 from '../assets/image/install/5.jpg';
import img_6 from '../assets/image/install/6.jpg';
import img_7 from '../assets/image/install/7.jpg';
import img_8 from '../assets/image/install/8.jpg';
import img_9 from '../assets/image/install/9.jpg';
import img_10 from '../assets/image/install/10.jpg';
import img_11 from '../assets/image/install/11.jpg';
import img_12 from '../assets/image/install/12.jpg';
import img_13 from '../assets/image/install/13.jpg';
import img_14 from '../assets/image/install/14.jpg';
import img_15 from '../assets/image/install/15.jpg';
import img_16 from '../assets/image/install/16.jpg';
import img_17 from '../assets/image/install/17.jpg';
import img_18 from '../assets/image/install/18.jpg';
import img_19 from '../assets/image/install/19.jpg';
import img_20 from '../assets/image/install/20.jpg';
import img_21 from '../assets/image/install/21.jpg';
import img_22 from '../assets/image/install/22.jpg';
import img_23 from '../assets/image/install/23.jpg';
import img_24 from '../assets/image/install/24.jpg';
import img_25 from '../assets/image/install/25.jpg';
import img_26 from '../assets/image/install/26.jpg';
import img_27 from '../assets/image/install/27.jpg';
import img_28 from '../assets/image/install/28.jpg';
import img_29 from '../assets/image/install/29.jpg';
import img_30 from '../assets/image/install/30.jpg';
import img_31 from '../assets/image/install/31.jpg';
import img_32 from '../assets/image/install/32.jpg';

const Install = () => {
    return (
        <div className='d-flex justify-content-center' id='cara-install'>
            <Container className='m-0'>
                <Row>
                    <ol className="list fs-3">
                        <Col>
                            <li className="list-item">
                                <p>Siapkan <q>applikasi virtualBox</q> dan <q>ISO Debian-11</q></p>
                                <div className="d-flex align-items-end " >
                                    <img src="https://www.nesabamedia.com/wp-content/uploads/2018/12/Virtualbox-logo-1.png" alt="VB" className='img-fluid' width={200} />
                                    <a href="https://www.virtualbox.org/wiki/Downloads" target='_blank' rel='noreferrer' className='fs-6'>Download di sini</a>
                                </div>
                                <div className="d-flex align-items-end mt-3">
                                    <img src="https://icon-library.com/images/iso-icon/iso-icon-29.jpg" alt="ISO" className='img-fluid' width={200} />
                                    <a href="https://www.debian.org/downloads" target='_blank' rel='noreferrer' className="fs-6">Download di sini</a>
                                </div>
                            </li>
                        </Col>
                        <Col>
                            <li className="list-items">
                                <p>Buka <q>VirtualBox</q> dan tekan tombol <q>New</q></p>
                                <img src={img_1} alt="VB New" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_1} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-items">
                                <p>Isi nama sesuai keinginan dan ubah tipe dan versi seperti gambar dibawah. lalu klik lanjut</p>
                                <img src={img_2} alt="Debian 11" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_2} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-items">
                                <p>Atur ukuran memori sesuai spesifikasi perangkat dan kebutuhan</p>
                                <img src={img_3} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_3} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-items">
                                <p>Pilih opsi <q>buat hardisk sekarang</q></p>
                                <img src={img_4} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_4} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Pilih opsi VHD(Virtual Hardisk)</p>
                                <img src={img_5} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_5} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Pilih opsi Dialokasikan secara dinamik</p>
                                <img src={img_6} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_6} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Tentukan lokasi virtual machine dan kapasitas harddisk. Kemudian klik "buat"</p>
                                <img src={img_7} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_7} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Setelah virtual machine dibuat, masukkan ISO Debian. Klik "pengaturan"</p>
                                <img src={img_8} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_8} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Klik "penyimpanan", lalu klik logo CD</p>
                                <img src={img_9} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_9} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Pilih file ISO yang sudah didownload, lalu klik "open"</p>
                                <img src={img_10} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_10} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Masuk kembali ke Pengaturan dan pilih opsi Jaringan. Di sini, kita perlu mengubah Adaptor 1 menjadi Adaptor Hanya-host agar dapat terbuka di browser. Sesudah itu, klik tombol OK.</p>
                                <img src={img_11} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_11} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Jalankan virtual machine, klik "start"</p>
                                <img src={img_12} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_12} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Pilih opsi "install" agar debian ber format CLI(Command Line Interface)</p>
                                <img src={img_13} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_13} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Pilih opsi "English" agar perintah berjalan dengan menggunakan bahasa Inggris</p>
                                <img src={img_14} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_14} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Pilih "Other" lalu "Asia" dan pilih "Indonesia" untuk menentukan lokasi</p>
                                <img src={img_15} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_15} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Pilih "American English"</p>
                                <img src={img_16} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_16} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Tunggu proses instalasi hingga selesai</p>
                                <img src={img_17} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_17} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Jangan hubungkan virtual machine dengan internet agar proses instalasi lebih cepat
                                    .Isi password root dan password user
                                </p>
                                <img src={img_18} alt="Install" className='img-fluid img cursor-pointer m-2' onClick={() => window.location.href = img_18} />
                                <img src={img_19} alt="Install" className='img-fluid img cursor-pointer m-2' onClick={() => window.location.href = img_19} />
                                <img src={img_20} alt="Install" className='img-fluid img cursor-pointer m-2' onClick={() => window.location.href = img_20} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Pilih zona waktu yang sesuai</p>
                                <img src={img_21} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_21} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Pada opsi Partition disk, pilih Guided - use entire disk dan tentukan disk yang digunakan untuk partisi. Lalu pilihPilihan partitioning scheme, pilih Separate /home, /var, and /tmo partitions.</p>
                                <img src={img_22} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_22} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Pilih Finish partitioning and write changes to disk.</p>
                                <img src={img_23} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_23} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Pilih opsi Yes pada Write the changes to disks.</p>
                                <img src={img_24} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_24} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Tunggu proses instalasi base system hingga selesai.
                                    Setelah itu Pilih opsi "no"</p>
                                <img src={img_25} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_25} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Pilih opsi "no" juga
                                </p>
                                <img src={img_26} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_26} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Pilih opsi "no"</p>
                                <img src={img_27} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_27} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Opsional</p>
                                <img src={img_28} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_28} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Pilih opsi "yes"</p>
                                <img src={img_29} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_29} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Klik opsi yang bawah pada halaman Device for boot loader installation</p>
                                <img src={img_30} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_30} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Klik "continue"</p>
                                <img src={img_31} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_31} />
                            </li>
                        </Col>
                        <Col>
                            <li className="list-item">
                                <p>Virtual machine Debian berhasil diinstal, kamu bisa login menggunakan username dan password username yang telah kamu masukkan pada proses penginstalan.</p>
                                <img src={img_32} alt="Install" className='img-fluid img cursor-pointer' onClick={() => window.location.href = img_32} />
                            </li>
                        </Col>
                    </ol>
                </Row>
            </Container>
        </div>
    )
}

export default Install;