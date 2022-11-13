import React, { useCallback, useRef, useState } from "react";
import DenyAccess from "../components/DenyAccess";
import { Box, Button, Typography } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import Graph from "../components/Graph";
import AuthService from "../services/AuthService";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Dashboard1 = () => {
  const [graphs, setGraphs] = useState([]);

  const addGraph = useCallback(
    ({ title, x, y, emotions }) => {
      setGraphs([{ title, x, y, emotions }, ...graphs]);
    },
    [graphs]
  );

  const [uploadLoading, setUploadLoading] = useState(false);

  const [initialLoading, setInitialLoading] = useState(true);
  const [initialLoaded, setInitialLoaded] = useState(false);

  const user = AuthService.user.userUuid;
  const spacing = 8;

  useEffect(() => {
    fetch(`http://localhost:5000/graphs?user=${user}`, {
      method: "GET",
    })
      .then((x) => x.json())
      .then((json) => {
        const data = json.data;

        // very scuffed way of accessing API data lol
        setGraphs(
          data.map((g) => {
            const dt = 1 / g[3];
            const timeline = [];
            for (let i = 0; i < g[2].length; i++) {
              timeline.push(i * dt);
            }

            return {
              title: g[5],
              x: timeline,
              y: g[2],
              emotions: g[4],
            };
          })
        );
      })
      .catch((e) => console.error(e))
      .finally(() => {
        setInitialLoaded(true);
        setInitialLoading(false);
      });
  }, [user]);

  // used to trigger input action when button is clicked
  const fileUploadRef = useRef();

  return (
    <DenyAccess when="loggedout" redirect="/login">
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <Navbar type="transparent" />

        <div
          style={{
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            padding: "2% 5%",
          }}
        >
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
          }}>
            <Typography marginBottom={spacing} variant="h3">Recognize Emotions</Typography>
            <Box
              marginBottom={spacing}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="file"
                accept=".mp3"
                id="audio-file"
                hidden
                ref={fileUploadRef}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setUploadLoading(true);
                    const formData = new FormData();

                    formData.append("file", file);
                    formData.append("filename", file.name);
                    formData.append("user", user);

                    fetch("http://localhost:5000/upload", {
                      method: "POST",
                      body: formData,
                      mode: "cors",
                    })
                      .then((r) => r.json())
                      .then((j) => {
                        const dt = 1 / j.sampling_freq;
                        const timeline = [];
                        for (let i = 0; i < j.waveform.length; i++) {
                          timeline.push(i * dt);
                        }

                        addGraph({
                          title: file.name,
                          x: timeline,
                          y: j.waveform,
                          emotions: j.emotions,
                        });
                      })
                      .catch((e) => console.log(e))
                      .finally(() => setUploadLoading(false));
                  }
                }}
              />
              <Button
                onClick={() => {
                  if (fileUploadRef.current) {
                    fileUploadRef.current.click();
                  }
                }}
                variant="contained"
              >
                <CloudUpload sx={{ mr: 1 }} />
                <Typography marginTop={0.5} sx={{ 
                  fontWeight: "800 !important", 
                  paddingX: "10px",
                }}>Upload audio file</Typography>
              </Button>
              {uploadLoading && <CircularProgress color="secondary" />}
            </Box>

            {graphs.length > 0 && (
              <div
                style={{
                  marginTop: "5vh",
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  overflowY: "scroll",
                  maxHeight: "80vh",
                  boxSizing: "border-box",
                  paddingBottom: "20vh",
                }}
              >
                {graphs.map((props) => {
                  const { title } = props;
                  return (
                    <div
                      style={{
                        width: "85%",
                        backgroundColor: "#4A465B",
                        borderRadius: "5px",
                        padding: "10px 3%",
                        paddingBottom: "50px",
                      }}
                    >
                      <h4 style={{ fontSize: "20px" }}>{title}</h4>
                      <Graph {...props} />
                    </div>
                  );
                })}
              </div>
            )}
            {initialLoaded && graphs.length === 0 && (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                }}
              >
                <h4 style={{ fontWeight:400, fontSize: "30px" }}>
                  It doesn't seem like you have any uploads at the moment!
                </h4>
              </div>
            )}
            {initialLoading && (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                }}
              >
                <CircularProgress color="secondary" />
              </div>
            )}
          </Box>
        </div>
      </div>
    </DenyAccess>
  );
};

export default Dashboard1;
