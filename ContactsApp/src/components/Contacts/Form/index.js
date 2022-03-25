import {useState} from "react";
import Contacts from "..";



const initialFormValues = {fullName:"", phone_number:""};

function Form({addContact, contacts}) {
    const [form, setForm] = useState(initialFormValues)

    const onChangeInput = (e) => setForm({...form, [e.target.name]: e.target.value})

    const onSubmit = (e) => {
        e.preventDefault();
        if (form.fullName === "" || form.phone_number ===""){
            return false;
        }
        addContact([...contacts, form])
        console.log(form);
    }

    useState(() => {
        setForm(initialFormValues)
    }, {contacts})

  return (
    <form onSubmit={onSubmit}>
        <div>
            <input 
            name="fullName" 
            placeholder="Full Name"
            onChange={onChangeInput}
            value={form.fullName}
            ></input>
        </div>
        <div>
            <input 
            type="number"
            name="phone_number" 
            placeholder="Phone Number"
            onChange={onChangeInput} 
            value={form.phone_number}
            ></input>
        </div>
        <div className="btn">
        <button>Add</button>
        </div>
    </form>
  );
}

export default Form;