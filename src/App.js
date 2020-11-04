import React, {useState, useEffect} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './App.css';


function App(props) {

  const [title, pageTitle] = useState('Home Page')
  const [labelName, setlabel] = useState('MORE DETAILS')
  const [id, setId] = useState('4')
	const [name, setName] = useState('Leanne Graham')
	const [username, setUsername] = useState('Bret')
	const [email, setEmail] = useState('Sincere@april.biz')
	const [phone, setPhone] = useState('493-170-9623 x156')
	const [company, setCompany] = useState('Robel-Corkery')
	const [website, setWebsite] = useState('kale.biz')
	const [street, setStreet] = useState('Kulas Light')
	const [suite, setSuite] = useState('Apt. 556')
	const [city, setCity] = useState('Gwenborough')
	const [zipcode, setZipcode] = useState('92998-3874')
	const [lat, setLat] = useState('-37.3159')
  const [lng, setLng] = useState('81.1496')


  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className="App">
      <h1>{title}</h1>
      <br></br>
        <main className="App-main">
            <article className="App-article">
                <div className="App-card">
                    <div className="User-avatar">
                        <svg width="100" height="100">
                            <circle cx="50" cy="50" r="50" fill="#e0e0e0" />
                                <text x="50%" y="50%" text-anchor="middle" fill="black" font-size="50px" font-family="Arial" dy=".3em">P</text>
                        </svg>
                    </div>
                    <div className="App-card-content">
                        <h2>Patricia Lebsack</h2>
                        <h3>@Karianne</h3>
                        <h4>kale.biz</h4>
                    </div>
                    <Button variant="primary" onClick={toggle}>{labelName}</Button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                      <ModalHeader toggle={toggle}>User Info</ModalHeader>
                      <ModalBody>
                        <ul>
					                <li>Name: {name}</li>
	  				              <li>Username: {username}</li>
					                <li>Email: {email}</li>
					                <li>Phone: {phone}</li>
					                <li>Company: {company}</li>
					                <li>Website: {website}</li>
					                <li>Address: 
						                <ul>
							                  <li>Street: {street}</li>
							                  <li>Suite: {suite}</li>
							                  <li>City: {city}</li>
							                  <li>Zipcode: {zipcode}</li>
						                </ul>
					                </li>
					                <li>Geo: 
						                  <ul>
							                  <li>Lat: {lat}</li>
							                  <li>Lng: {lng}</li>
						                  </ul>
					                </li>
				                </ul>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={toggle}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                </div>
            </article>
            <article className="App-article">
                <div className="App-card">
                    <div className="User-avatar">
                        <svg width="100" height="100">
                            <circle cx="50" cy="50" r="50" fill="#e0e0e0" />
                                <text x="50%" y="50%" text-anchor="middle" fill="black" font-size="50px" font-family="Arial" dy=".3em">G</text>
                        </svg>
                    </div>
                    <div className="App-card-content">
                        <h2>Glenna Reichert</h2>
                        <h3>@Delphine</h3>
                        <h4>conrad.com</h4>
                    </div>
                    <Button variant="primary" onClick={toggle}>{labelName}</Button>
                </div>
            </article>
            <article className="App-article">
                <div className="App-card">
                    <div className="User-avatar">
                        <svg width="100" height="100">
                            <circle cx="50" cy="50" r="50" fill="#e0e0e0" />
                                <text x="50%" y="50%" text-anchor="middle" fill="black" font-size="50px" font-family="Arial" dy=".3em">N</text>
                        </svg>
                    </div>
                    <div className="App-card-content">
                        <h2>Clementina DuBuque</h2>
                        <h3>@Moriah.Stanton</h3>
                        <h4>ambrose.net</h4>
                    </div>
                    <Button variant="primary" onClick={toggle}>{labelName}</Button>
                </div>
            </article>
            <article className="App-article">
                <div className="App-card">
                    <div className="User-avatar">
                        <svg width="100" height="100">
                            <circle cx="50" cy="50" r="50" fill="#e0e0e0" />
                                <text x="50%" y="50%" text-anchor="middle" fill="black" font-size="50px" font-family="Arial" dy=".3em">E</text>
                        </svg>
                    </div>
                    <div className="App-card-content">
                        <h2>Ervin Howell</h2>
                        <h3>@Antonette</h3>
                        <h4>anastasia.net</h4>
                    </div>
                    <Button variant="primary" onClick={toggle}>{labelName}</Button>
                </div>
            </article>
            <article className="App-article">
                <div className="App-card">
                    <div className="User-avatar">
                        <svg width="100" height="100">
                            <circle cx="50" cy="50" r="50" fill="#e0e0e0" />
                                <text x="50%" y="50%" text-anchor="middle" fill="black" font-size="50px" font-family="Arial" dy=".3em">L</text>
                        </svg>
                    </div>
                    <div className="App-card-content">
                        <h2>Leanne Graham</h2>
                        <h3>@Bret</h3>
                        <h4>hildegard.org</h4>
                    </div>
                    <Button variant="primary" onClick={toggle}>{labelName}</Button>
                </div>
            </article>
            <article className="App-article">
                <div className="App-card">
                    <div className="User-avatar">
                        <svg width="100" height="100">
                            <circle cx="50" cy="50" r="50" fill="#e0e0e0" />
                                <text x="50%" y="50%" text-anchor="middle" fill="black" font-size="50px" font-family="Arial" dy=".3em">C</text>
                        </svg>
                    </div>
                    <div className="App-card-content">
                        <h2>Clementine Bauch</h2>
                        <h3>@Samantha</h3>
                        <h4>ramiro.info</h4>
                    </div>
                    <Button variant="primary" onClick={toggle}>{labelName}</Button>
                </div>
            </article>
        </main>
    </div>
  );
}

export default App;
