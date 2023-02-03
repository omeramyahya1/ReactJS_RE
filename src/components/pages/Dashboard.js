import React from "react";
import { Card } from "../Card";
import Navbar from "../Navbar";
import "./Dashboard.css";

function Dashboard() {
  // could be a function that takes data from database
  // for now this is just a grid of 4 apartments.

  return (
    <>
      <Navbar />

      <div className="grid-container">
        <div className="card-1">
          <Card
            img_path="/images/aptm-2.jpg"
            status={"Rented"}
            price="500,000"
            location="Dubai - JBR"
          />
        </div>
        <div className="card-2">
          <Card
            img_path="/images/aptm-3.jpg"
            status={"Rented"}
            price="750,000"
            location="Dubai - Business bay-1"
          />
        </div>
        <div className="card-3">
          <Card
            img_path="/images/aptm-4.jpg"
            status={"Rented"}
            price="750,000"
            location="Dubai - International City"
          />
        </div>
        <div className="card-4">
          <Card
            img_path="/images/aptm-1.jpg"
            status={"Rented"}
            price="250,000"
            location="Dubai - Business bay-1"
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;

{
  /* <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          aliquet tempus ex non sollicitudin. Morbi imperdiet luctus sem, ac
          aliquet sem luctus vel. Mauris placerat justo nisl, non efficitur nisi
          iaculis ut. Nullam blandit malesuada eleifend. Praesent maximus odio
          ut mi scelerisque, ac tristique libero mollis. Ut fermentum ligula in
          ipsum iaculis iaculis. Donec in ex tempus, bibendum felis ultrices,
          rhoncus elit. Aenean massa odio, vehicula nec felis eget, suscipit
          consequat nunc. Cras mattis tincidunt mauris ac tincidunt. Cras a ex
          nec mi posuere auctor vitae nec velit. Quisque elementum scelerisque
          ipsum eget bibendum. Aliquam in ex sit amet diam consectetur mollis.
          Integer pellentesque accumsan purus in pulvinar. In sed neque non ante
          consequat euismod. Nunc fermentum mattis sapien, et faucibus leo
          placerat non. Integer viverra tellus sed egestas porta.
        </div>
        <div>
          Nunc venenatis ex eu rutrum tincidunt. Aenean lobortis massa nec massa
          tincidunt hendrerit. Nam turpis dui, mollis vel nunc vitae, efficitur
          consequat arcu. Etiam dapibus ipsum est, eu sagittis quam molestie id.
          Quisque vitae ex consectetur, euismod eros ut, eleifend est. Morbi
          fermentum sapien consectetur orci rutrum, sit amet aliquam magna
          auctor. Integer luctus varius porttitor.
        </div>
        <div>
          Ut non velit et nulla condimentum ultrices. Integer magna augue,
          volutpat ut ligula sit amet, venenatis accumsan nulla. Sed vel
          tristique est. Etiam eget neque dui. Fusce auctor dapibus purus, ut
          sodales mi aliquam at. Donec consequat, diam sed tincidunt luctus,
          quam dui tincidunt ex, nec viverra nisi nulla sed erat. Vestibulum id
          pharetra ex. Suspendisse molestie consequat sapien, nec placerat urna
          varius a. Ut vehicula ligula dolor, vitae porta nulla aliquet quis.
          Morbi vitae leo velit. Integer ut auctor mauris. Praesent ornare et
          nibh ac tempus.
        </div>
        <div>
          Proin mattis lacinia faucibus. Nunc nec auctor libero. Phasellus
          viverra et ipsum at molestie. Aliquam quis accumsan leo, vitae egestas
          nibh. Pellentesque sollicitudin felis sem, non lacinia ipsum congue
          non. Aliquam aliquam hendrerit dictum. Aenean et ex nec augue
          consectetur semper aliquet malesuada magna. Nulla at purus et sem
          dignissim vehicula non sodales dui. In convallis vel nulla sed
          laoreet. Sed ut imperdiet nisl. Curabitur ac libero luctus, malesuada
          risus et, faucibus tortor. Etiam ut volutpat erat.
        </div>
        <div>Hello</div>
 */
}
