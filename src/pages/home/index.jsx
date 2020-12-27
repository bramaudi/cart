import { m } from 'minite'
import './style.css'
import { liffLogin, liffOpenExternal } from '../../liff'
import vector from '../../assets/images/undraw_cooking_lyxy.png'
// import Link from '../../components/link'

if (liff.isLoggedIn()) {
	window.location.href = window.location.origin + '/#!/menu'
}

/** @jsx m */
export default () => {
	return {
		view: () => {
			return (
				<section>
					<h1>Selamat datang!</h1>
					<div style={{ 'padding-right': '5vw' }}>
						<p>Halo kak! yuk nyemil disini, nggak perlu ribet mikrin keluar rumah karena nanti kita yang antar.</p>
						<p>Sebelum itu sebaiknya kenalan dulu yuk biar kita tau namanya! cukup masuk pakai akun <strong>Line</strong> aja loh..</p>
					</div>
					<button className="masuk" onClick={liffLogin}>Masuk</button>
					<button className="external" onClick={() => liffOpenExternal(window.location)}>Buka di external browser</button>
					<img className="vector" src={vector} alt="Ilustrasi" />
				</section>
			)
		}
	}
}