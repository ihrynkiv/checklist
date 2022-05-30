import React from "react";
import {AiFillDelete, BsFillStarFill} from "react-icons/all";

export const Navigation = ({reviews = [], active, onChange, onDelete}) => {
    return (
        <div className='navigation'>
            <div className={!active ? 'navigation-item active' : 'navigation-item'}
                 onClick={() => onChange(0)}>
                <BsFillStarFill/>
            </div>
            {reviews.map((review, i) => {
                const className = active === i + 1 ? 'navigation-item active' : 'navigation-item'
                return (
                    <div key={review.name} className={className} onClick={() => onChange(i + 1)}>{i+1}</div>
                )
            })}
            {!!active &&
                <div className={'navigation-item delete'}
                 onClick={() => onDelete()}>
                <AiFillDelete/>
            </div>}
        </div>
    )
}