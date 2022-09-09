import React, {useState, useEffect} from 'react'
import { FormOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';

interface article{
  title: string,
  urlToImage: string,
  publishedAt: string,
  author: string,
  content: string
}

export default function DetailArticle() {

  let params = useParams();
  
  const [data, setData] = useState<article>();
  const [index, setIndex] = useState<any>();
  const [loading, setLoading] = useState(true)

  let apiKey = "ac4a157fbf67445fb284b7282de0feae";
  
 
  useEffect(()=>{
    const getArticles = async () =>{
      try {
          setIndex(params.index)
          await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
          .then(res => res.json())
          .then(result => {
              setData(result.articles[index])
          });
          setLoading(false)
      } catch (error) {
          console.log(error);
          
      }
  }  
    getArticles()
  },[index])

  return (
    <div>
        <div className='container-detail'>
            <div className='container-content'>
              {loading?  <Spin size="large"  tip="Loading..." style={{display: 'flex', justifyContent:'center'}}/> 
              : <h1>{data?.title}</h1>}
              <img className='img-detail' src={data?.urlToImage} alt=''></img>
              <div className='date-authot-detail'>
              <p className='date-card'>{data?.publishedAt.substring(0, 10)}</p>
              <div className='author-card-detail'>
              <FormOutlined style={{fontSize: 17}}/><p>{data?.author}</p>
              </div>
              </div>
              <div className='content-detail'>
              <p>{data?.content}</p>
              </div>
            </div>
        </div>
    </div>
  )
}
