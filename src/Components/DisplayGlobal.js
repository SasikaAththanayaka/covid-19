import React from 'react';
import { Card,CardGroup ,Body,Row,col} from 'react-bootstrap';
import CountUp from 'react-countup';

function DisplayGlobal(props){
    const { global_deaths,global_new_deaths,global_new_cases,global_recovered,global_total_cases} =props.data;
    //console.log()
    return(
        <div className='container'>
            <div className="row">
            
                <Card style={{ width: '15rem' }}>
                    
                    <Card.Body>
                        <Card.Title> 
                        <CountUp 
                                start={0}
                                end={global_deaths}
                                duration ={2.5}
                                separator=',' >
                                
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
                                end={global_new_deaths}
                                duration ={2.5}
                                separator=',' >
                                
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
                                end={global_new_cases}
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
                                end={global_recovered}
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
                        <Card.Title>
                            <CountUp 
                                start={0}
                                end={global_total_cases}
                                duration ={2.5}
                                separator=',' />
                                
                            </Card.Title>
                        <Card.Text>
                        global_total_cases
                        </Card.Text>
                    </Card.Body>
                </Card>
                

            </div>
            
        </div>
    );
}
export default DisplayGlobal;