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
                        </div>
                    );
                })}
            </div>
            <div>
                {modal === true ? (
                    <Modal 글제목={글제목} title={title} />
                ) : null}
            </div>
        </>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h4>{props.글제목[props.title]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>글수정</button>
        </div>
    );
}
export default App;
