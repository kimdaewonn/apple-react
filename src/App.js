import "./App.css";
import { useState } from "react";

function App() {
    let [글제목, 글제목변경] = useState([
        "남자 코트 추천",
        "강남 우동맛집",
        "파이썬독학",
    ]);
    let [따봉, 따봉변경] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);

    return (
        <>
            <div>
                {글제목.map(function (a, i) {
                    return (
                        <div className="list" key={i}>
                            <h4
                                onClick={() => {
                                    let copy = [...따봉];
                                    copy[i] = copy[i] + 1;
                                    따봉변경(copy);
                                }}
                            >
                                {글제목[i]}★{따봉[i]}
                            </h4>
                            <p>2월 18일 발행</p>
                        </div>
                    );
                })}
            </div>
            <button
                onClick={() => {
                    setModal(!modal);
                }}
            >
                {글제목[0]}
            </button>
            <div>{modal === true ? <Modal /> : null}</div>
        </>
    );
}

function Modal() {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}
export default App;
