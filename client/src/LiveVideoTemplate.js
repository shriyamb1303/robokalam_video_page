import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Button, Badge } from "react-bootstrap";
import { FaSadTear, FaMeh, FaSmile, FaGrinHearts } from "react-icons/fa";
import Webcam from "react-webcam";
import ReactPlayer from "react-player";

const LiveVideoTemplate = () => {
    const [emotion, setEmotion] = useState("");
    const [videoURL, setVideoURL] = useState("");
    const webcamRef = React.useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("http://localhost:3001/api/emotion");
            setEmotion(result.data.emotion);
            setVideoURL(result.data.videoURL);
        };
        fetchData();
    }, []);

    const handleEmotion = async (e) => {
        const screenshot = webcamRef.current.getScreenshot();
        const { data } = await axios.post("/api/emotion", {
            emotion: e.target.value,
            screenshot: screenshot,
        });
        setEmotion(data.emotion);
    };

    const sadEmotion = async () => {
        try {
            const response = await axios.put("http://localhost:3001/api/sademotion", { emotion: "sad" });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const nuetralEmotion = async () => {
        try {
            const response = await axios.put("http://localhost:3001/api/nuetralemotion", { emotion: "neutral" });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const happyEmotion = async () => {
        try {
            const response = await axios.put("http://localhost:3001/api/happyemotion", { emotion: "happy" });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const ecstaticEmotion = async () => {
        try {
            const response = await axios.put("http://localhost:3001/api/ecstaticemotion", { emotion: "ecstatic" });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <Row>
                <Col md={4}>
                    <ReactPlayer url={videoURL} controls />
                </Col>
                <Col md={4}>
                    <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
                    <h2>{emotion}</h2>
                </Col>
                <Col md={4}>
                    <h2>Emotional Status:</h2>
                    <Button
                        variant="light"
                        className="m-1"
                        value="sad"
                        onClick={sadEmotion}
                    >
                        <FaSadTear />
                        {emotion === "sad" && <Badge variant="danger">Selected</Badge>}
                    </Button>
                    <Button
                        variant="light"
                        className="m-1"
                        value="neutral"
                        onClick={nuetralEmotion}
                    >
                        <FaMeh />
                        {emotion === "neutral" && (
                            <Badge variant="warning">Selected</Badge>
                        )}
                    </Button>
                    <Button
                        variant="light"
                        className="m-1"
                        value="happy"
                        onClick={happyEmotion}
                    >
                        <FaSmile />
                        {emotion === "happy" && <Badge variant="success">Selected</Badge>}
                    </Button>
                    <Button
                        variant="light"
                        className="m-1"
                        value="ecstatic"
                        onClick={ecstaticEmotion}
                    >
                        <FaGrinHearts />
                        {emotion === "ecstatic" && (
                            <Badge variant="info">Selected</Badge>
                        )}
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default LiveVideoTemplate;
