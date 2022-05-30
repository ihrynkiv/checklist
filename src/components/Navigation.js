import React from "react";

export const Navigation = ({reviews = [], active, onChange}) => {
    return (
        <div className='navigation'>
            <div className={!active ? 'navigation-item active' : 'navigation-item'}
                 onClick={() => onChange(0)}>
                <span role="img" aria-label="star emoji">&#11088;</span>
            </div>
            {reviews.map((review, i) => {
                const className = active === i + 1 ? 'navigation-item active' : 'navigation-item'
                return (
                    <div key={review.name} className={className} onClick={() => onChange(i + 1)}>{i+1}</div>
                )
            })}
        </div>
    )
}