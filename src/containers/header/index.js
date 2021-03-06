import React from 'react'
import { Navbar, Nav, NavItem  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => (
	<Navbar>
		<Navbar.Header>
			<LinkContainer to="/">
				<Navbar.Brand>
					Invoice App
				</Navbar.Brand>
			</LinkContainer>
		</Navbar.Header>
		<Nav>
			<LinkContainer to="/invoices">
				<NavItem eventKey={1}>Invoices</NavItem>
			</LinkContainer>
			<LinkContainer to="/products">
				<NavItem eventKey={2}>Products</NavItem>
			</LinkContainer>
			<LinkContainer to="/customers">
				<NavItem eventKey={3}>Customers</NavItem>
			</LinkContainer>
		</Nav>
	</Navbar>
)

export default Header