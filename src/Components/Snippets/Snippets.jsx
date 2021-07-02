import classes from "./Snippets.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const Snippets = ({ data, buttonRef, value }) => {

    let flag;
    if (value && value.isResponseGot && data === undefined) {
        flag = 'show';
    } else {
        flag = 'hide';
    }

    function addDefaultSrc(event) {
        event.target.src = 'https://klike.net/uploads/posts/2020-04/1587719791_1.jpg';
    }

    return (
        <div className={classes.snippetsWrapper} ref={buttonRef}>
            <div data={flag}></div>
            {data && data.map(book => {
                const dataKey = book.key.split('/');
                const id = dataKey[dataKey.length - 1];
                const isbn = book.isbn ? book.isbn[0] : '';
                return (
                    <NavLink
                        to={{
                            pathname: book.key,
                            title: book.title,
                            author: book['author_name'] ? book['author_name'][0] : '',
                            publishDate: book['publish_date'] ? book['publish_date'][0] : '',
                            publisher: book.publisher ? book.publisher[0] : '',
                            isbn: book.isbn ? book.isbn[0] : '',
                            cover: `http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg?default=false`
                        }}>
                        <div className={classes.eachSnippet} key={id}>
                            <img
                                onError={addDefaultSrc}
                                src={`http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg?default=false`}
                                alt="обложка" />
                            <h1>{book.title}</h1>
                            <p>{book['author_name'] ? book['author_name'][0] : ''}</p>
                        </div>
                    </NavLink>
                )
            })}
        </div >
    )
}

export default Snippets;
