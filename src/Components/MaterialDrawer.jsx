import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DnsIcon from "@material-ui/icons/Dns";
import {Card, CardTitle, CardBody} from "shards-react";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: "auto",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const SidebarComponent = (props) => {
    const classes = useStyles();
    const listItems = props.sideMenu || ["All mail", "Trash", "Spam"];
    return (
        <Card style={{maxWidth: "300px", height: "100%", marginTop: "20px"}}>
            <CardBody>
                <CardTitle>Companies</CardTitle>
                <div className={classes.drawerContainer}>
                    <List>
                        {listItems.map((text, index) => (
                            <ListItem
                                button
                                key={text}
                                onClick={() => props.setActiveOption?.(text)}
                            >
                                <ListItemIcon>
                                    <DnsIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </CardBody>
        </Card>
    );
};
export default SidebarComponent;
