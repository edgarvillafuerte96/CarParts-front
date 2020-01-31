import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Part from '../component/Part';

//API FROM BACKEND GO HERE 


class PartList extends Component{
    state = {
        parts: [],
        searchString: ''
    }

    constructor(){
        super()
        this.getParts()
    }

    // getParts = () => {
    //     //FUNCTION FOR PARTS BACKEND GOES HERE
    //     client.getEntries({
    //         content_type: 'part',
    //         query: this.state.searchString
    //     })
    //     .then((response) => {
    //         this.setState({parts: response.items})
    //     })
    //     .catch((error) => {
    //         console.log("Error fetching" + error)
            
    //     })
        
        
    

    onSearchInputChange = (event) => {
        if (event.target.value) {
            this.setState({searchString: event.target.value})  
        } 
        else {
            this.setState({searchString: ''})
        }
        this.getParts();
    }

    render() {
        return(
            <div>
                {this.state.parts ? (
                    <div>
                        <TextField style={{padding: 18}}
                            id="searchInput"
                            placeholder="Search for Parts"
                            margin="normal"
                            onChange={this.onSearchInputChange} />
                            <Grid container spacing={24} style={{padding: 18}}>
                                this.state.parts.map(currentPart => (
                                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                                        {/* <Part part={currentPart}/> */}
                                    </Grid>
                                ))
                            </Grid>
                    </div>

                ) : "No Parts Found" }
            </div>
        )

    }


}

export default PartList;