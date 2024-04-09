import { useState, useCallback, useEffect, useRef } from "react"


function PasswordProject() {
    const [rangeValue, setRangeValue] = useState(8);
    const [passwordValue, setPasswordValue] = useState("udwagdrp");
    const [numberCheck, SetNumberCheck] = useState(false);
    const [characterCheck, SetCharacterCheck] = useState(false);


    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
    }

    const handleNumberChange = () => {
        SetNumberCheck(!numberCheck);
    }

    const handleCharacterChange = () => {
        SetCharacterCheck(!characterCheck);
    }

    const passwordRef = useRef(null);


    useEffect(() => {
        generateRandomPassword();
    }, [rangeValue, numberCheck, characterCheck, setPasswordValue])


    const copyText = useCallback(() => { 
        if (passwordRef.current) {
            passwordRef.current?.select();
            navigator.clipboard.writeText(passwordRef.current.value);
        }
    }, [passwordRef]);
    


    const generateRandomPassword = useCallback(() => {

        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberCheck && characterCheck) chars += '0123456789!@#$%^&*()-_=+';
        else if (numberCheck) chars += '0123456789';
        else if (characterCheck) chars += '!@#$%^&*()-_=+';

        let password = '';

        for (let i = 0; i < rangeValue; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        setPasswordValue(password);

    }, [rangeValue, numberCheck, characterCheck, setPasswordValue])



    return (
        <>
            <h1>Hello</h1>

            <div className="input-group mb-3" >
                <input type="text" className="form-control" value={passwordValue} ref={passwordRef} aria-label="Username" aria-describedby="basic-addon1" />
                <button style={{marginLeft : "10px", border : "2px solid black", borderRadius : "3px", padding:"3px 8px 3px 8px", backgroundColor:"yellow"}} onClick={copyText}>Copy Text</button>
            </div>
            <input type="range" className="form-range" id="customRange1" value={rangeValue} onChange={handleRangeChange}></input>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={numberCheck} onChange={handleNumberChange} />
                <label>Number</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={characterCheck} onChange={handleCharacterChange} />
                <label>Charactrer</label>

            </div>
            <h2>Password Size {rangeValue}</h2>

        </>
    )
}

export default PasswordProject