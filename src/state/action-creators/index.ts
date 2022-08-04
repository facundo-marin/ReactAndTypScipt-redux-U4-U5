import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';

const searchRepositores = (term: string) => {
  return async (dispatch: any) => {
    dispatch({ type: ActionType.SEARCH_RESPOSITORIES });

    try {
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: error.message,
        });
      } else {
        console.log('Unexpected error: ' + error);
      }
    }
  };
};
