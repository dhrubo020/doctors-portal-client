import React from 'react';

const BlogCard = (props) => {
    const { img, name, date, title, description } = props.data;

    return (
        <div className="col-md-4">
            <div className="card p-3" >
                <div className={`d-flex py-5 px-2`}>
                    <img src={img} height="50" alt="" />
                    <div className="ml-2">
                        <h6><b>{name}</b></h6>
                        <small className="text-muted">23 April 2019</small>
                    </div>
                </div>
                <div className="card-body text-muted px-2">
                    <p><b>{title}</b></p>
                    <p className="text-muted">{description}</p>
                    <span>  </span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;