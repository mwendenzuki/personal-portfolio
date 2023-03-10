import { Container, Row, Col} from 'react-bootstrap'
import { MailchimpForm } from './MailchimpForm'

import logo from '../assets/images/logo.svg'
import navIcon1 from '../assets/images/nav-icon1.svg'
import navIcon2 from '../assets/images/nav-icon2.svg'
import navIcon3 from '../assets/images/nav-icon3.svg'

export const Footer = () => {
  return (
	<footer className="footer">
		<Container>
			<Row className="align-items-center"> 
				<MailchimpForm />
				<Col size={12} sm={6}>
					<img src={logo} alt="Logo"/>
				</Col>
				<Col sm={6} className="text-center text-sm-right">
					<div className="social-icon">
						<a href="/"><img src={navIcon1} alt="" /></a>
						<a href="/"><img src={navIcon2} alt="" /></a>
						<a href="/"><img src={navIcon3} alt="" /></a>
					</div>
					<p>Copyright 2022. All Rights Reserved by dede.</p>
				</Col>
			</Row>
		</Container>
	</footer>
  )
}
