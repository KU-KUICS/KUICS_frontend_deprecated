import React from 'react'
import { Link } from 'react-router-dom'
import './Modal/Modal.scss'
import Context from '../Component/Context'

const LoginModal = ({ isOpen, close }) => {
    return (
        <>
            {isOpen ? (
                <>
                    <div className="Modal-overlay" onClick={close} />
                    <div className="Modal">
                        <p className="title">KUICS LOGIN</p>
                        <div className="content">
                            <p>OAuth 이용한 로그인 방식</p>
                        </div>
                        <div className="button-wrap">
                            <Link to="/notice" components={Context}>
                                <button> Confirm </button>
                            </Link>
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
