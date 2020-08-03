import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        if (comments == null) {
            return (<div></div>)
        }
        const commmentArray = comments.map((review) => {
            return (
                <li key={review.id}>
                    <p>{review.comment}</p>
                    <p>-- {review.author} ,
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(Date.parse(review.date)))}
                    </p>
                </li>
            )
        });

        return (
            <div className='col-12 col-md-5 m-1' >
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {commmentArray}
                </ul>
            </div>
        );
    }


    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div class="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return <div></div>
        }
    }
}

export default DishDetail;