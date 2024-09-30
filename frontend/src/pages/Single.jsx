import React from "react";
import Menu from "../components/Menu";
import Edit from "../imgs/edit.png";
import Delete from "../imgs/delete.png";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/26836559/pexels-photo-26836559/free-photo-of-foamy-wave-crashing-onto-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            quaerat, deserunt rerum explicabo voluptatibus autem quidem dolorem
            cumque vitae velit dicta impedit doloremque odio iste? Quam, omnis?
            Laborum, dicta maiores. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            quaerat, deserunt rerum explicabo voluptatibus autem quidem dolorem
            cumque vitae velit dicta impedit doloremque odio iste? Quam, omnis?
            Laborum, dicta maiores. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus inventore veritatis, neque, quasi
            consectetur, adipisci qui aliquam cum accusantium optio nemo dolores
            porro! Veniam odio ad consequatur obcaecampedit! Praesentium rem
            quod culpa ad voluptate, officia aliquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            quaerat, deserunt rerum explicabo voluptatibus autem quidem dolorem
            cumque vitae velit dicta impedit doloremque odio iste? Quam, omnis?
            Laborum, dicta maiores. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus inventore veritatis, neque, quasi
            consectetur, adipisci qui aliquam cum accusantium optio nemo dolores
            porro! Veniam odio ad consequatur obcaecampedit! Praesentium rem
            quod culpa ad voluptate, officia aliquam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            quaerat, deserunt rerum explicabo voluptatibus autem quidem dolorem
            cumque vitae velit dicta impedit doloremque odio iste? Quam, omnis?
            Laborum, dicta maiores. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus inventore veritatis, neque, quasi
            consectetur, adipisci qui aliquam cum accusantium optio nemo dolores
            porro! Veniam odio ad consequatur obcaecampedit! Praesentium rem
            quod culpa ad voluptate, officia aliquam?
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
