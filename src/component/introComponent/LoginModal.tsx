import React from 'react'
import { Link } from 'react-router-dom'
import './Modal.scss'
import Context from '../Context'

const { REACT_APP_API_HOST } = process.env

type propType = {
    isOpen: boolean
    close: () => void
}

const LoginModal: React.FC<propType> = ({ isOpen, close }) => {
    const apiURL = `http://${REACT_APP_API_HOST}/api/auth/login`

    return (
        <>
            {isOpen ? (
                <>
                    <div className="Modal-overlay" onClick={close} />
                    <div className="Modal">
                        <p className="title">Login KUICS</p>
                        <div className="content">
                            <a href={apiURL}>
                                <img
                                    style={{
                                        width: '100%',
                                        height: '80%',
                                        margin: '1rem 0 1rem 0',
                                    }}
                                    src="./static/btn_google_signin_light_normal_web@2x.png"
                                />
                            </a>
                        </div>
                    </div>
                </>
            ) : (
                ''
            )}
        </>
    )
}
export default LoginModal
