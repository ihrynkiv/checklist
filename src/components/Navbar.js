import React from 'react'
import {BsGithub, FaRegUser} from "react-icons/all";

export const Navbar = ({reviews, active}) => {
    console.log('active = ', active)
    if (!active) {
        return (<></>)
    }

    const {author, repo } = reviews[active - 1]
    console.log({author, repo })


    if (!repo || !author) {
        return (<></>)
    }
    return (
        <div className="navbar">
            <div className="navbar-item"><a target="_blank" href={`https://github.com/${author}`}><FaRegUser/> {author} </a></div>
            <div className="navbar-item"><a target="_blank" href={`https://github.com/MackeyRMS/${repo}/pulls`}><BsGithub/> {repo} </a></div>
        </div>
    )
}