import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({ data }) {
    return (
        <div class="col-md-3 my-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{data.title}</h5>
                    <p class="card-text">{data.description}</p>
                    <a href={data.url} class="card-link">Read More</a>
                </div>
            </div>
        </div>
                  
    );
}
 
export default Card;