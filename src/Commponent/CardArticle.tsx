import React from 'react'
import { Card } from 'antd'
import { FormOutlined } from '@ant-design/icons';

interface cardArticles{
  title: string,
  publishedAt: string,
  url: string,
  description: string,
  author: string,
  loading: boolean
}

const CardArticle: React.FC<cardArticles> =({title, publishedAt, url, description, author,loading}) => {
  return (
    <div> 
        <Card hoverable style={{ width: 300, height: 420}}  loading={loading}
        className='card-container'
        cover={<img className='img-article-card' alt="example" src={url} />}
        >
            <div className='container-title'>
            <h2 className='title-card'>{title}</h2>
            <div style={{display: 'flex'}}>
            <p className='date-card'>{publishedAt.substring(0, 10)}</p>
            <div className='author-card'>
           <FormOutlined style={{fontSize: 17}}/>{author? <p>{author}</p>:<p>Guest</p>}
            </div>
            </div>
            <p className='desc-card'>{description}</p>
            </div>
        </Card>
  </div>
  )
}

export default CardArticle;