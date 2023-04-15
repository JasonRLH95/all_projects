import React from 'react';
import '../style/link.css'

export default function Link(props) {
    return (
        <div>
            <p className='linksP'>{props.name}</p>
            <div className='linksDiv'>
                <a target='_blank' href={props.link}><img className='linkImg' src={props.image} alt='img'></img></a>
            </div>
            <p className='linksDesc'>{props.desc}</p>
        </div>
    )
}
