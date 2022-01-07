import { createSlice } from '@reduxjs/toolkit';
import { addQuizToTopic } from '../topics/topicsSlice';

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        }
    }
});

export const addQuizAndAddToTopic = (quizObject) => {
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quizObject));
        dispatch(addQuizToTopic(quizObject));
    };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;