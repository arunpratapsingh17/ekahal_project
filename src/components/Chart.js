import React, { Component } from 'react'
import {Bar,Line,Pie} from "react-chartjs-2";
import "./Chart.css"
class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels:["India","USA","China","Japan","Great Britain"],
                datasets:[{
                    label:"Medals",
                    data:[
                        7,
                        113,
                        88,
                        58,
                        65
                    ],
                    backgroundColor:[
                        'orange',
                        'blue',
                        'red',
                        'pink',
                        'black'
                    ],

                }],
            }
        }
    }
    render(){
        return(
            <div className="chart">
                <p style={{fontWeight:"bold"}}>Medals tally of Tokyo Olympics 2020-</p>
                <div>
                <Bar 
                className="individual_chart"
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:true,
                            text:"Medals tally of Tokyo Olympics 2020",
                            fontSize:25 
                        },
                        legend:{
                            display:true,
                            position:"right"
                        }
                    }}
                />
                </div>
                <div>
                <Line 
                    className="individual_chart"
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:true,
                            text:"Medals tally of Tokyo Olympics 2020",
                            fontSize:25 
                        },
                        legend:{
                            display:true,
                            position:"right"
                        }
                    }}
                />
                </div>
                <div>
                <Pie 
                    className="individual_chart"
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:true,
                            text:"Medals tally of Tokyo Olympics 2020",
                            fontSize:25 
                        },
                        legend:{
                            display:true,
                            position:"right"
                        }
                    }}
                />
                </div>
            </div>
        )
    }
}

export default Chart
