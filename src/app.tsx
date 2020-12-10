import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import "./styles.css"

import { Article } from "./components/Article"
import { AddArticle } from "./components/AddArticle"
import { addArticle, removeArticle } from "./store/actionCreators"
import { Dispatch } from "redux"

const App: React.FC = () => {
    const articles: readonly Article[] = useSelector(
        (state: ArticleState) => state.articles,
        shallowEqual
    )
    const dispatch: Dispatch<any> = useDispatch()

    const saveArticle = React.useCallback(
        (article: Article) => dispatch(addArticle(article)),
        [dispatch]
    )

    return (
        <main>
            <h1>My Articles</h1>
            <AddArticle saveArticle={saveArticle} />
            {articles.map((article: Article) => (
                <Article
                    key={article.id}
                    article={article}
                    removeArticle={removeArticle}
                />
            ))}
        </main>
    )
}