import "./App.css";
import { useState } from "react";

function App() {
    let [title, setTitle] = useState(0);
    let [글제목, 글제목변경] = useState([
        "남자 코트 추천",
        "강남 우동맛집",
        "파이썬독학",
    ]);
    let [따봉, 따봉변경] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [입력값, 입력값변경] = useState("");

    return (
        <>
            <div>
                {글제목.map((e, i) => {
                    return (
                        <div className="list" key={i}>
                            <h4
                                onClick={() => {
                                    setModal(!modal);
                                    setTitle(i);
                                }}
                            >
                                <span
                                    onClick={() => {
                                        let copy = [...따봉];
                                        copy[i] = copy[i] + 1;
                                        따봉변경(copy);
                                    }}
                                >
                                    {글제목[i]}★{따봉[i]}
                                </span>
                            </h4>

                            <p>2월 18일 발행</p>
                            <button
                                onClick={() => {
                                    let copy = [...글제목];
                                    copy.splice(i, 1);
                                    글제목변경(copy);
                                }}
                            >
                                글삭제
                            </button>
                        </div>
                    );
                })}
            </div>
            <div>
                {modal === true ? (
                    <Modal 글제목={글제목} title={title} />
                ) : null}
            </div>
            <input
                onChange={(e) => {
                    입력값변경(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    let copy = [...글제목];
                    copy.unshift(입력값);
                    글제목변경(copy);
                }}
            >
                글발행
            </button>
        </>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h4>{props.글제목[props.title]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}
export default App;
