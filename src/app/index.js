import React, { Component } from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux"
import { Grid, Row, Col } from 'react-bootstrap'

import Header from '../containers/header'

import Customers from '../containers/customers'
import {fetchCustomers} from "../actions"

const Home = () => (
	<div>Home</div>
)


const Main = () => (
	<main>
		<Grid>
			<Row className="show-grid">
				<Col xs={12} md={12}>
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/customers' component={Customers}/>
					</Switch>
				</Col>
			</Row>
		</Grid>
	</main>
)


class App extends Component {
	componentDidMount () {
		this.props.fetchCustomers()
	}

	render () {
		return (
			<div>
				<Header />
				<Main />
			</div>
		)
	}
}


const mapDispatchToProps = {
	fetchCustomers
}


export default withRouter(connect(null, mapDispatchToProps)(App))