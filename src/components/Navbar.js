import React from 'react'
import {BsGithub, FaRegUser} from "react-icons/all";

export const Navbar = ({reviews, active}) => {
    if (!active) {
        return (<></>)
    }

    const {author, repo } = reviews[active - 1]

    if (!repo || !author) {
        return (<></>)
    }
    return (
        <div className="navbar">
            <div className="navbar-item"><a rel="noopener noreferrer" target="_blank" href={`https://github.com/${author}`}><FaRegUser/> {author} </a></div>
            <div className="navbar-item"><a rel="noopener noreferrer" target="_blank" href={`https://github.com/MackeyRMS/${repo}/pulls`}><BsGithub/> {repo} </a></div>
        </div>
    )
}