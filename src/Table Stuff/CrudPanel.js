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
                <Button variant='primary' className="ms-2">Edit record</Button>
                </>
            )
        }
    }