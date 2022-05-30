import NavigationBar from "./components/NavigationBar";
import './components/css/index.css';
import { Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';
import React, {useState, useEffect} from "react";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const News2=()=>{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const rowSkeletons=3;

    async function fetchData(){
        try{
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=41c65c4044e6440791b929f0d26153ac');
            // console.log(response.data.articles);
            setArticles(response.data.articles);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchData();
        setLoading(false);
    },[]);

    if(loading){
        let rows = []
        for (let index = 0; index < rowSkeletons; index++) {
            rows.push(
                <Row key={index} className="justify-content-center mt-5">
                    <Col className="col-md-4">
                        <Skeleton height={140} />
                    </Col>
                    <Col className="col-md-6">
                        <div className='content-detail'>
                            <h5 className='title'><Skeleton /></h5>
                            <p className='desc'><Skeleton /></p>
                            <p className='content'><Skeleton /></p>
                        </div>
                    </Col>   
                </Row>
            )
        }
        return(
            rows
        )
    }
    return(
        // console.log(articles),
        <div>
            <NavigationBar />
            {
                articles.map(function(article){
                    return(
                        <div key={article.title} className='container my-5 text-white'>
                            <Row className="justify-content-center">
                                <Col className="col-md-4">
                                    <img src={article.urlToImage} alt='images' className="img-fluid" />
                                </Col>
                                <Col className="col-md-6">
                                    <div className='content-detail'>
                                        <h5 className='title'>{article.title}</h5>
                                        <p className='desc'>{article.description}</p>
                                        <p className='date'>{article.publishedAt}</p>
                                    </div>
                                </Col>
                                
                            </Row>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default News2;