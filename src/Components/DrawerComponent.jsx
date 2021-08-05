import React, {useState} from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SidebarComponent from "./MaterialDrawer";
import {Container, Row, Col} from "shards-react";

export default function ClippedDrawer() {
    const [active, setActive] = useState("Item 1");

    return (
        <Container fluid>
            <Row>
                <Col lg="2">
                    <SidebarComponent
                        sideMenu={[
                            "Item 1",
                            "Item 2",
                            "Item 3",
                            "Item 4",
                            "Item 5",
                        ]}
                        setActiveOption={setActive}
                    />
                </Col>
                <Col lg="10">
                    <h4 style={{marginTop: '50px'}}>{active}</h4>
                    <main>
                        <Toolbar />
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Rhoncus dolor purus non enim
                            praesent elementum facilisis leo vel. Risus at
                            ultrices mi tempus imperdiet. Semper risus in
                            hendrerit gravida rutrum quisque non tellus.
                            Convallis convallis tellus id interdum velit laoreet
                            id donec ultrices. Odio morbi quis commodo odio
                            aenean sed adipiscing. Amet nisl suscipit adipiscing
                            bibendum est ultricies integer quis. Cursus euismod
                            quis viverra nibh cras. Metus vulputate eu
                            scelerisque felis imperdiet proin fermentum leo.
                            Mauris commodo quis imperdiet massa tincidunt. Cras
                            tincidunt lobortis feugiat vivamus at augue. At
                            augue eget arcu dictum varius duis at consectetur
                            lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                            donec massa sapien faucibus et molestie ac.
                        </Typography>
                        <Typography paragraph>
                            Consequat mauris nunc congue nisi vitae suscipit.
                            Fringilla est ullamcorper eget nulla facilisi etiam
                            dignissim diam. Pulvinar elementum integer enim
                            neque volutpat ac tincidunt. Ornare suspendisse sed
                            nisi lacus sed viverra tellus. Purus sit amet
                            volutpat consequat mauris. Elementum eu facilisis
                            sed odio morbi. Euismod lacinia at quis risus sed
                            vulputate odio. Morbi tincidunt ornare massa eget
                            egestas purus viverra accumsan in. In hendrerit
                            gravida rutrum quisque non tellus orci ac.
                            Pellentesque nec nam aliquam sem et tortor. Habitant
                            morbi tristique senectus et. Adipiscing elit duis
                            tristique sollicitudin nibh sit. Ornare aenean
                            euismod elementum nisi quis eleifend. Commodo
                            viverra maecenas accumsan lacus vel facilisis. Nulla
                            posuere sollicitudin aliquam ultrices sagittis orci
                            a.
                        </Typography>
                        <Typography paragraph>
                            Consequat mauris nunc congue nisi vitae suscipit.
                            Fringilla est ullamcorper eget nulla facilisi etiam
                            dignissim diam. Pulvinar elementum integer enim
                            neque volutpat ac tincidunt. Ornare suspendisse sed
                            nisi lacus sed viverra tellus. Purus sit amet
                            volutpat consequat mauris. Elementum eu facilisis
                            sed odio morbi. Euismod lacinia at quis risus sed
                            vulputate odio. Morbi tincidunt ornare massa eget
                            egestas purus viverra accumsan in. In hendrerit
                            gravida rutrum quisque non tellus orci ac.
                            Pellentesque nec nam aliquam sem et tortor. Habitant
                            morbi tristique senectus et. Adipiscing elit duis
                            tristique sollicitudin nibh sit. Ornare aenean
                            euismod elementum nisi quis eleifend. Commodo
                            viverra maecenas accumsan lacus vel facilisis. Nulla
                            posuere sollicitudin aliquam ultrices sagittis orci
                            a.
                        </Typography>
                    </main>
                </Col>
            </Row>
        </Container>
    );
}
