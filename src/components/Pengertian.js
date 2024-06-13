import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../style/style.css";
import logoDebian from "../assets/image/debian-logo.png";

export default function HeroComp() {
    const webDebian = () => {
        window.open("https://www.debian.org/", "_blank");
    };

    return (
        <div className="mt-5 pt-5" id="pengertian">
            <Container>
                <Row className="flex-column">
                    <Col className="d-flex align-items-center justify-content-between my-5 border-bottom">
                        <h1>Langkah Langkah Menginstal DebianServer di Virtual Box</h1>
                        <img
                            src={logoDebian}
                            alt="Logo Debian 11"
                            width={100}
                            className="cursor-pointer"
                            onClick={webDebian}
                        />
                    </Col>
                    <Col>
                        <div>
                            <p>
                                Debian adalah salah satu distribusi sistem operasi Linux yang
                                populer dan sangat terkenal. Ini adalah proyek sumber terbuka
                                yang dibangun oleh sekelompok besar sukarelawan dari seluruh
                                dunia. Debian menonjol karena berfokus pada prinsip-prinsip
                                perangkat lunak bebas, stabilitas, dan keamanan.
                            </p>
                        </div>
                        <div>
                            <p>Beberapa ciri khas Debian adalah:</p>
                            <ul className="list">
                                <li className="list-item">
                                    <b>Sumber Terbuka:</b> Debian sepenuhnya berdasarkan perangkat
                                    lunak sumber terbuka. Ini berarti kode sumbernya dapat diakses
                                    oleh siapa saja untuk dianalisis, dimodifikasi, atau
                                    didistribusikan ulang.
                                </li>
                                <li className="list-item">
                                    <b>Siklus Rilis Stabil:</b> Debian dikenal dengan rilis
                                    stabilnya yang berfokus pada memberikan sistem operasi yang
                                    andal dan stabil kepada pengguna. Ini menjadikannya pilihan
                                    yang baik untuk server dan lingkungan produksi.
                                </li>
                                <li className="list-item">
                                    <b>Manajemen Paket APT:</b> Debian menggunakan Advanced
                                    Package Tool (APT) untuk mengelola paket perangkat lunak. Ini
                                    memungkinkan pengguna dengan mudah menginstal, menghapus, dan
                                    memperbarui perangkat lunak pada sistem Debian.
                                </li>
                                <li className="list-item">
                                    <b>Repository yang Luas:</b> Debian memiliki repositori
                                    perangkat lunak yang sangat luas yang mencakup ribuan paket
                                    berbeda, termasuk perangkat lunak aplikasi, perpustakaan, dan
                                    alat pengembangan.
                                </li>
                                <li className="list-item">
                                    <b>Beragam Arsitektur:</b> Debian mendukung beragam arsitektur
                                    perangkat keras, sehingga dapat diinstal di berbagai jenis
                                    komputer, dari PC biasa hingga perangkat seperti server,
                                    mainframe, atau embedded systems.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p>
                                Debian juga merupakan dasar bagi banyak distribusi Linux lainnya, termasuk Ubuntu. Debian adalah salah satu distribusi Linux tertua dan memiliki komunitas yang kuat di seluruh dunia yang terus mengembangkan dan memelihara distribusi ini.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
