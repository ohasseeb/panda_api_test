import { render } from '@testing-library/react';
import React from 'react';



export const Match_card_component = (props) => {


   const render_matches = () => {

        if(props.match[0] != ""){
            for(var i =0; i < props.match.length; i++){

                return(
                <div> {props.match[i].name}</div>
                );
            }
        }// End if
        else if(props.match[0] == undefined){
            render_matches();
        }
        else{
            return;
        }

        return;

    };

    console.log(props);

        return(
            <div>
                    {/* {this.render_matches()} */}
                    <div>Hello World</div> 

            </div> 


        );



}