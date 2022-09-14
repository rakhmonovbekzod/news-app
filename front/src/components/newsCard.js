import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from "classnames";
import Card from 'react-bootstrap/Card';

 const NewsCard = (props) => {

  const {id,text,title, className,onClick } = props;
  const classes = classnames(
    'news_card',
    className
)

  return (
    <Card className={classes} onClick={onClick.bind(this)} >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Link to={`/news/${id}`} className="btn btn-primary">view news</Link>
      </Card.Body>
    </Card>
  );
}


NewsCard.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  title:PropTypes.string,
  onClick:PropTypes.func
}

NewsCard.defaultProps = {
  onClick: () => {}
};

export default NewsCard;