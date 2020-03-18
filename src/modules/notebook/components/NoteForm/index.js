import './noteform.css'
import React, { useReducer, useEffect } from 'react';
import { reducer, initialState } from '../../reducers/noteForm';
import { validateNote } from '../../validations/noteValidator'
import InputField from '../../../../components/InputTextField'
import SelectField from '../../../../components/SelectField'
import Button from '../../../../components/CenterButton'
import { COLOR_OPTIONS } from '../../../../constants'

const input = {
  id: 'noteText',
  label: 'Note Text',
}

const NoteForm = ({ noteToBeEdited, onSubmit, cancelNoteEditing }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    dispatch({ type: 'reset', data: noteToBeEdited || initialState })
  }, [noteToBeEdited]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const errors = validateNote(state);
    if (Object.entries(errors).length === 0) {
      const { error, ...otherState } = state;
      onSubmit(otherState);
      dispatch({ type: 'reset', data: initialState })
    }

    dispatch({ type: 'error', data: errors })
  }

  return (
    <div className="formwrapper">
      <form>
        <InputField
          id={input.id}
          label={input.label}
          value={state[input.id]}
          errorMessage={state.error[input.id]}
          onChange={event => dispatch({ type: input.id, data: event.target.value })}
        />
        <SelectField
          title="Color"
          value={state.color}
          options={COLOR_OPTIONS}
          errorMessage={state.error.color}
          width="100%"
          onChange={event => dispatch({ type: 'color', data: event.target.value })}
        />
        <div className="form-group content-center">
          <Button
            title="Save Note"
            onClick={handleOnSubmit}
          />
          {
            noteToBeEdited && (
              <Button
                title="Cancel"
                color="secondary"
                onClick={() => cancelNoteEditing()}
              />
            )
          }
        </div>
      </form>
    </div>
  );
}

export default NoteForm;
