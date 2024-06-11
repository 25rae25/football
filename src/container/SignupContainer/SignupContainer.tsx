import styled from "@emotion/styled";

const SignWrap = styled.div`
  max-width: 760px;
  margin: 0 auto;
`;

const SignForm = styled.form`
  padding: 20px;
`;

const LabelWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const LabelTitle = styled.label`
  color: #4b5a64;
  font-size: 14px;
  font-weight: 500;
`;

const LabelInput = styled.input`
  border: 1px solid #e6ecf1;
  background-color: #f8fafb;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #1570ff;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  color: #fff;
`;

export default function SignupContainer() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoFocus
            placeholder="아이디를 입력하세요"
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div>
          <label htmlFor="name">이름</label>
          <input
            type="name"
            id="name"
            name="name"
            required
            placeholder="이름을 입력하세요"
          />
        </div>
        {/* <div>
          <label htmlFor="birth">생년월일</label>
          <div>
            <select name="year" id="year">
              <option value="1994">1994년</option>
              <option value="1995">1995년</option>
            </select>
            <select name="" id=""></select>
          </div>
        </div> */}
        <div>
          <button>가입하기</button>
        </div>
      </form>
    </div>
  );
}
