import React, { useState } from 'react';
import PSGEN from '../data/passwordGenerator'
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { optionIterators } from '../data/iterators'
import '../css/style.css';

const Options = (props: any) => {
    return (
        <React.Fragment>
            <div className="option">
                <div className="option-label">
                    <p>{props.label}</p>
                </div>
                <div className="option-inputs">
                    <input type={props.inputType} name={props.inputName} {...props.inputType === 'number' ? {value: props.options.options[props.inputName], onChange: (e) => {props.options.setOptions({...props.options.options, [props.inputName]: e.target.value })}} : {checked: props.options.options[props.inputName], onChange: (e) => { props.options.setOptions({...props.options.options, [props.inputName]: e.target.checked })}}} {...props.inputType === 'number' ? {min: 1} : {}} />
                </div>
            </div>
        </React.Fragment>    
    )
}

const PasswordGenerator = () => {
    const [displayContent, setDisplayContent]:any = useState('Click Generate to generate a password!')
    const [options, setOptions]:any = useState({
        passlength: 10,
        passupper: false,
        passlower: true,
        passnum: true,
        passym: false
    })
    return (
        <React.Fragment>
            <div className="psgen-main">
                <div className="psgen-card">
                    <div className="psgen-titlebar">
                        <h4>Password Generator</h4>
                    </div>
                    <div className="psgen-output">
                        <div className="psgen-display">
                            {displayContent}
                        </div>
                        <div className="psgen-copyps">
                            <button data-tip="Copy!" onClick={() => {navigator.clipboard.writeText(displayContent)}} {...displayContent === 'Click Generate to generate a password!' ? {disabled: true, style: {backgroundColor: 'gray', cursor: 'not-allowed'}} : {}}>
                                <FontAwesomeIcon icon={faCopy} />
                            </button>
                            <ReactTooltip />
                        </div>
                    </div>
                    <div className="psgen-controls">
                        {
                            optionIterators.map(value => {
                                return <Options key={value.id} label={value.label} inputType={value.input} inputName={value.inputName} options={{options, setOptions}} />
                            })
                        }
                    </div>
                    <div className="psgen-generate">
                        <button onClick={() => {setDisplayContent(PSGEN(options.passlength, options.passupper, options.passlower, options.passnum, options.passym))}}>Generate</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PasswordGenerator