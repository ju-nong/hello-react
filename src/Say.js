import { useState } from "react";

const Say = ({ children }) => {
    const [message, setMessage] = useState(children);
    // 현재 상태, 상태를 바꾸어 주는 함수(세터 함수)
    // 함수 인자로 기본값 설정
    const onClickEnter = () => setMessage("안녕하세요!");
    const onClickLeave = () => setMessage("안녕히가세요!");

    const [color, setColor] = useState("black");

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color: color }}>{message}</h1>
            <button style={{ color: "red" }} onClick={() => setColor("red")}>
                빨간색
            </button>
            <button
                style={{ color: "green" }}
                onClick={() => setColor("green")}
            >
                초록색
            </button>
            <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
                파란색
            </button>
        </div>
    );
};

export default Say;
