import React,{useRef,useState} from 'react';
import classes from './MealItemForm.module.css'
import Input from '../UI/Input';

const MealItemForm = (props) => {
  const[amountIsValid,setamountIsValid]=useState(true);
  const amountInputRef = useRef();
  const submitHandler=event=>{
    event.preventDefault();
    const amount = amountInputRef.current.value;
    const amountToNumber = +amount;
    if(amount.trim().length===0 || amountToNumber<1 || amountToNumber>5){
      setamountIsValid(false);
      return;
    }
    props.onAddtoCart(amountToNumber);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
       lable="Amount"
       ref={amountInputRef}
       input ={{
        id:'amount',
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'

      }}/>
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount(1-5).</p>}
    </form>
  );
};

export default MealItemForm;