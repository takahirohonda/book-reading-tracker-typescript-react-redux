import * as React from 'react'

export interface Props {
  removeList?: (index: number) => void;
  index: number;
}
const RemoveButton = ({ removeList, index }: Props) => {
  return (
    <button
      type="button"
      className="delete-button"
      onClick={()=> {removeList(index);console.log('removelist clicked')}}
    >
    x
    </button>
  )
}

export default RemoveButton