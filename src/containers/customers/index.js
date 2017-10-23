import React, { Component } from 'react'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import { Table, PageHeader, Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import request from 'superagent'

import { getCustomers } from '../../selectors'
import { fetchCustomers } from '../../actions'

class Customers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			modalDelete: false,
			createCustomerName: '',
			createCustomerPhone: '',
			createCustomerAddress: ''
		}

		this.closeModal = this.closeModal.bind(this)
		this.openModal = this.openModal.bind(this)
		this.deleteCustomer = this.deleteCustomer.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.createCustomer = this.createCustomer.bind(this)
	}

	openModal() {
		this.setState({ showModal: true });
	}

	closeModal() {
		this.setState({ showModal: false });
	}

	handleChange(e) {
		const id = e.target.id
		const key = id
		const stateObject = {}
		stateObject[key] = e.target.value
		this.setState(stateObject)
	}

	createCustomer() {
		const fetchCustomers = this.props.fetchCustomers
		request
			.post('/api/customers')
			.send({
				name: this.state.createCustomerName,
				address: this.state.createCustomerAddress,
				phone: this.state.createCustomerPhone
			}).end(function(err, res){
				if (err || !res.ok) {
				} else {
					fetchCustomers()
				}
			});
	}

	deleteCustomer(id) {
		const fetchCustomers = this.props.fetchCustomers
		request
			.del(`/api/customers/${id}`)
			.end(function(err, res){
				if (err || !res.ok) {
				} else {
					fetchCustomers()
				}
			});
	}

	renderCustomers(customer, index) {
		const {address, id, name, phone} = customer
		return (
			<tr key={index}>
				<td>{id}</td>
				<td>{name}</td>
				<td>{phone}</td>
				<td>{address}</td>
				<th><Button bsStyle="default" onClick={() => this.setState({modalDelete: true})}>Delete</Button></th>
			</tr>
		)
	}

	render () {
		const {customers} = this.props
 		return (
 			<div>
				<PageHeader>
					{`Customer list `}
					<Button bsStyle="default" onClick={this.openModal}>Create</Button>
				</PageHeader>
				<div className="modal-container" style={{minHeight: 500, position: 'relative'}}> 
					<Table hover>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>phone</th>
								<th>address</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{customers.map((customer, index) => this.renderCustomers(customer, index))}
						</tbody>
					</Table>

					<Modal
						show={this.state.modalDelete}
						container={this}
						aria-labelledby="contained-modal-title"
					>
						<Modal.Header closeButton>
							<Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
						</Modal.Body>
						<Modal.Footer>
							<Button onClick={() => this.setState({modalDelete: false})}>Close</Button>
						</Modal.Footer>
					</Modal>
				</div>

				<Modal show={this.state.showModal} onHide={this.closeModal}>
					<Modal.Header closeButton>
						<Modal.Title>Create customer</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form>
							<FormGroup controlId='createCustomerName'>
								<ControlLabel>Name</ControlLabel>
								<FormControl
									type="text"
									value={this.state.createCustomerName}
									onChange={this.handleChange}
								/>
							</FormGroup>
							<FormGroup controlId='createCustomerPhone'>
								<ControlLabel>Phone</ControlLabel>
								<FormControl
									type="text"
									value={this.state.createCustomerPhone}
									onChange={this.handleChange}
								/>
							</FormGroup>
							<FormGroup controlId='createCustomerAddress'>
								<ControlLabel>Address</ControlLabel>
								<FormControl
									type="text"
									value={this.state.createCustomerAddress}
									onChange={this.handleChange}
								/>
							</FormGroup>
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={() => {this.createCustomer(); this.closeModal()}}>Create</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	customers: getCustomers(state)
})

const mapDispatchToProps = {
	fetchCustomers
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Customers))