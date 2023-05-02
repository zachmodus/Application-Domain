import React from "react";
import {Button, Modal, InputGroup, Form} from "react-bootstrap";
import {ref, set, get, update, remove, child} from 'firebase/database';
import StartFirebase from "../firebase";

const db = StartFirebase();

export class CrudPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mode:'',
            isOpen: false,
            record: {
                ID: props.id,
                name: props.record.name,
                number: props.record.number,
                description: props.record.description,
                normalSide: props.record.normalSide,
                category: props.record.category,
                subcategory: props.record.subcategory,
                balance: props.record.balance,
                credit: props.record.credit,
                debit: props.record.debit,
                curBalance: props.record.curBalance,
                date: props.record.date,
                user: props.record.user,
                order: props.record.order,
                statement: props.record.statement,
                comment: props.record.comment
            },
            modID:'',
            modName:'',
            modNumber: '',
            modDescription:'',
            modNormalSide: '',
            modCategory: '',
            modSubcategory: '',
            modBalance: '',
            modCredit: '',
            modDebit: '',
            modCurBalance: '',
            modDate: '',
            modUser: '',
            modOrder: '',
            modStatement: '',
            modComment: ''
        }
    }
        render(){
            return(
                
                <>
                   <Button variant='primary' className="ms-2" onClick={this.openModal('add')}>Add record</Button> 

                <Button variant='primary' className="ms-2" onClick={this.openModal('edit')}>Edit record</Button>
                
                <Modal show={this.state.isOpen}>
                    <Modal.Header>
                        <Modal.Title>{(this.state.mode=='add')? 'Add New Record': 'Edit Record'}</Modal.Title>
                    <Button size='sm' variant='dark' onClick={() => this.closeModal()}>X</Button>
                    </Modal.Header>
                    <Modal.Body>

                        <InputGroup>
                        <InputGroup.Text>Account Name</InputGroup.Text>
                        <Form.Control
                         value = {this.state.modName}
                         onChange = {e => {this.setState({modName: e.target.value})}}
                         
                         />
                        </InputGroup>

                        <InputGroup>
                        <InputGroup.Text>Account Number</InputGroup.Text>
                        <Form.Control
                         value = {this.state.modNumber}
                         onChange = {e => {this.setState({modNumber: e.target.value})}}
                         disabled = {(this.state.mode != 'add')}
                         />
                        </InputGroup>

                        <InputGroup>
                        <InputGroup.Text>Account Description</InputGroup.Text>
                        <Form.Control
                         value = {this.state.modDescription}
                         onChange = {e => {this.setState({modDescription: e.target.value})}}
                         
                         />
                        </InputGroup>

                        <InputGroup>
                        <InputGroup.Text>Normal Side</InputGroup.Text>
                        <Form.Control
                         value = {this.state.modNormalSide}
                         onChange = {e => {this.setState({modNormalSide: e.target.value})}}
                         
                         />
                        </InputGroup>

                        <InputGroup>
                        <InputGroup.Text>Account Category</InputGroup.Text>
                        <Form.Control
                         value = {this.state.modCategory}
                         onChange = {e => {this.setState({modCategory: e.target.value})}}
                         
                         />
                        </InputGroup>

                        <InputGroup>
                        <InputGroup.Text>Account SubCategory</InputGroup.Text>
                        <Form.Control
                         value = {this.state.modSubcategory}
                         onChange = {e => {this.setState({modSubcategory: e.target.value})}}
                         
                         />
                        </InputGroup>

                        <InputGroup>
                        <InputGroup.Text>Initial Balance</InputGroup.Text>
                        <Form.Control
                         value = {this.state.modBalance}
                         onChange = {e => {this.setState({modBalance: e.target.value})}}
                         
                         />
                        </InputGroup>

                        <InputGroup>
                        <InputGroup.Text>Debit</InputGroup.Text>
                        <Form.Control
                         value = {this.state.modDebit}
                         onChange = {e => {this.setState({modDebit: e.target.value})}}
                         
                         />
                        </InputGroup>

                        <InputGroup>
                        <InputGroup.Text>Credit</InputGroup.Text>
                        <Form.Control
                         value = {this.state.modCredit}
                         onChange = {e => {this.setState({modCredit: e.target.value})}}
                         
                         />
                        </InputGroup>

                        <InputGroup>
                        <InputGroup.Text>Current Balance</InputGroup.Text>
                        <Form.Control
                         value = {this.state.modCurBalance}
                         onChange = {e => {this.setState({modCurBalance: e.target.value})}}
                         
                         />
                        </InputGroup>

                        <InputGroup>
                        <InputGroup.Text>Date Added</InputGroup.Text>
                        <Form.Control
                        type='date'
                         value = {this.state.modDate}
                         onChange = {e => {this.setState({modDate: e.target.value})}}
                         
                         />
                        </InputGroup>

                        <InputGroup>
                        <InputGroup.Text>UserID</InputGroup.Text>
                        <Form.Control
                         value = {this.state.modUser}
                         onChange = {e => {this.setState({modUser: e.target.value})}}
                         
                         />
                        </InputGroup>

                        <InputGroup>
                        <InputGroup.Text>Order</InputGroup.Text>
                        <Form.Control
                         value = {this.state.modOrder}
                         onChange = {e => {this.setState({modOrder: e.target.value})}}
                         
                         />
                        </InputGroup>

                        <InputGroup>
                        <InputGroup.Text>Statement</InputGroup.Text>
                        <Form.Control
                         value = {this.state.modStatement}
                         onChange = {e => {this.setState({modStatement: e.target.value})}}
                         
                         />
                        </InputGroup>
                        
                        <InputGroup>
                        <InputGroup.Text>Comment</InputGroup.Text>
                        <Form.Control
                         value = {this.state.modComment}
                         onChange = {e => {this.setState({modComment: e.target.value})}}
                         
                         />
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant='Primary' className="ms-2" onClick={()=> {this.interface('add')}} style={(this.state.mode!= 'add')? {display:'none'}:{}}>Add Record</Button>
                        <Button variant='Success' className="ms-2" onClick={()=> {this.interface('update')}} style={(this.state.mode == 'add')? {display:'none'}:{}}>Update Record</Button>
                        <Button variant='Danger' className="ms-2" onClick={()=> {this.interface('delete')}} style={(this.state.mode == 'add')? {display:'none'}:{}}>Delete Record</Button>
                    </Modal.Footer>
                </Modal>
                </>
            )
        }
        openModal = (mode) => () => {
            if(mode=='add'){
            this.setState({
              mode: mode,
              isOpen: true,
              modID: this.props.id,
              modName: '',
              modNumber: '',
              modDescription: '',
              modNormalSide: '',
              modCategory: '',
              modSubcategory: '',
              modBalance: '',
              modCredit: '',
              modDebit: '',
              modCurBalance: '',
              modDate: '',
              modUser: '',
              modOrder: '',
              modStatement: '',
              modComment: ''
            });
          }
          else if(mode=='edit'){
            this.setState({
              mode: mode,
              isOpen: true,
              modID: this.props.id,
              modName: this.props.record.name,
              modNumber: this.props.record.number,
              modDescription: this.props.record.description,
              modNormalSide: this.props.record.normalSide,
              modCategory: this.props.record.category,
              modSubcategory: this.props.record.subcategory,
              modBalance: this.props.record.balance,
              modCredit: this.props.record.credit,
              modDebit: this.props.record.debit,
              modCurBalance: this.props.record.curBalance,
              modDate: this.props.record.date,
              modUser: this.props.record.user,
              modOrder: this.props.record.order,
              modStatement: this.props.record.statement,
              modComment: this.props.record.comment
            });
          }
        }

          
        closeModal(){
            this.setState({
                isOpen: false
            });
        }

        getAllData(){
            return {
                id: this.state.modID,
                data: {
                name: this.state.name,
                number: this.state.number,
                description: this.state.description,
                normalSide: this.state.normalSide,
                category: this.state.category,
                subcategory: this.state.subcategory,
                balance: this.state.balance,
                credit: this.state.credit,
                debit: this.state.debit,
                curBalance: this.statecurBalance,
                date: this.state.date,
                user: this.state.user,
                order: this.state.order,
                statement: this.state.statement,
                comment: this.state.comment
                }
            }
        }

        interface(mode){
            if(mode== 'insert')
            this.insertData()

            else if(mode== 'update')
            this.updateData()

            else if(mode== 'delete')
            this.deleteData()

            this.closeModal()
        }

         insertData(){
            const dbRef = ref(db);
            const record = this.getAllData;
            const Fireaccount = 'accounts/' + record.ID

            get(child(dbRef,Fireaccount)).then(snapshot =>{
                if(snapshot.exists()){
                    alert('cannot create, account already exists')
                }
                else{
                    set(ref(db,Fireaccount),record.data)
                }
            })
        } 

        updateData(){
            const dbRef = ref(db);
            const record = this.getAllData;
            const Fireaccount = 'accounts/' + record.ID

            get(child(dbRef,Fireaccount)).then(snapshot =>{
                if(snapshot.exists()){
                    update(ref(db,Fireaccount),record.data)
                }
                else{
                    alert('cannot update, account does not exist')
                }
            })
        } 

        deleteData(){
            const dbRef = ref(db);
            const record = this.getAllData;
            const Fireaccount = 'accounts/' + record.ID

            get(child(dbRef,Fireaccount)).then(snapshot =>{
                if(snapshot.exists()){
                    remove(ref(db,Fireaccount))
                }
                else{
                    alert('cannot delete, account does not exist')
                }
            })
        } 

    }