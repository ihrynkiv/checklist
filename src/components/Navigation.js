import React from "react";

export const Navigation = ({reviews = [], active, onChange}) => {
    return (
        <div className='navigation'>
            {reviews.map((review, i) => {
                const className = active === i ? 'navigation-item active' : 'navigation-item'
                return (
                    <div key={review.name} className={className} onClick={() => onChange(i)}>{i+1}</div>
                )
            })}
        </div>
    )
}