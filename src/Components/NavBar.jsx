import {Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'
import {withRouter, Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
// #131921
const NavBar = () =>{
        return (
            <Navbar style={{backgroundColor:"#131921", color:"white"}} className="px-4" expand="lg">
                <Link to="/" className="navbar-brand" href="#">Shopizon</Link>
                <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor:"white",color:"lightpink"}} />
                <Navbar.Collapse id="navbarScroll" style={{color:"lightpink"}}>
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Link href="#action1">Home</Link>
                    <Link href="#action2">BackOffice</Link>
                    </Nav>
                    <div className="p-1" style={{backgroundColor:"#febd69",borderRadius:"10px",border:"none"}}>
                    <Form className="d-flex">
                    <NavDropdown title="All Departments" style={{backgroundColor:"lightgray",color:"rgba(0,0,0,.8)"}} id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                    
                            <FormControl type="search" placeholder="Search" className="mr-2"aria-label="Search"/>
                            <Button  style={{backgroundColor:"#febd69",border:"none"}}><AiOutlineSearch style={{fontSize:"25px", color:"black"}} width="30px" height="30px"/></Button>
                        </Form>
                        </div>
                </Navbar.Collapse>
            </Navbar>
                    )
    }
 
export default withRouter(NavBar)  ;