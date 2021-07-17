import React from 'react';
import {Card,CardGroup} from 'react-bootstrap'
import CountUp from "react-countup";
function DisplayLocal(props){
    const { local_active_cases,local_deaths,local_new_cases,local_new_deaths,local_recovered,local_total_cases,local_total_number_of_individuals_in_hospitals,total_antigen_testing_count,total_pcr_testing_count,update_date_time} =props.data;
    return(
        <div className="Container " >
            
            <CardGroup >
                <Card className="text-center" border="dark" bg="Primary"  style={{ margin : "2rem", borderEndEndRadius : "10%"}}>
                    
                    <Card.Body>
                    <Card.Title>Local_Active_Cases</Card.Title>
                    <Card.Text>
                        <CountUp 
                            start={0}
                            end ={local_active_cases}
                            duration={2.5}
                            separator=','
                        />
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated   {update_date_time}</small>
                    </Card.Footer>
                </Card>
                <Card className="text-center" border="dark" bg="Primary"  style={{ margin : "2rem", borderEndEndRadius : "10%"}}>
                    
                    <Card.Body>
                    <Card.Title>Local_Total_Cases</Card.Title>
                    <Card.Text>
                        <CountUp 
                            start={0}
                            end ={local_total_cases}
                            duration={2.5}
                            separator=','
                        />
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated   {update_date_time}</small>
                    </Card.Footer>
                </Card>
                <Card className="text-center" border="dark" bg="Danger"  style={{ margin : "2rem",borderEndEndRadius : "10%"}}>

                    <Card.Body>
                    <Card.Title>Local_Deaths</Card.Title>
                    <Card.Text>
                        <CountUp 
                            start={0}
                            end ={local_deaths}
                            duration={2.5}
                            separator=','
                        />
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated {update_date_time}</small>
                    </Card.Footer>
                </Card>
                <Card className="text-center" border="dark" bg="Info" style={{ margin : "2rem",borderEndEndRadius : "20%",borderEndEndRadius : "10%"}} >

                    <Card.Body>
                    <Card.Title>Local_Recovered</Card.Title>
                    <Card.Text>
                        <CountUp 
                            start={0}
                            end ={local_recovered}
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
export default DisplayLocal;