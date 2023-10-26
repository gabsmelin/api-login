import Image from "next/image"
import Link from "next/link"
import './cabecalho.scss'

export default function Cabecalho() {
    return (
        <div className="container-cab">
            <p><Link href="/">Home</Link></p>
            <p><Link href="/tabela/queijo">Tabela de queijos</Link></p>
        </div>
    )
  }