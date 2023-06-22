
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div style={{marginBottom:"70px"}}    >
      
            <Navbar   variant="dark"   expand="lg" className="fixed-top"style={{backgroundColor:'#2f4766'/* '#cecbdb' */}} >
            
                <div className="container-fluid" style={{backgroundColor:'#05101c', color:'green',fontSize:'20px'}} >
                    
                <Navbar.Brand href="#home" ><i style={{width:'120px',color:'white',backgroundColor:'black',fontSize:'30px',fontWeight:'30px',border:'5px solid black',borderRadius:'20%'}}><span style={{color:'green'}}>E</span>Commerce</i></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link as={Link} to={"/eCommerce"} >Home</Nav.Link>
                    <Nav.Link as={Link} to={"/eCommerce/products"} >Products</Nav.Link>
                   
                  
                    </Nav>
                     
                </Navbar.Collapse>
                </div>
                
            </Navbar>

          
        </div>
  );
}

export default NavBar;
