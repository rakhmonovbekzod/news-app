import { useEffect } from "react";
import { useSelector,connect } from "react-redux";
import {Link} from "react-router-dom";
import Loader from "../components/Loader";
import { fetchNews } from "../redux/news";

const Home = (props) => {
  const newState =  useSelector(state => state.news)
  const {news,loading} = newState;
  const { getAllNews } = props;
  

  useEffect(() => {
    getAllNews()
  },[])

  return <>
    <div className="home">
      {
        loading ? <Loader /> : <>
          <div className="row">
          {
            news.length ? news.map((item, index) => {
              return <>
                <div className="col-3">
                  <Link to={`/news/${item.news_id}`} className="news">
                  <img src={`https://picsum.photos/id/${index + 1}/200/300`} alt="img" />
                  <div className="news_body">
                    <h3>{item.news_title}</h3>
                    <p>{item.news_desc}</p>
                  </div>
                  </Link>
                </div>
              </>
            }) : ''
          }
          </div>
        </>
      }
    </div>
  </>
}



const mapDispatchToProps = (dispatch) => {
  return {
    getAllNews: (news) => dispatch(fetchNews(news))
  }
}

export default connect(null,mapDispatchToProps)(Home);