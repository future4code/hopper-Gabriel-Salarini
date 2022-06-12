import React from 'react';

import {
  CardHeaderContainer, 
  CleacrMatchesIcon, 
  AllMatchesIcon
} from './style'

export default function CardHeader (props) {

  return(
    
    <CardHeaderContainer>
      
      <div>
        <AllMatchesIcon onClick={props.onClickIconMatches}/>
        <CleacrMatchesIcon onClick={props.onClickIconClear}/>
      </div>
    </CardHeaderContainer>
  )
}
