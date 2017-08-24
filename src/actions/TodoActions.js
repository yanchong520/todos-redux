/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

export const addTodo = text => (
  {
   type: 'ADD_TODO', 
   text 
  }

  )
export const deleteTodo = id => ({ type: 'DELETE_TODO', id })
export const editTodo = (id, text) => ({ type: 'EDIT_TODO', id, text })
export const completeTodo = id => ({ type: 'COMPLETE_TODO', id })
export const completeAll = () => ({ type: 'COMPLETE_ALL' })
export const clearCompleted = () => ({ type: 'CLEAR_COMPLETED' })

//export default Actions;
