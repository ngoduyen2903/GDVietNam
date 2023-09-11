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
import MobileImage from '../../img/mobileapp.jpg';

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

export const Mobile = React.memo(function NewsCard() {
    const styles = useStyles();
    const mediaStyles = useWideCardMediaStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    const shadowStyles = useBouncyShadowStyles();

    return (
        <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia classes={mediaStyles} image={MobileImage} />
            <CardContent className={styles.content}>
                <TextInfoContent
                    classes={textCardContentStyles}
                    heading={"Dự Án Mobile App"}
                    body={
                        "Dự án E-commerce App: Ứng dụng mua sắm trực tuyến cho phép người dùng duyệt, tìm kiếm và mua hàng từ các cửa hàng trực tuyến."
                    }
                />
                <Button fullWidth className={styles.button}>
                    Xem thêm <ChevronRightRounded />
                </Button>
            </CardContent>
        </Card>
    );
}
);

export default Mobile;
