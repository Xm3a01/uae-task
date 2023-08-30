import React, { useState } from "react";
import "./Toggle.css"

const Toggle = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [toast, setToast] = useState(false);

    const handleChange = event => {
        
        setToast(true)
        setInterval(() => {
            setToast(false)
        }, 5000);

        setIsChecked(event.target.checked);
    }
    return (<>

        
        {toast
            && (
                  !isChecked 
                    ? (
                        <div className="check-in-toast">
                            <h4 className="check-in">Swip to check in</h4>
                        </div>
                    )
                    : (
                        <div className="check-out-toast">
                            <h4 className="check-out">Swip to check out</h4>
                        </div>
                    )
                )
                
            }
        <label className="switch">
            <input type="checkbox" onChange={handleChange} />
            <span className="slider " >
                {!isChecked
                    ? <h4 className="check-in">Swip to check in</h4>
                    : <h4 className="check-out">Swip to check out</h4>
                }
                {/* <h4> {text} </h4> */}
            </span>
        </label>
    </>
    )
}

export default Toggle;