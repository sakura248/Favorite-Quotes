import { v4 as uuidv4 } from 'uuid'
import { Reducer } from 'react'
import {createStore} from 'redux'
import {ADD_QUOTE} from './quote.actions'

const initialState = {
    quoteLists: [
        {
            id: uuidv4(),
            quote: "The English language cannot fully capture the depth and complexity of my thoughts, so I’m incorporating emojis into my speech to better express myself. Winky face.",
            character: "Gina Linetti",
            tvShowTitle: "Brooklyn 99",
        },
        {
            id: uuidv4(),
            quote: "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.",
            character: "Michael Scott",
            tvShowTitle: "The Office(US)",
        },
        {
            quote: "When Life Gives You Lemonade, Make Lemons. Life Will Be All Like 'What?!'",
            character: "Phil Dunphy",
            tvShowTitle: "Modern Family",
        },

    ],
}

export const quoteReducer = (state = initialState, action ) => {
    switch(action.type) {
        case ADD_QUOTE:
        action.payload.id = uuidv4()
        console.log("action.payload.id", action.payload)
        
        return {
            ...state, 
            quoteLists : [...state.quoteLists, action.payload]
        }
        default:
            return state;
    }
    }





    // console.log(quoteReducer)


