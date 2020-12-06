import * as actionTypes from "./actionTypes"

const initialState: ArticleState = {
    articles: [
        {
            id: 1, 
            title: "Article One", 
            content: "Article One filler content"
        },
        {
            id: 2, 
            title: "Article Two", 
            content: "Article Two filler content"
        },
    ],
}

const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction
): ArticleState => {
    switch(action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle: Article = {
                id: Math.random(),
                title: "Helicopters, trolley cars, and motorecycles",
                content: "Stephen Martian and Joe Cookie go on a hilarious journey"
            }
            return {
                ...state,
                articles: state.articles.concat(newArticle)
            }
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticles: Article[] = state.articles.filter(
                article => article.id !== action.article.id
            )
            return {
                ...state,
                articles: updatedArticles,
            }
    }
    return state
}

export default reducer