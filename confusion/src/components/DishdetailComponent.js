import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import {Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Dishdetail extends Component {

    renderComments(comments) {
        if (comments == null) {
            return (<div></div>)
        }
        const cmnts = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 ml-auto">
                        <h4> Comments </h4>
                        <ul className='list-unstyled'>
                            {cmnts}
                        </ul>

                    </div>
                </div>
            </div>
        )
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="container">
                    <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                        <div className="col-12">
                            <h3>{dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg  src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                        
                            </CardBody>
                        </Card>
                        

                    </div>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }

    render() {
        const dish = this.props.dish
        const comments = this.props.comments
        
        if (dish == null) {
            return (<div></div>)
        }
        const dishItem = this.renderDish(dish)
        const commentItem = this.renderComments(comments)
        return (
            <div className="container">
                <div className='row'>
                {dishItem}
                {commentItem}
                </div>
            </div>
            
        )
    }
}

export default Dishdetail