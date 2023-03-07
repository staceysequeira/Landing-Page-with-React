import React from 'react'


export function Card (props) {
    return <div className="card mb-3" style={{width: "auto"}}>
  <img src={props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
  </div>
</div>
}


