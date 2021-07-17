import React from 'react';
import {Card,CardGroup} from 'react-bootstrap';
import CountUp from "react-countup";

function DisplayGlobal(props){
    const { global_deaths,global_recovered,global_total_cases,update_date_time} =props.data;
    //console.log()
    return(
        <div className="Container">
            
            <CardGroup >
                <Card className="text-center" bg="Secondary"  style={{ margin : "2rem" ,borderEndEndRadius : "10%"}}>
                    
                    <Card.Body>
                    <Card.Title>Global_Total_Cases</Card.Title>
                    <Card.Text>
                        <CountUp 
                            start={0}
                            end ={global_total_cases}
                            duration={2.5}
                            separator=','
                        />
                        
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated   {update_date_time}</small>
                    </Card.Footer>
                </Card>
                <Card className="text-center" bg="Danger"  style={{ margin : "2rem",borderEndEndRadius : "10%"}}>

                    <Card.Body>
                    <Card.Title>Global_Deaths</Card.Title>
                    <Card.Text>
                        <CountUp 
                            start={0}
                            end ={global_deaths}
                            duration={2.5}
                            separator=','
                            
                        />
                        
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated {update_date_time}</small>
                    </Card.Footer>
                </Card>
                <Card className="text-center" bg="Info" style={{ margin : "2rem",borderEndEndRadius : "10%"}} >

                    <Card.Body>
                    <Card.Title>Global_Recovered</Card.Title>
                    <Card.Text>
                        <CountUp 
                            start={0}
                            end ={global_recovered}
                            duration={2.5}
                            separator=','
                        />
                       
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated {update_date_time}</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            
        </div>
    );
}
export default DisplayGlobal;