import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        VillagerChooser
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Villager list
            </Link>
          </li>

          <NavDropdown title="Personality" id="basic-nav-dropdown">
            <NavDropdown.Item href="?personality=jock">Jock</NavDropdown.Item>
            <NavDropdown.Item href="?personality=sisterly">
              Sisterly
            </NavDropdown.Item>
            <NavDropdown.Item href="?personality=lazy">Lazy</NavDropdown.Item>
            <NavDropdown.Item href="?personality=peppy">Peppy</NavDropdown.Item>
            <NavDropdown.Item href="?personality=smug">Smug</NavDropdown.Item>
            <NavDropdown.Item href="?personality=normal">
              Normal
            </NavDropdown.Item>
            <NavDropdown.Item href="?personality=cranky">
              Cranky
            </NavDropdown.Item>
            <NavDropdown.Item href="?personality=snooty">
              Snooty
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Specie" id="basic-nav-dropdown">
            <NavDropdown.Item href="?specie=alligator">
              Alligator
            </NavDropdown.Item>
            <NavDropdown.Item href="?specie=anteater">
              Anteater
            </NavDropdown.Item>
            <NavDropdown.Item href="?specie=bear">Bear</NavDropdown.Item>
            <NavDropdown.Item href="?specie=bird">Bird</NavDropdown.Item>
            <NavDropdown.Item href="?specie=bull">Bull</NavDropdown.Item>
            <NavDropdown.Item href="?specie=cat">Cat</NavDropdown.Item>
            <NavDropdown.Item href="?specie=chicken">Chicken</NavDropdown.Item>
            <NavDropdown.Item href="?specie=cow">Cow</NavDropdown.Item>
            <NavDropdown.Item href="?specie=cub">Cub</NavDropdown.Item>
            <NavDropdown.Item href="?specie=deer">Deer</NavDropdown.Item>
            <NavDropdown.Item href="?specie=dog">Dog</NavDropdown.Item>
            <NavDropdown.Item href="?specie=duck">Duck</NavDropdown.Item>
            <NavDropdown.Item href="?specie=eagle">Eagle</NavDropdown.Item>
            <NavDropdown.Item href="?specie=elephant">
              Elephant
            </NavDropdown.Item>
            <NavDropdown.Item href="?specie=frog">Frog</NavDropdown.Item>
            <NavDropdown.Item href="?specie=goat">Goat</NavDropdown.Item>
            <NavDropdown.Item href="?specie=gorilla">Gorilla</NavDropdown.Item>
            <NavDropdown.Item href="?specie=hamster">Hamster</NavDropdown.Item>
            <NavDropdown.Item href="?specie=hippo">Hippo</NavDropdown.Item>
            <NavDropdown.Item href="?specie=horse">Horse</NavDropdown.Item>
            <NavDropdown.Item href="?specie=kangaroo">
              Kangaroo
            </NavDropdown.Item>
            <NavDropdown.Item href="?specie=koala">Koala</NavDropdown.Item>
            <NavDropdown.Item href="?specie=lion">Lion</NavDropdown.Item>
            <NavDropdown.Item href="?specie=monkey">Monkey</NavDropdown.Item>
            <NavDropdown.Item href="?specie=mouse">Mouse</NavDropdown.Item>
            <NavDropdown.Item href="?specie=octopus">Octopus</NavDropdown.Item>
            <NavDropdown.Item href="?specie=ostrich">Ostrich</NavDropdown.Item>
            <NavDropdown.Item href="?specie=penguin">Penguin</NavDropdown.Item>
            <NavDropdown.Item href="?specie=pig">Pig</NavDropdown.Item>
            <NavDropdown.Item href="?specie=rabbit">Rabbit</NavDropdown.Item>
            <NavDropdown.Item href="?specie=rhino">Rhino</NavDropdown.Item>
            <NavDropdown.Item href="?specie=sheep">Sheep</NavDropdown.Item>
            <NavDropdown.Item href="?specie=squirrel">
              Squirrel
            </NavDropdown.Item>
            <NavDropdown.Item href="?specie=tiger">Tiger</NavDropdown.Item>
            <NavDropdown.Item href="?specie=wolf">Wolf</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Birthmonth" id="basic-nav-dropdown">
            <NavDropdown.Item href="?birthmonth=january">
              January
            </NavDropdown.Item>
            <NavDropdown.Item href="?birthmonth=february">
              February
            </NavDropdown.Item>
            <NavDropdown.Item href="?birthmonth=march">March</NavDropdown.Item>
            <NavDropdown.Item href="?birthmonth=april">April</NavDropdown.Item>
            <NavDropdown.Item href="?birthmonth=may">May</NavDropdown.Item>
            <NavDropdown.Item href="?birthmonth=june">June</NavDropdown.Item>
            <NavDropdown.Item href="?birthmonth=july">July</NavDropdown.Item>
            <NavDropdown.Item href="?birthmonth=august">
              August
            </NavDropdown.Item>
            <NavDropdown.Item href="?birthmonth=september">
              September
            </NavDropdown.Item>
            <NavDropdown.Item href="?birthmonth=october">
              October
            </NavDropdown.Item>
            <NavDropdown.Item href="?birthmonth=november">
              November
            </NavDropdown.Item>
            <NavDropdown.Item href="?birthmonth=december">
              December
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Style" id="basic-nav-dropdown">
            <NavDropdown.Item href="?style=active">Active</NavDropdown.Item>
            <NavDropdown.Item href="?style=cool">Cool</NavDropdown.Item>
            <NavDropdown.Item href="?style=cute">Cute</NavDropdown.Item>
            <NavDropdown.Item href="?style=elegant">Elegant</NavDropdown.Item>
            <NavDropdown.Item href="?style=gorgeous">Gorgeous</NavDropdown.Item>
            <NavDropdown.Item href="?style=simple">Simple</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Color" id="basic-nav-dropdown">
            <NavDropdown.Item href="?color=beige">Beige</NavDropdown.Item>
            <NavDropdown.Item href="?color=black">Black</NavDropdown.Item>
            <NavDropdown.Item href="?color=blue">Blue</NavDropdown.Item>
            <NavDropdown.Item href="?color=brown">Brown</NavDropdown.Item>
            <NavDropdown.Item href="?color=colorful">Colorful</NavDropdown.Item>
            <NavDropdown.Item href="?color=gray">Gray</NavDropdown.Item>
            <NavDropdown.Item href="?color=green">Green</NavDropdown.Item>
            <NavDropdown.Item href="?color=light blue">
              Light Blue
            </NavDropdown.Item>
            <NavDropdown.Item href="?color=orange">Orange</NavDropdown.Item>
            <NavDropdown.Item href="?color=pink">Pink</NavDropdown.Item>
            <NavDropdown.Item href="?color=purple">Purple</NavDropdown.Item>
            <NavDropdown.Item href="?color=red">Red</NavDropdown.Item>
            <NavDropdown.Item href="?color=white">White</NavDropdown.Item>
            <NavDropdown.Item href="?color=yellow">Yellow</NavDropdown.Item>
          </NavDropdown>

          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Add villager
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/edit/:id" className="nav-link">
              Edit villager
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/remove/:id" className="nav-link">
              Delete villager
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
