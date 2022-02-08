// 이벤트 핸들링 #1
// import React, { Component } from "react";

// class EventPractice extends Component {
//     state = {
//         message: "",
//     };
//     render() {
//         const { message } = this.state;
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요"
//                     value={message}
//                     onChange={(e) => {
//                         this.setState({
//                             message: e.target.value,
//                         });
//                     }}
//                 />
//                 <button
//                     onClick={() => {
//                         alert(message);
//                         this.setState({
//                             message: "",
//                         });
//                     }}
//                 >
//                     확인
//                 </button>
//             </div>
//         );
//     }
// }

// export default EventPractice;

// 이벤트 핸들링 #2 외부 함수를 사용
// import React, { Component } from "react";

// class EventPractice extends Component {
//     state = {
//         message: "",
//     };

//     constructor(props) {
//         super(props);
//         // 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서
//         // this의 관계가 끊김을 방지하기 위해 바인딩 작업을 여기서 해줌
//         this.handleChange = this.handleChange.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleChange(e) {
//         this.setState({
//             message: e.target.value,
//         });
//     }

//     handleClick(e) {
//         alert(this.state.message);
//         this.setState({
//             message: "",
//         });
//     }

//     render() {
//         const { message } = this.state;
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요"
//                     value={message}
//                     onChange={this.handleChange}
//                 />
//                 <button onClick={this.handleClick}>확인</button>
//             </div>
//         );
//     }
// }

// export default EventPractice;

// 이벤트 핸들링 #3 바인딩 작업 없이 화살표 함수 형태로 사용
// import React, { Component } from "react";

// class EventPractice extends Component {
//     state = {
//         message: "",
//     };

//     handleChange = (e) => {
//         this.setState({
//             message: e.target.value,
//         });
//     };

//     handleClick = () => {
//         alert(this.state.message);
//         this.setState({
//             message: "",
//         });
//     };

//     render() {
//         const { message } = this.state;
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요"
//                     value={message}
//                     onChange={this.handleChange}
//                 />
//                 <button onClick={this.handleClick}>확인</button>
//             </div>
//         );
//     }
// }

// export default EventPractice;

// 이벤트 핸들링 #4 여러 input 이벤트 핸들링, key
// import React, { Component } from "react";

// class EventPractice extends Component {
//     state = {
//         message: "",
//         username: "",
//     };

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value,
//             // 객체 안에서 key를 대괄호로 감싸면
//             // 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용 됨
//         });
//         console.log(typeof e.target.name);
//     };

//     handleClick = () => {
//         //alert(this.state.username + ": " + this.state.message);
//         alert(`${this.state.username}: ${this.state.message}`);
//         this.setState({
//             message: "",
//             username: "",
//         });
//     };

//     handleKeyPress = (e) => {
//         if (e.key === "Enter") {
//             this.handleClick();
//         }
//     };

//     render() {
//         const { message, username } = this.state;
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="사용자명"
//                     value={username}
//                     onChange={this.handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요"
//                     value={message}
//                     onChange={this.handleChange}
//                     onKeyPress={this.handleKeyPress}
//                 />
//                 <button onClick={this.handleClick}>확인</button>
//             </div>
//         );
//     }
// }

// export default EventPractice;

// 함수 컨포넌트 #1 useState 인자에 객체를 넣어 여러 이벤트 핸들링
// import { useState } from "react";

// const EventPractice = () => {
//     const [username, setUsername] = useState("");
//     const [message, setMessage] = useState("");
//     const onChangeUsername = (e) => setUsername(e.target.value);
//     const onChangeMessage = (e) => setMessage(e.target.value);
//     const onClick = () => {
//         alert(`${username}: ${message}`);
//         setUsername("");
//         setMessage("");
//     };
//     const onKeyPress = (e) => {
//         if (e.key === "Enter") {
//             onClick();
//         }
//     };

//     return (
//         <div>
//             <h1>이벤트 연습</h1>
//             <input
//                 type="text"
//                 name="username"
//                 placeholder="사용자명"
//                 value={username}
//                 onChange={onChangeUsername}
//             />
//             <input
//                 type="text"
//                 name="message"
//                 placeholder="아무거나 입력해 보세요"
//                 value={message}
//                 onChange={onChangeMessage}
//                 onKeyPress={onKeyPress}
//             />
//             <button onClick={onClick}>확인</button>
//         </div>
//     );
// };

// export default EventPractice;

import { useState } from "react";

const EventPractice = () => {
    const [form, setForm] = useState({
        username: "",
        message: "",
    });

    const { username, message } = form;
    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextForm);
    };

    const onClick = () => {
        alert(`${username}: ${message}`);
        setForm({
            username: "",
            message: "",
        });
    };
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;
