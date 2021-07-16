import React from 'react';
import { Card,CardGroup ,Body,Row,col} from 'react-bootstrap';
import CountUp from 'react-countup';

function DisplayLocal(props){
    const { local_active_cases,local_deaths,local_new_cases,local_new_deaths,local_recovered,local_total_cases,local_total_number_of_individuals_in_hospitals,total_antigen_testing_count,total_pcr_testing_count,update_date_time} =props.data;
    let n=local_active_cases;
    console.log(local_recovered)
    return(
        <div className='container'>
            <div className="row">
            
                <Card  border="info" style={{ width: '15rem'  }}>
                    
                    <Card.Body>
                        <Card.Title> 
                        <CountUp 
                                start={0}
                                end={local_recovered}
                                duration ={2.5}
                                separator=','
                         >
                                
                            </CountUp>          
                        </Card.Title>
                        <Card.Text>
                          
                           Global Deaths
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }}>
                    
                    <Card.Body>
                        <Card.Title>
                        <CountUp 
                                start={0}
                                end={local_deaths}
                                duration ={2.5}
                                separator=','
                                >
                                
                            </CountUp>
                        </Card.Title>
                        <Card.Text>
                        global_new_deaths
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }} >
                    
                    <Card.Body>
                        <Card.Title><CountUp 
                                start={0}
                                end={local_new_cases}
                                duration ={2.5}
                                separator=',' >
                                
                            </CountUp></Card.Title>
                        <Card.Text>
                        global_new_cases
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card style={{ width: '15rem' }}>
                    
                    <Card.Body>
                        <Card.Title><CountUp 
                                start={0}
                                end={local_new_deaths}
                                duration ={2.5}
                                separator=',' >
                                
                            </CountUp></Card.Title>
                        <Card.Text>
                        global_recovered
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }}>
                    
                    <Card.Body>
                        <Card.Title>{update_date_time}</Card.Title>
                        <Card.Text>
                        Date
                        </Card.Text>
                    </Card.Body>
                </Card>
                

            </div>
            
        </div>
    );
}
export default DisplayLocal;