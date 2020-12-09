import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
    article: Article
    removeArticle: (article: Article) => void
}

export const Article: React.FC<Props> = ({ article, removeArticle }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const deleteArticle = React.useCallback(
        (article: Article) => dispatch(removeArticle(article)),
        [dispatch, removeArticle]
    )

    return(
        <div className="Article">
            <div>
                <h1>{article.title}</h1>
                <p>{article.content}</p>
            </div>
            <button onClick={() => deleteArticle(article)}>Delete</button>
        </div>
    )
}