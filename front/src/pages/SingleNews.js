import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/formComponents";
import Loader from "../components/Loader";
import Mymodal  from "../components/Modal";
import { form as NewsForm } from "../components/newsForm";
import { useEffect } from "react";
import { post } from "../services/helpers/api";
import { deleteNews } from "../redux/news";

const SingleNews = (props) => {
  const [loading, setLoading] = useState(true)
  const [items,setItems] = useState(null)
  const [loved, setLoved] = useState(false)
  const [edit,setEdit] = useState(false)
  const [showCreateModal,setshowCreateModal] = useState(false)
  const dispatch = useDispatch()
  const news = useSelector(state => state.news)
  const user_id = useSelector(state => state.auth.user_id);
  const { id } = useParams()
  const navigate = useNavigate()
  const selectedNews = news.news.find(item => item.news_id == id)
  const data = { user_id, news_id: Number(id) }

  const addToLoved = () => {
    post('news/add-loved',data).then(res => {
      if (res.status == 200) {
        setLoved(true)
      }
    })
  }

  const removeFromLoved = () => {
    post('/news/turnoff-loved',data).then((res) => {
      if (res.status == 200) {
        setLoved(false)
      }
    })
  }

  const editNews = () => {
    setEdit(true)
    setshowCreateModal(true)
    setItems(selectedNews)
  }

  const createNews = () => {
    setEdit(false)
    setshowCreateModal(true)
  }

  const closeModal = () => {
    setshowCreateModal(false)
    setEdit(false)
  }
  const removeNews = () => {
    if (window.confirm('are you sure delete this?')){
      dispatch(deleteNews(id))
      if (news.isdeleted) {
        navigate('/')
      }
    }
  }

  useEffect(() => {
    post('/news/check-loved', data).then(res => {
      setLoading(false)
      if (res.status == 200) {
        setLoved(true)
      }
    })
    .catch(() => {
      setLoading(false)
    })
  },[])

  return <div className="p-5 m-5">
    <Mymodal show={showCreateModal} handleClose={closeModal} >
        <NewsForm edit={edit} items={items} />
    </Mymodal>
    {
      !loading ? <div className="single_news p-3 d-flex">
        <img src={`https://picsum.photos/id/${id}/200/300`} alt="card_img" />
        <div className="single_news_bottom  ms-3">
          <h3>{selectedNews.news_title}</h3>
          <p>{selectedNews.news_desc}</p>
          {loved && <button onClick={removeFromLoved} className="btn btn-danger ">this is loved</button>}
          <div className="d-flex m-2 justify-content-between w-100 mt-5">
            {!loved && <Button className="btn-primary" onClick={addToLoved} text="add to favourites" />}
            <Button onClick={createNews} className="btn-primary" text="create new news" />
            <Button className="btn-primary" onClick={editNews} text="edit news" />
            <Button className="btn-danger" onClick={removeNews} text="delete news" />
          </div>
        </div>
      </div> : <Loader />
    }
  </div>
}



export default SingleNews;