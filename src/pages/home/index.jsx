import { m } from 'minite'
import './style.css'
import vector from '../../assets/images/undraw_cooking_lyxy.png'
import Link from '../../components/link'

/** @jsx m */
export default () => {
	return (
		<section>
			<h1>Selamat datang!</h1>
			<p>Halo kak! yuk nyemil disini, nggak perlu ribet mikrin keluar rumah karena nanti kita yang antar.</p>
			<p>Sebelum itu sebaiknya kenalan dulu yuk biar kita tau namanya! cukup masuk pakai akun <strong>Line</strong> aja loh..</p>
			<Link className="masuk" url="/menu">Masuk</Link>
			<img className="vector" src={vector} alt="Ilustrasi" />
		</section>
	)
}