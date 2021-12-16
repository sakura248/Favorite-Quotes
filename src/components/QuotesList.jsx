import React from 'react'
import { quoteReducer } from '../redux/quote/quote.reducers'
import { connect, useSelector } from 'react-redux'


const QuotesList = () => {
    const quoteLists = useSelector(state => state.quoteLists)
    return (
        <>
            {
                quoteLists.map((quote) => (
                    <div key={quote.id} className="flex flex-col items-center m-8">
                        <p className="quotation text-7xl">"</p>
                        <ul  className="flex items-center flex-col">
                            <li className="quote quote-text my-3 text-lg text-center font-bold">
                                {quote.quote}
                            </li>
                            <li className="quote quote-name my-1">
                                {quote.character}
                            </li>
                            <li className="quote quote-show my-1">
                                {quote.tvShowTitle}
                            </li>
                        </ul>
                    </div>
                ) )
            }
        </>
    )
}


export default QuotesList

