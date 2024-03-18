import React from "react";
import {Row, Col, Typography, Button, Space } from "antd";
import {
    FacebookOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
    TwitterOutlined,
    MessageOutlined,
    CopyOutlined,
    AppleOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
// import playStoreLogo from "../../assets/playStore_logo.svg";
// import Logo from "../../assets/virality-logo-svg.svg";

const Footer = () => {
  return (
    <div>
      <Row
        align="middle"
        justify="center"
        style={{
          background:
            "linear-gradient(to bottom, rgba(78, 121, 250, 0.1) 0%, rgba(78, 121, 250, 0.04) 100%)",
          borderRadius: "30px",
          width: "100%",
          margin: "16px 80px",
          padding: "30px 80px",
        }}
      >
        <Col span={24} md={12}>
          {/* <img
            onClick={() => window.scrollTo(0, 0)}
            src={Logo}
            alt="Virality"
            style={{
              height: "77px",
              width: "160px",
              cursor: "pointer",
            }}
          /> */}
          <Space direction="vertical" size={30} style={{ paddingLeft: "20px" }}>
            <Space size={20}>
              <a target="_blank" href="https://www.facebook.com/virality.media.inc">
                <FacebookOutlined style={{ fontSize: "24px" }} />
              </a>
              <a target="_blank" href="https://www.instagram.com/virality_media_inc/">
                <InstagramOutlined style={{ fontSize: "24px" }} />
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/virality-media-inc/">
                <LinkedinOutlined style={{ fontSize: "24px" }} />
              </a>
              <a target="_blank" href="https://twitter.com/Virality_Media_">
                <TwitterOutlined style={{ fontSize: "24px" }} />
              </a>
              <a target="_blank" href="https://www.youtube.com/channel/UCzzD-pvZKaHRvdcAmGGhsgg">
                <YoutubeOutlined style={{ fontSize: "24px" }} />
              </a>
              <a target="_blank" href="https://www.tiktok.com/@virality_media_inc?lang=en">
                <MessageOutlined style={{ fontSize: "24px" }} />
              </a>
            </Space>
            <Button
              size="large"
              type="primary"
              style={{
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                width: "180px",
              }}
              onClick={() => (window.location = "mailto:sayhello@virality-media.com")}
              title="sayhello@virality-media.com"
            >
              <MessageOutlined style={{ fontSize: "16px" }} />
              Contact us
            </Button>
            <Typography>
              <span>Copyright &nbsp;</span>
              <CopyOutlined style={{ fontSize: "16px" }} />
              <span>{new Date().getFullYear()}</span>
              <span>&nbsp;Zypper LMS</span>
            </Typography>
            <Typography>
              <Link to="/terms">Terms of Service</Link>
              <span style={{ padding: "0 5px", color: "grey" }}>|</span>
              <Link to="/privacypolicy">Privacy Policy</Link>
              <span style={{ padding: "0 5px", color: "grey" }}>|</span>
              <Link to="/help-support">Help & Support</Link>
            </Typography>
          </Space>
        </Col>
        <Col span={24} md={12}>
          <Space direction="vertical" size={30} style={{ alignItems: "center" }}>
            <Typography>Download our App</Typography>
            <Space size={20}>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.viralitymedia.virality"
              >
                <div
                  style={{
                    height: "70px",
                    width: "200px",
                    backgroundColor: "black",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  {/* <img src={playStoreLogo} alt="" /> */}
                  <div>
                    <Typography style={{ color: "white", fontSize: "10px" }}>
                      GET IT ON
                    </Typography>
                    <Typography style={{ color: "white", fontSize: "22px" }}>
                      Google Play
                    </Typography>
                  </div>
                </div>
              </a>
              <a
                target="_blank"
                href="https://apps.apple.com/in/app/virality-media/id6447242033"
              >
                <div
                  style={{
                    height: "70px",
                    width: "200px",
                    backgroundColor: "black",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <AppleOutlined  style={{ color: "white", fontSize: "47px" }} />
                  <div>
                    <Typography style={{ color: "white", fontSize: "10px" }}>
                      Download on the
                    </Typography>
                    <Typography style={{ color: "white", fontSize: "22px" }}>
                      App Store
                    </Typography>
                  </div>
                </div>
              </a>
            </Space>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
