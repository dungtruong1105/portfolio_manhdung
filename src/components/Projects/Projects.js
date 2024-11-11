import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/2.png";
import suicide from "../../Assets/Projects/4.jpg";
import bitsOfCode from "../../Assets/Projects/5.png";
import eight from "../../Assets/Projects/8.png";
import one from "../../Assets/Projects/1.png";
import six from "../../Assets/Projects/6.png";
import seven from "../../Assets/Projects/7.png";
import { FaMedal } from "react-icons/fa";
import nine from "../../Assets/Projects/9.png";
import ten from "../../Assets/Projects/10.PNG";
import eleven from "../../Assets/Projects/11.PNG";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleOpenModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Honors</strong> &{" "}
          <strong className="purple">Awards</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some awards and honors I have received.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eight}
              isBlog={false}
              title="Gold Medal Certificate in HSGS Olympiad 2023"
              description="The HSGS Olympiad is a prestigious contest attracting top students nationwide"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Journal of Advanced Research"
              description="The article was published in the international Journal of Advanced Research in Computer Science – IJARCS that manuscript entitled “A Classification method for Insects using Data Augmentation and Deep Neural Networks” has been published in Volume 15 issue 2 March – April 2024"
              ghLink="https://www.ijarcs.info/index.php/Ijarcs/article/view/7070?zarsrc=30&utm_source=zalo&utm_medium=zalo&utm_campaign=zalo"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI – JAM US 2024"
              description="The Gold medal at “Competition International AI innovation and research” organized by AI – JAM US 2024, project “AIoT Air Quality Monitoring”."
              ghLink="https://www.aijam-us.com/"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              isYoutube={true}
              title="Exploration Creativity Contest 2024"
              description="The Special prize in Mathematic at Exploration Creativity Contest 2024 organized by VNU University of Science."
              ghLink="https://daibieunhandan.vn/hoc-sinh-duoc-trai-nghiem-thanh-nha-khoa-hoc-qua-cuoc-thi-kham-pha-va-sang-tao-toan-hoc-post372088.html"
              demoLink=""
              youtubeLink="https://www.youtube.com/watch?v=qojY6g0sZvM"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={one}
              isBlog={false}
              title="INOVA Crotia 2024"
              description=""
              demoLink=""
            />
          </Col>
        </Row>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div>
            <p style={{ color: "white", textAlign: "center" }}>OTHERS:</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column", // Để các nút xếp theo cột
                alignItems: "flex-start", // Căn trái các nút
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <Button
                variant="outline-light"
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  width: "100%", // Chiều rộng 100% cho nút
                }}
                onClick={() => handleOpenModal(nine)}
              >
                <FaMedal style={{ marginRight: "8px" }} />
                Iranian Geometry Olympiad 8th
              </Button>
              <Button
                variant="outline-light"
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  width: "100%", // Chiều rộng 100% cho nút
                }}
                onClick={() => handleOpenModal(ten)}
              >
                <FaMedal style={{ marginRight: "8px" }} />
                Hanoi math excellent students exam- Grade 9
              </Button>
              <Button
                variant="outline-light"
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  width: "100%", // Chiều rộng 100% cho nút
                }}
                onClick={() => handleOpenModal(eleven)}
              >
                <FaMedal style={{ marginRight: "8px" }} />
                Contest for excellent math students in Cau Giay district-Grade 9
              </Button>
              <Button
                variant="outline-light"
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  width: "100%", // Chiều rộng 100% cho nút
                }}
                onClick={() => handleOpenModal(six)}
              >
                <FaMedal style={{ marginRight: "8px" }} />
                Certificate of Excellence - Mathematics - Grade 10
              </Button>

              <Button
                variant="outline-light"
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  width: "100%", // Chiều rộng 100% cho nút
                }}
                onClick={() => handleOpenModal(seven)}
              >
                <FaMedal style={{ marginRight: "8px" }} />
                Certificate of Excellence - Mathematics - Grade 11
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {modalImage && (
            <img
              src={modalImage}
              alt="Award"
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Particle />
    </Container>
  );
}

export default Projects;
