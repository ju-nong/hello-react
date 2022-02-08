// 클래스
// 장점 : 라이프 사이클 API, state 사용 가능

// import { Component } from "react";
// import PropTypes from 'prop-types';

// class MyComponent extends Component {
//   static defaultProps = {
//     name: "기본 이름",
//   };

//   static propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired,
//   };

//   render() {
//     const { name, favoriteNumber, children } = this.props; // 비구조화 할당
//     return (
//       <div>
//         안녕하세요, 제 이름은 {name}입니다. <br />
//         children 값은 {children}
//         입니다.
//         <br />
//         제가 좋아하는 숫자는 {favoriteNumber}입니다.
//       </div>
//     );
//   }
// }

// 함수형
// 장점 : 클래스에 비해 편하고, 메모리 사용과 용량이 적음(이 두개는 그닥 차이가 없다함)
// 단점 : 라이프 사이클 API, state를 16.8v에서 Hooks라는 기능으로 해결(비슷한 정도)
import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.<br></br>
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
  children: "공백",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
