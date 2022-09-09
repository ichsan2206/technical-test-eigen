import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Row } from 'antd'
import CardArticle from '../Commponent/CardArticle'


export default function ArticlePage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);

    const [data, setData] = useState<any[]>()
    console.log(data);
    
    let apiKey:string = "ac4a157fbf67445fb284b7282de0feae";



    useEffect(()=>{
        const getArticles = async () =>{
            try {
                await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
                .then(res => res.json())
                .then(result => {
                    setData(result.articles)
                });
                setLoading(false)
            } catch (error) {
                console.log(error);
                
            }
        }
        getArticles()
    },[])

 
  return (
    <div>
        <div className='container-article'>
        <h1>Most Popular Article</h1>
        <div className='container-list-article'>
        <Row>
             {data?.map((item:any, index:any) => (
            <Col lg={6} md={8} sm={12} key={index}  onClick={() => navigate(`/detail-article/${index}`)}>
                
                <CardArticle
                loading={loading}
                title={item?.title} 
                publishedAt={item?.publishedAt} 
                url={item?.urlToImage} 
                description={item?.description} 
                author={item?.author}
                />
          
            </Col>
            ))}  
        </Row>
        </div>
        </div>
    </div>
  )
}
