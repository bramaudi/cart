import { m } from 'minite'
import './style.css'
import vector from '../../assets/images/undraw_cooking_lyxy.svg'
import Link from '../../components/link'

/** @jsx m */
const Home = () => {
	return (
		<section>
			<h1>Selamat datang!</h1>
			<div style={{ 'padding-right': '5vw' }}>
				<p>Halo kak! yuk nyemil disini, nggak perlu ribet mikrin keluar rumah karena nanti kita yang antar.</p>
				<p>Sebelum itu sebaiknya kenalan dulu deh biar nanti kita bisa mabar bro, yahaha hayuukk! cukup masuk lewat tombol <strong>Masuk</strong> aja loh yahaha..</p>
			</div>
			<Link className="masuk" url="/menu">Masuk</Link>
			<img className="vector" src={vector} alt="Ilustrasi" />
		</section>
	)
}

export default Home
