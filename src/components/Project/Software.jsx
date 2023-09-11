import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ChevronRightRounded from "@material-ui/icons/ChevronRightRounded";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useWideCardMediaStyles } from "@mui-treasury/styles/cardMedia/wide";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";
import SoftwareImage from '../../img/software.jpg';


const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 304,
        width: 400,
        margin: "auto",
        borderRadius: 30,
        boxShadow: 'inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)'
    },
    content: {
        padding: 24,
        color: 'black',
        fontFamily: "Roboto-Regular",
        fontSize: 14,
        textAlign: 'center',
    },
    button: {
        textTransform: "initial",
        color: '#106eea',
        fontSize: 16,
        fontFamily: "Roboto-Bold",
        marginTop: '20px'
    }
}));

export const Software = React.memo(function NewsCard() {
    const styles = useStyles();
    const mediaStyles = useWideCardMediaStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    const shadowStyles = useBouncyShadowStyles();

    return (
        <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia classes={mediaStyles} image={SoftwareImage} />
            <CardContent className={styles.content}>
                <TextInfoContent
                    classes={textCardContentStyles}
                    heading={"Dự Án Phần Mềm"}
                    body={
                        "Dự án Quản lý Nguồn nhân lực (HRM): Xây dựng một phần mềm hỗ trợ quản lý thông tin nhân viên, quản lý tiến trình tuyển dụng, quản lý lương bổng và tổ chức đào tạo nhân viên."
                    }
                />
                <Button color={"primary"} fullWidth className={styles.button}>
                    Xem thêm <ChevronRightRounded />
                </Button>
            </CardContent>
        </Card>
    );
}
);

export default Software;
