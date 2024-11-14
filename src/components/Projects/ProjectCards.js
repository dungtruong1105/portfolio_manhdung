import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { IoIosLink } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ height: "100%" }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        </div>

        <div style={{ marginTop: "auto" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <IoIosLink /> &nbsp;
            {props.isBlog ? "Blog" : "Link"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}

          {props.isYoutube && (
            <Button
              variant="danger"
              href={props.youtubeLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <FaYoutube /> &nbsp; YouTube
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
