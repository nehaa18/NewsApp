import React from "react";

const NewsItem =(props)=> {

    let { title, description,imageUrl,newsUrl, author, date, source} = props;
    return (
      <div>
        <div className="card" style={{ position: 'relative' }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
           <h5 className="card-title">{title}....<span style={{ position: 'absolute', top: 0, right: 0 }} className="badge rounded-pill bg-danger">{source}</span></h5>
            <p className="card-text">{description}....</p>
            <p className="card-text"><small className="text-muted"> By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
  export default NewsItem;
