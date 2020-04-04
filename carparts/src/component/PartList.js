import React, { Component } from 'react';
import Title from './Title';
import {storeParts} from '../data';
import Part from './Part';
import {PartConsumer} from '../context';

export default class PartList extends Component {
    state={
        parts: storeParts
    };
    /**
     * <PartConsumer>
     * works as a state and allows
        you to pass down from index.js
     */
    render() {
    
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="parts"/>
                        <div className="row">
                            <PartConsumer>
                              {(value)=>{
                            return value.parts.map(part => {
                                return <Part key={part.id} part={part}/>;
                            })
                              }}  
                            </PartConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            //    <Part/>
        );
    }
}

