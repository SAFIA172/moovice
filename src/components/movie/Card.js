import React from 'react'
import PropTypes from 'prop-types';

class Card extends React.Component {

    render() {

        const {
            title,
            description,
            imgUrl
        } = this.props         //2eme methodes pour passer l'url


        return (

            <div >
                <img src={imgUrl} alt="" style={{ width: 250, height: 250 }} />

                <h5>Title={title}</h5>
                <h6>Description={description}</h6>

                {/* <img src={this.props.imgUrl}alt=""/> // 1er methode pour passer les props
                   <p>title ={this.props.title}</p> 
                  <p>description ={this.props.overview}</p>  */}


            </div>
        )
    }


}
Card.propTypes = {

    title: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,

}

Card.defaultProps = {
    title: '',
    description: '',
    imgUrl: './image/placeholder',
};
export default Card