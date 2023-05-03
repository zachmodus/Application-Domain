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
                id: props.id,
                number: props.record.number,
                name: props.record.name,
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
                comment: props.record.comment,
            },
            modID: '',
            modNumber: '',
            modName:'',
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
            componentDidMount(){
                console.log(this.state.record)
            }
    render(){
            return(
                <>
                
                <Button variant='primary' className="ms-2" onClick={() => this.openModal('edit')}>Delete record</Button>

                
                <Modal show={this.state.isOpen}>
                    <Modal.Header>
                        <Modal.Title>{(this.state.mode=='add')? 'Add New Record': 'Edit Record'}</Modal.Title>
                    <Button size='sm' variant='dark' onClick={() => this.closeModal()}>X</Button>
                    </Modal.Header>
                    <Modal.Body>

                        <InputGroup>
                        <InputGroup.Text>Account Number</InputGroup.Text>
                        <Form.Control
                         value = {this.state.modNumber}
                         onChange = {e => {this.setState({modNumber: e.target.value})}}
                         disabled = {(this.state.mode != 'add')}
                         />
                        </InputGroup>

                        <InputGroup>
                        <InputGroup.Text>Account Name</InputGroup.Text>
                        <Form.Control
                         value = {this.state.modName}
                         onChange = {e => {this.setState({modName: e.target.value})}}
                         
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
                    <Button variant='Danger' className="ms-2" onClick={()=> {this.interface('delete')}} style={(this.state.mode == 'add')? {display:'none'}:{}}>Delete Record</Button>
                    </Modal.Footer>
                </Modal>
                </>
            )
        }
        openModal (option){
            if(option=='add'){
            this.setState({
              isOpen: true,
              mode: option,
              modNumber: '',
              modName: '',
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
          else if(option=='edit'){
            this.setState({
              isOpen: true,
              mode: option,
              modNumber: this.state.number,
              modName: this.state.record.name,
              modDescription: this.state.record.description,
              modNormalSide: this.state.record.normalSide,
              modCategory: this.state.record.category,
              modSubcategory: this.state.record.subcategory,
              modBalance: this.state.record.balance,
              modCredit: this.state.record.credit,
              modDebit: this.state.record.debit,
              modCurBalance: this.state.record.curBalance,
              modDate: this.state.record.date,
              modUser: this.state.record.user,
              modOrder: this.state.record.order,
              modStatement: this.state.record.statement,
              modComment: this.state.record.comment
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
                id: this.state.key,
                data: {
                number: this.state.modNnumber,
                name: this.state.modName,
                description: this.state.modDescription,
                normalSide: this.state.modNormalSide,
                category: this.state.modCategory,
                subcategory: this.state.modSubcategory,
                balance: this.state.modBalance,
                credit: this.state.modCredit,
                debit: this.state.modDebit,
                curBalance: this.state.modCurBalance,
                date: this.state.modDate,
                user: this.state.modUser,
                order: this.state.modOrder,
                statement: this.state.modStatement,
                comment: this.state.modComment
                }
            }
        }

        interface(mode){
            if(mode== 'add')
            this.insertData()

            else if(mode== 'update')
            this.updateData()

            else if(mode== 'delete')
            this.deleteData()

            this.closeModal()
        }
        

         insertData(){
            const dbRef = ref(db);
            const record = this.getAllData();
            const Fireaccount = 'accounts/'+ record.key;
            

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
            const record = this.getAllData();
            const Fireaccount = 'accounts/' + record.key;
            get(child(dbRef,Fireaccount)).then(snapshot =>{
                if(snapshot.exists()){
                    update(ref(db,Fireaccount), record.data)
                }
                else{
                    alert('cannot update, account does not exist')
                }
            })
        } 

        deleteData(){
            const dbRef = ref(db);
            const record = this.getAllData();
            const Fireaccount = 'accounts/' + record.key;

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