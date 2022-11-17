import React from 'react';
import Header from './header';
import { useSelector } from 'react-redux';

const TbrList = () => {
    const tbrList = useSelector((state) => state.tbrBooks.tbrList);
    return <div>
            <h1>My TBR</h1>
            <br />
            <ul className="list-group row">
                
                {tbrList.map((book) => {
                    console.log("Book", book)
                    console.log("List:", tbrList)
                return(
                <li className="list-group-item">
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={book.volumeInfo.imageLinks?.smallThumbnail} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{book.volumeInfo.title}</h5>
                                <p className="card-text"><small className="text-muted">{book.volumeInfo.authors}</small></p>
                                <p className="card-text">{book.volumeInfo.description}</p>
                                <button>Remove from TBR</button>
                            </div>
                            </div>
                        </div>
                        </div>
                </li>
                )
                })}
            </ul>
        </div>
    }

    export default TbrList;