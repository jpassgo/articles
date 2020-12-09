import * as React from "react"

type Props = {
    saveArticle: (article: Article | any) => void
}

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
    const [article, setArticle] = React.useState<Article | {}>()

    const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
        setArticle({
            ...article,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    const addNewArticle = (e: React.FormEvent) => {
        e.preventDefault()
        saveArticle(article)
    }

    return(
        <form onSubmit={addNewArticle} className="Add-article">
            <input 
                type="text"
                id="title"
                placeholder="Title"
                onChange={handleArticleData}
            />
            <input
                type="text"
                id="content"
                placeholder="Description"
                onChange={handleArticleData}
            />
            <button disabled={article === undefined ? true : false}>
                Add Article
            </button> 
        </form>
    )
}