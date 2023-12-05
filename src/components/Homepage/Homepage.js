import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Alert,
	Badge,
	ProgressBar,
	Nav,
}from 'react-bootstrap';
import 'animate.css';
const Homepage  = () => {
	
	let title = "Wap Institute";
	let des = "Description";

	const data = {
		title:"Title Form Oject",
		des:"des Form Oject",
	}  

	const array = [1,2,3,4,5,6];
    
   const click = () =>{
    	alert();
    }

    const  mouseOver = () => {
    	alert('Over');
    } 

    const h1Css = {
    	color:"green",
    	backgroundColor:"yellow"
    } 

	const desing = (
      
      <>
       <h1 class="animate__animated animate__bounce" style={h1Css}>{title}</h1>
       <p>{des}</p>
       <p style={{color:"red",backgroundColor:"pink"}}>{data.title} AND {data.des} AND {JSON.stringify(data)}</p>
       <p>{array}{array[0]}</p>
       <button onClick={click}>Click me</button>
       <button onMouseOver={mouseOver}>Mouse Over me</button>
        <Alert variant='danger'>
          This is a   alert—check it out!
        </Alert>

        <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>

       <ProgressBar>
      <ProgressBar striped variant="success" now={15} key={1} />
      <ProgressBar variant="warning" now={20} key={2} />
      <ProgressBar striped variant="danger" now={10} key={3} />
    </ProgressBar>


     <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>

      </>
      

	);

	return desing;
}

export default Homepage;