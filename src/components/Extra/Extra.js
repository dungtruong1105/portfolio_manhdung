import { Container, Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { IoIosLink } from "react-icons/io";
import one from "../../Assets/Extra/1.jpg";
import one1 from "../../Assets/Extra/run.jpg";
import two from "../../Assets/Extra/2.jpg";
import three from "../../Assets/Extra/3.jpg";
import four from "../../Assets/Extra/4.jpg";
import gll from "../../Assets/Extra/gll.PNG";

import five from "../../Assets/Extra/5.jpg";
import six from "../../Assets/Extra/6.jpg";
import seven from "../../Assets/Extra/7.jpg";
import eight from "../../Assets/Extra/8.jpg";

import nine from "../../Assets/Extra/9.JPG";
import ten from "../../Assets/Extra/10.jpg";
import inten from "../../Assets/Extra/inten.jpg";
import eleven from "../../Assets/Extra/11.jpg";
import eleven1 from "../../Assets/Extra/111.jpg";

import twelve from "../../Assets/Extra/12.JPEG";
import thirteen from "../../Assets/Extra/13.JPEG";
import fourteen from "../../Assets/Extra/14.JPEG";
import fifteen from "../../Assets/Extra/15.JPEG";
import sixteen from "../../Assets/Extra/16.JPEG";

import seventeen from "../../Assets/Extra/17.jpg";
import eighteen from "../../Assets/Extra/18.jpg";
import nineteen from "../../Assets/Extra/19.jpg";
import twenty from "../../Assets/Extra/20.jpg";

import ex1 from "../../Assets/Extra/ex1.jpg";
import ex2 from "../../Assets/Extra/ex2.jpg";
import ex3 from "../../Assets/Extra/ex3.jpg";
import ex4 from "../../Assets/Extra/ex4.jpg";


import a from "../../Assets/Extra/a.jpg";
import b from "../../Assets/Extra/b.jpg";
import c from "../../Assets/Extra/c.jpg";
import d from "../../Assets/Extra/d.jpg";
import e from "../../Assets/Extra/e.jpg";
import runrun from "../../Assets/Extra/runrun.jpg";
import run1 from "../../Assets/Extra/run1.jpg";
import run2 from "../../Assets/Extra/run2.jpg";
import robot1 from "../../Assets/Extra/robot1.png";

function Extra() {
  return (
    <section>
      {/* nckh10 */}
      <Container fluid className="project-section" id="work">
        <h1 className="project-heading">
          Scientific research "Exploration & Creativity 2023"
        </h1>
        <Container>
          <Carousel>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={a}
                  alt="Work 1"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={b}
                  alt="Work 2"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={c}
                  alt="Work 3"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={d}
                  alt="Work 4"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={e}
                  alt="Work 5"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
        <div
          className="project-card-view"
          s
          style={{
            width: "50%",
            textAlign: "center",
            margin: "0 auto",
            marginTop: "30px",
          }}
        >
          <p>
            Two research topics in mathematics for 10th and 11th grade have
            shown me significant steps in the development of my personal
            academic abilities. I had the opportunity to work with leading
            mathematics professors, defending my thesis and presenting my work
            before the scientific committee of VNU University of Science. It was
            a journey that helped me learn and develop the mindset of a
            researcher. The results achieved exceeded my expectations.
          </p>
          <p>
            Grade 10: Contributed a chapter in the book "Exploration &
            Creativity" by VNU Publisher
          </p>
          <p>
            Grade 11: Special award for the topic "Some Methods for Solving
            Combinatorial Problems." The results of the project are in the
            process of being published in a 120-page book.
          </p>
        </div>
      </Container>
      {/* Khac */}
      <Container fluid className="project-section" id="work">
        <h1 className="project-heading">
          Robot for Supporting Tuberculosis Patients
        </h1>
        <Container>
          <Carousel>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={robot1}
                  alt="Work 1"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
        <div
          className="project-card-view"
          s
          style={{
            width: "50%",
            textAlign: "center",
            margin: "0 auto",
            marginTop: "30px",
          }}
        >
          <p>
            Developed an autonomous robot to support healthcare staff in
            tuberculosis treatment settings, reducing infection risk and
            enhancing care efficiency. The robot can transport essential items,
            automatically disinfect patient rooms, remotely monitor patient
            areas, and track environmental conditions like dust and humidity.
            Key technologies include Raspberry Pi 4, ESP32, and various air
            quality sensors. This project demonstrates the integration of smart
            robotics and IoT solutions in healthcare, supporting safe and
            efficient patient management.
          </p>
          <Button
            variant="primary"
            href={"https://youtu.be/9RkQbv-eAc4"}
            target="_blank"
            style={{
              marginTop: "20px",
            }}
          >
            <IoIosLink />
            Link
          </Button>
        </div>
      </Container>
      {/* gll */}
      <Container fluid className="project-section" id="work11">
        <h1 className="project-heading">
          GLOBLE LEADERSHIP LINK (GLL) Singapore{" "}
        </h1>
        <Container>
          <Carousel>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={five}
                  alt="Work 5"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={six}
                  alt="Work 6"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={seven}
                  alt="Work 7"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={eight}
                  alt="Work 8"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={gll}
                  alt="Work 8"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
        <p
          className="project-card-view"
          style={{
            width: "50%",
            textAlign: "center",
            margin: "0 auto",
            marginTop: "30px",
            display: "flex",
            flexDirection: "column", // Sắp xếp theo chiều dọc
            alignItems: "center", // Căn giữa theo chiều ngang
          }}
        >
          We are shared the research projects to notable scientists around the
          region about Developing an efficient AI-driven platform for disease
          detection using X-ray image analysis and Improving diagnostic
          accuracy, speed, and accessibility. We have the opportunity to connect
          with international friends from many countries in the region. Visit
          the top learning and scientific research environment in Singapore at
          NTU University.
          <Button
            variant="primary"
            href={"https://youtu.be/zhPlJOtB_O8?si=Ff9uvkBFpdMLj3pE"}
            target="_blank"
            style={{
              marginTop: "20px", // Thêm khoảng cách giữa nút và chữ
            }}
          >
            <IoIosLink />
            Link
          </Button>
        </p>
      </Container>
      {/*1411 */}
      <Container fluid className="project-section" id="work11">
        <h1 className="project-heading">
          Extracurricular Activity "Connecting with Love"
        </h1>
        <Container>
          <Carousel>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={ex1}
                  alt="Work 5"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={ex2}
                  alt="Work 6"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={ex3}
                  alt="Work 7"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={ex4}
                  alt="Work 8"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>

          </Carousel>
        </Container>
        <p
          className="project-card-view"
          style={{
            width: "50%",
            textAlign: "center",
            margin: "0 auto",
            marginTop: "30px",
            display: "flex",
            flexDirection: "column", // Sắp xếp theo chiều dọc
            alignItems: "center", // Căn giữa theo chiều ngang
          }}
        >
The "Connecting with Love" program involved gift-giving at Social Protection Center No. 2 in Hanoi, supporting the elderly, disabled, and those living alone. Scholarships with school supplies were given to disadvantaged students at Vien An Secondary School to encourage their studies. Additionally, the program included a tribute ceremony at Vien An Martyrs' Cemetery to honor and remember the heroes who sacrificed for the country.
        </p>
      </Container>
      {/* internship */}
      <Container fluid className="project-section" id="internship">
        <h1 className="project-heading">Internship</h1>
        <Container>
          <Carousel>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={twelve}
                  alt="Work 12"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={thirteen}
                  alt="Work 13"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={fourteen}
                  alt="Work 14"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={fifteen}
                  alt="Work 15"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={sixteen}
                  alt="Work 16"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={inten}
                  alt="Work 16"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
        <p
          className="project-card-view"
          s
          style={{
            width: "50%",
            textAlign: "center",
            margin: "0 auto",
            marginTop: "30px",
          }}
        >
          Two months of internship at MITALAB, a leading company in medical
          equipment, provided me with many experiences. I learned about work
          habits, professionalism, and gained an understanding of the basic
          theories of testing machine systems. The role of an installation,
          operation, and repair engineer helped me gain more direction for my
          future career.
        </p>
      </Container>
      {/* sos */}
      <Container fluid className="project-section" id="workSOS">
        <h1 className="project-heading">
          Mid-Autumn Festival at SOS Children's Village
        </h1>
        <Container>
          <Carousel>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={nine}
                  alt="Work 9"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={ten}
                  alt="Work 10"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={eleven}
                  alt="Work 11"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={eleven1}
                  alt="Work 11"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
      {/* chay gay quy */}
      <Container fluid className="project-section" id="work">
        <h1 className="project-heading">Race raises funds</h1>
        <Container>
          <Carousel>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={run1}
                  alt="Work 1"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={runrun}
                  alt="Work 1"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={one}
                  alt="Work 1"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={two}
                  alt="Work 2"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={three}
                  alt="Work 3"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={four}
                  alt="Work 4"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={one1}
                  alt="Work 1"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={run2}
                  alt="Work 1"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
        <p
          className="project-card-view"
          s
          style={{
            width: "50%",
            textAlign: "center",
            margin: "0 auto",
            marginTop: "30px",
          }}
        >
          "RUN FOR LIFE, RUN FOR CHILDREN" is my aspiration to contribute my
          part to a better life. My love for running has inspired me to share
          this with friends and family to cultivate a good habit, which also
          serves as a foundation to raise funds to support less fortunate
          patients and join hands with the community.
        </p>
      </Container>

      {/* chay */}
      <Container fluid className="project-section" id="running-events">
        <h1 className="project-heading">Running Events Participated</h1>
        <Container>
          <Carousel>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={seventeen}
                  alt="Event 17"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={eighteen}
                  alt="Event 18"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={nineteen}
                  alt="Event 19"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={twenty}
                  alt="Event 20"
                  style={{
                    maxHeight: "400px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
        <p
          className="project-card-view"
          s
          style={{
            width: "50%",
            textAlign: "center",
            margin: "0 auto",
            marginTop: "30px",
          }}
        >
          My daily habits are inspired by my mother. I run for health and hope
          to spread the habit of running to the community.
        </p>
      </Container>
    </section>
  );
}

export default Extra;
