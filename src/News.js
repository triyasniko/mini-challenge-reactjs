import NavigationBar from "./components/NavigationBar";
import './components/css/index.css';
import { Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import React from "react";

class News extends React.Component{
    state = {
        datas: [],
        isLoading: true,
        errors: null
      };
    
      getDatas() {
        axios
          .get(
            'https://newsapi.org/v2/top-headlines?country=us&apiKey=41c65c4044e6440791b929f0d26153ac'
          )
          .then(response =>
            response.data.articles.map(
              user => ({
                title: `${user.title}`,
                description: `${user.description}`,
                content: `${user.content}`,
                image: `${user.urlToImage}`,
              })
              //   {
              //     console.log(response.data.articles);
              //   }
            )
          )
    
          .then(datas => {
            this.setState(
              {
                datas,
                isLoading: false
              },
              console.log(datas)
            );
          })
          .catch(error => this.setState({ error, isLoading: false }));
      }
    
      componentDidMount() {
        this.getDatas();
      }
    
      render() {
        const { isLoading, datas } = this.state;
        return (
        //   <React.Fragment>
            <div class="text-white">
                <NavigationBar />
                <div>
                    {!isLoading ? (
                    datas.map(data => {
                        const {
                        title,
                        description,
                        image,
                        content
                        } = data;
        
                        return (
                        <div key={data.title} className='container my-5'>
                            <Row className="justify-content-center">
                                <Col className="col-md-4">
                                    <img src={image} alt='images' className="img-fluid" />
                                </Col>
                                <Col className="col-md-6">
                                    <div className='content-detail'>
                                        <h5 className='title'>{title}</h5>
                                        <p className='desc'>{description}</p>
                                        <p className='content'>{content}</p>
                                    </div>
                                </Col>
                                
                            </Row>
                        </div>
                        );
                    })
                    ) : (
                    <p>Loading...</p>
                    )}
                </div>
            </div>
        //   </React.Fragment>
        );
      }
}

export default News;