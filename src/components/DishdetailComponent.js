import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

    }

    componentWillReceiveProps(props) {
        this.setState({ props: props })
      }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                    </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments){
        console.log(comments);
        var commentsL = {}
        if (comments != null){
            commentsL = comments.map((comments) => {
            return (
            <ul class="list">
            <uli class="list-item" id = {comments.id}>
                    <div className="row">
                        {comments.comment}
                    </div>
                    <div className="row">
                        <p>--</p>{comments.author}&nbsp;{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}
                    </div>
            </uli>
            </ul>

        );
        }); }

        if (comments != null)
            return(
              <div>
                  <h4>Comments</h4>
                  {commentsL}
              </div>  
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                  </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;