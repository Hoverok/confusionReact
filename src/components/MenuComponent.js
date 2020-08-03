import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

    
//is a functional component
function RenderMenuItem({dish, onClick}) {
        return (
            <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
        );
    }

    //different syntax for a function, it also is a functional component
    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
                // key uniquely identifies every rendered property
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            )
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

    


//export const SELECTEDDISH = this.state.selectedDish; 
export default Menu;
