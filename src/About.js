import SidebarComponent from "./Components/MaterialDrawer";
import {useState} from "react";
import BasicFilteringGrid from "./Components/Filter";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
} from "shards-react";

function About() {
    const [activeOption, setActiveOption] = useState("About1");

    const sideMenu = ["About1", "About2", "About3"];
    return (
        <Container fluid>
            <Row>
                <Col lg="2">
                    <SidebarComponent
                        sideMenu={sideMenu}
                        setActiveOption={setActiveOption}
                    />
                </Col>
                <Col lg="10">
                    <Card
                        style={{
                            marginTop: "20px",
                        }}
                    >
                        <CardBody>
                            <div>
                                <h4>{activeOption}</h4>
                                <main>
                                    <BasicFilteringGrid />
                                </main>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
